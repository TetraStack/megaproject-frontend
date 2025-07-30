import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { useEffect, useState, useCallback } from "react";
import debounce from "debounce";
import { useCheckUsername, useRegisterUser } from "@/queries/userQueries";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/types/user";

interface Inputs {
  fullName: string;
  password: string;
  username: string;
  email: string;
  repassword: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const onsubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await registerUser(data);
    } catch (error) {}
  };

  const [usernameError, setUsernameError] = useState<string>("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<
    boolean | null
  >(null);

  const username = useWatch({ control, name: "username" });
  const { mutate: checkUsername } = useCheckUsername();

  const confirmPassword = useWatch({ control, name: "repassword" });
  const password = useWatch({ control, name: "password" });
  const [isMatched, setIsMatched] = useState<boolean | null>(null);

  useEffect(() => {
    if (!confirmPassword) {
      setIsMatched(null);
    } else if (confirmPassword === password) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, [confirmPassword, password]);

  const debouncedCheckUsername = useCallback(
    debounce((username: string) => {
      setUsernameError("");
      setIsUsernameAvailable(null);
      checkUsername(username, {
        onSuccess: () => {
          setIsUsernameAvailable(true);
          setUsernameError("");
        },
        onError: (error) => {
          const message = axios.isAxiosError(error)
            ? error.response?.data?.message || "Something went wrong"
            : error instanceof Error
            ? error.message
            : "Something went wrong";
          setIsUsernameAvailable(false);
          if (message) {
            setUsernameError(message);
          } else {
            setUsernameError("Username is already taken");
          }
        },
      });
    }, 2000),
    [checkUsername]
  );

  useEffect(() => {
    if (username && username.length >= 3) {
      debouncedCheckUsername(username);
    } else {
      setUsernameError("");
      setIsUsernameAvailable(null);
    }

    return () => {
      debouncedCheckUsername.clear();
    };
  }, [username, debouncedCheckUsername]);

  const { isPending, mutate: registerUser } = useRegisterUser();

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
          <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                {...register("fullName")}
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                {...register("username")}
                id="username"
                name="username"
                required
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  isUsernameAvailable === false
                    ? "border-red-500 focus:ring-red-500"
                    : isUsernameAvailable === true
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-blue-500"
                }`}
                placeholder="your username"
              />
              {usernameError && (
                <p className="text-red-500 text-sm mt-1">{usernameError}</p>
              )}
              {isUsernameAvailable === true && (
                <p className="text-green-500 text-sm mt-1">
                  Username is available!
                </p>
              )}
              {errors.username && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />

              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                {...register("repassword")}
                name="repassword"
                type="password"
                required
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  isMatched === false
                    ? "border-red-500 focus:ring-red-500"
                    : isMatched === true
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-blue-500"
                }`}
                placeholder="•••••••"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
              disabled={!isUsernameAvailable || isPending}
            >
              {isPending ? "Please wait..." : " Sign Up"}
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
