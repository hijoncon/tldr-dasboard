"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface ForgotPasswordInput {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
}

interface ForgotPasswordErrors {
  email?: string;
  otp?: string;
  password?: string;
  confirmPassword?: string;
}

export default function ForgotPassword() {
  const router = useRouter();
  const [formData, setFormData] = useState<ForgotPasswordInput>({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ForgotPasswordErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    console.log(formData);
    let newErrors: ForgotPasswordErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.otp) newErrors.otp = "OTP is required";
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
    console.log(errors);
    if (validateForm()) {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/confirm-password`;
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        router.push("/auth/login");
      } catch (error: any) {
        if (error.response) {
          console.error("Forgot password error:", error.response.data);
        } else {
          console.error("Forgot password error:", error);
        }
      }
    }
  };

  const handleResendForgetPasswordOTP = async (e: any) => {
    e.preventDefault();
    if (formData.email) {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`;
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error: any) {
        if (error.response) {
          console.error("Resend Forgot password error:", error.response.data);
        } else {
          console.error("Resend Forgot password error:", error);
        }
      }
    } else {
      const newErrors: ForgotPasswordErrors = {
        email: "Email is required to receive OTP",
      };
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex h-fit w-full justify-center items-center overflow-y-auto text-text">
      <div className="flex flex-col p-5 w-[375px]">
        <div className="text-2xl font-bold pt-5">Forgot Password</div>
        <form
          name="forgot-password"
          id="forgot-password"
          className="flex flex-col gap-y-2 md:gap-y-4 pt-5"
          onSubmit={handleSubmit}
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
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div>
            <label>Code</label>
            <input
              name="otp"
              id="otp"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your otp received in your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div>Password*</div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="h-[44px] rounded-md w-full px-5 pr-12 bg-textBackground text-text"
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
            <div className="relative">
              <div>Confirm Password*</div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
                placeholder="Re-enter your password"
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
                  onClick={(e) => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  sx={{
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            </div>
            <div className="text-textSecondary">
              Must be atleast 8 characters
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500">{errors.confirmPassword}</div>
            )}
          </div>

          <button type="submit" className="button my-2">
            Update Password
          </button>

          <span className="flex w-full justify-center">
            <span
              className="font-bold hover:underline"
              onClick={handleResendForgetPasswordOTP}
            >
              Request OTP / Resend OTP
            </span>
          </span>
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
