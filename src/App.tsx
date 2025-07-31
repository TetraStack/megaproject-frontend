import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeProvider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/dashboard";
import { useAuthStore } from "./stores/userstore";
import CheckUser from "./components/checkUser";

const queryClient = new QueryClient();

function App() {
  const { user } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster richColors />
          <CheckUser>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route
                  path="/signup"
                  element={!user ? <SignUp /> : <Navigate to={"/dashboard"} />}
                />
                <Route
                  path="/signin"
                  element={!user ? <SignIn /> : <Navigate to={"/dashboard"} />}
                />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard /> : <Navigate to={"/signin"} />}
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CheckUser>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
