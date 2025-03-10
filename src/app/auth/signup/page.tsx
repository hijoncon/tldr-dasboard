"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  twitchAccount: string;
}

interface SignupFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  twitchAccount?: string;
}

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    twitchAccount: "",
  });
  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    let newErrors: SignupFormErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`;
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        router.push("/auth/verify.html");
      } catch (error: any) {
        if (error.response) {
          console.error("Signup error:", error.response.data);
          setErrors({ email: error.response.data });
        } else {
          console.error("Signup error:", error);
        }
      }
    }
  };

  return (
    <div className="flex h-fit w-full justify-center items-center overflow-y-auto text-text">
      <div className="flex flex-col p-5 w-[375px]">
        <div className="text-2xl font-bold pt-5">Sign Up</div>
        <div className="text-md text-textSecondary">
          Start your 30-day free trail
        </div>
        <form
          name="signup"
          id="signup"
          className="flex flex-col gap-y-2 md:gap-y-4 pt-5"
          onSubmit={handleSubmit}
        >
          <div>
            <div>First Name*</div>
            <input
              name="firstName"
              id="firstName"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="text-red-500">{errors.firstName}</div>
            )}
          </div>
          <div>
            <div>Last Name*</div>
            <input
              name="lastName"
              id="lastName"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="text-red-500">{errors.lastName}</div>
            )}
          </div>
          <div>
            <div>Email*</div>
            <input
              name="email"
              id="email"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
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
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <div>
            <div>Confirm Password*</div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Re-enter your password"
              onChange={handleChange}
            />
            <div className="text-textSecondary">
              Must be atleast 8 characters
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500">{errors.confirmPassword}</div>
            )}
          </div>
          <div>
            <div>Twitch Account</div>
            <input
              name="twitchAccount"
              id="twitchAccount"
              className="h-[44px] bg-textBackground px-5 rounded-md w-full text-text"
              placeholder="Enter twitch username"
              onChange={handleChange}
            />
            {errors.twitchAccount && (
              <div className="text-red-500">{errors.twitchAccount}</div>
            )}
          </div>
          <button type="submit" className="button my-2">
            Sign Up
          </button>
          <span className="flex w-full justify-center">
            Already have an account?
            <Link className="font-bold" href={"/auth/login.html"}>
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
