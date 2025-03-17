"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

interface VerificationInput {
  email: string;
  otp: string;
}

interface VerificationInputErrors {
  emailError?: string;
  otpError?: string;
  verificationError?: string;
}

export default function Verify() {
  const router = useRouter();
  const [verificationInput, setVerificationInput] = useState<VerificationInput>(
    {
      email: "",
      otp: "",
    }
  );
  const [verificationInputErrors, setVerificationInputErrors] =
    useState<VerificationInputErrors>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVerificationInput((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    // we reset the verification errors for every submit
    let newErrors: VerificationInputErrors = {};
    if (!verificationInput.email) newErrors.emailError = "Email is required";
    if (!verificationInput.otp) newErrors.otpError = "OTP is required";

    setVerificationInputErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify`;
        await axios.post(url, verificationInput, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        router.push("/auth/login");
      } catch (error: any) {
        if (error.response) {
          setVerificationInputErrors((prev) => ({
            ...prev,
            verificationError: "Failed to verify OTP",
          }));
          console.error("Signup error:", error.response.data);
          setVerificationInputErrors({
            verificationError: error.response.data,
          });
        } else {
          console.error("Signup error:", error);
        }
      }
    }
  };

  const resendOTP = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/resend-code`;
    let newErrors: VerificationInputErrors = {};
    if (!verificationInput.email) {
      newErrors.emailError = "Email is required";
      setVerificationInputErrors(newErrors);
    } else {
      try {
        await axios.post(
          url,
          {
            email: verificationInput.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err: any) {
        if (err.response) {
          console.error(`Failed to resend otp due to:${err.response.data}`);
        } else {
          console.error(`Failed to resend otp due to:${err}`);
        }
      }
    }
  };

  return (
    <div className="flex h-fit w-full justify-center items-center text-text">
      <div className="flex flex-col p-5 w-[375px]">
        <div className="text-2xl font-bold pt-5">User Verification</div>
        <form
          name="verify"
          id="verify"
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
            {verificationInputErrors?.emailError && (
              <div className="text-red-500">
                {verificationInputErrors.emailError}
              </div>
            )}
          </div>
          <div>
            <div>OTP</div>
            <input
              name="otp"
              id="otp"
              className="h-[44px] rounded-md w-full px-5 bg-textBackground text-text"
              placeholder="Enter your one-time password"
              onChange={handleChange}
            />
            <div className="text-textSecondary">
              Check you email inbox or spam folder
            </div>
            {verificationInputErrors?.otpError && (
              <div className="text-red-500">
                {verificationInputErrors.otpError}
              </div>
            )}
          </div>
          {verificationInputErrors?.verificationError && (
            <div className="text-red-500">
              {verificationInputErrors.verificationError}
            </div>
          )}
          <button type="submit" className="button my-2">
            Verify
          </button>
          <span className="flex w-full justify-center">
            Didn't receive the code?
            <a className="font-bold underline" onClick={resendOTP}>
              Resend OTP
            </a>
          </span>
          <span className="flex w-full justify-center">
            Already have an account?
            <Link className="font-bold" href={"/auth/login"}>
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
