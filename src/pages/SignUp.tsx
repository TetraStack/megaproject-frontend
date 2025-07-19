import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-2">
            Create your account
          </CardTitle>
          <CardDescription>
            Sign up to get started with ProjectFlow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <Button
              type="submit"
              className="w-full gradient-purple-blue text-white"
            >
              Sign Up
            </Button>
          </form>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
