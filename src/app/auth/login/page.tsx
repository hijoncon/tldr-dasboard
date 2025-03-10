"use client";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

interface LoginErrors {
  emailError?: string;
  passwordError?: string;
  loginVerificationError?: string;
}

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<LoginErrors>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    // we reset the login Errors for every submit
    let newErrors: LoginErrors = {};
    if (!loginData.email) newErrors.emailError = "Email is required";
    if (!loginData.password) newErrors.passwordError = "Password is required";

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`;
        await axios.post(url, loginData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setSuccessMsg("Login Successfull! Return to the extension.");
        router.push("/home");
      } catch (error: any) {
        if (error.response) {
          setLoginErrors((prev) => ({
            ...prev,
            loginVerificationError:
              "Failed to login, check email and password.",
          }));
          console.error("Signup error:", error.response.data);
        } else {
          console.error("Signup error:", error);
        }
      }
    }
  };

  return (
    <div className="flex h-fit w-full justify-center items-center overflow-x-auto text-text">
      <div className="flex flex-col p-5 w-[375px]">
        <div className="text-2xl font-bold pt-5">Login</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-2 md:gap-y-4 pt-5"
        >
          <div>
            <div>Email*</div>
            <input
              name="email"
              id="email"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {loginErrors.emailError && (
              <div className="text-red-500">{loginErrors.emailError}</div>
            )}
          </div>
          <div>
            <div>Password*</div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="h-[44px] rounded-md w-full px-5 pr-14 bg-textBackground text-text"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <InputAdornment
                position="end"
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            </div>
            {loginErrors.passwordError && (
              <div className="text-red-500">{loginErrors.passwordError}</div>
            )}
          </div>
          {loginErrors.loginVerificationError && (
            <div className="text-red-500">
              {loginErrors.loginVerificationError}
            </div>
          )}
          {successMsg && <div className="text-green-500">{successMsg}</div>}
          <button type="submit" className="button my-2">
            Log In
          </button>
          <span className="flex w-full justify-center">
            <Link className="font-bold" href={"/auth/forgotPassword.html"}>
              Forgot Password?
            </Link>
          </span>
          <span className="flex w-full justify-center">
            Don't have an account?
            <Link className="font-bold" href={"/auth/signup.html"}>
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
