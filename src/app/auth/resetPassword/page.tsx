"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface ResetPasswordInput {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordErrors {
  password?: string;
  confirmPassword?: string;
}

export default function ResetPassword() {
  const router = useRouter();
  const [formData, setFormData] = useState<ResetPasswordInput>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ResetPasswordErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    let newErrors: ResetPasswordErrors = {};
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
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`;
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        router.push("/auth/login.html");
      } catch (error: any) {
        if (error.response) {
          console.error("Reset Password error:", error.response.data);
        } else {
          console.error("Reset Password error:", error);
        }
      }
    }
  };

  return (
    <div className="flex h-fit w-full justify-center items-center overflow-y-auto text-text">
      <div className="flex flex-col p-5 w-[375px]">
        <div className="text-2xl font-bold pt-5">Reset Password</div>
        <form
          name="signup"
          id="signup"
          className="flex flex-col gap-y-2 md:gap-y-4 pt-5"
          onSubmit={handleSubmit}
        >
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

          <button type="submit" className="button my-2">
            Update Password
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
