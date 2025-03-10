"use client";

import { updatePassword } from "@/api/auth";
import { getUserInfo } from "@/api/users";
import { useEffect, useState } from "react";

export default function Settings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [twitchChannel, setTwtichChannel] = useState("");
  const [passwordError, setShowPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const handlePasswordUpdate = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updatePassword(formData).then((res) => {
      if (!res) {
        setShowPasswordError("Failed to update password!");
        return;
      }
      setPasswordSuccess("Password changed successfully!");
    });
  };

  useEffect(() => {
    getUserInfo().then((user) => {
      setEmail(user?.email ?? "");
      setFirstName(user?.first_name ?? "");
      setLastName(user?.last_name ?? "");
      setTwtichChannel(user?.username ?? "");
    });
  }, []);

  return (
    <div className="w-full flex justify-center max-h-screen">
      <div className="flex flex-col max-w-[1150px] w-full p-5 overflow-y-auto">
        <div className="text-3xl font-bold">Settings</div>
        <div className="text-lg text-textSecondary">
          Manage your team preferences here
        </div>

        <form className="w-full pt-5">
          <div className="divide-y divide-solid gap-y-5">
            <div className="py-5">
              <div className="text-xl font-bold">Your Profile</div>
              <div className="text-lg text-textSecondary">
                Update your profile details
              </div>
            </div>

            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">First Name</div>
              <input
                name="firstName"
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px]"
                defaultValue={firstName}
              />
            </div>
            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">Last Name</div>
              <input
                name="lastName"
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px]"
                defaultValue={lastName}
              />
            </div>
            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">
                Email
                <div className="hidden md:flex text-md text-textSecondary">
                  Invoices will be sent to this email contact us to change it
                </div>
              </div>
              <input
                type="email"
                disabled
                name="email"
                required
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px] text-textSecondary"
                id="email"
                defaultValue={email}
              />
            </div>
            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">
                Connected Twitch Account
              </div>
              <input
                name="twitchChannel"
                disabled
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px] text-textSecondary"
                defaultValue={twitchChannel}
              />
            </div>
            <div className="flex py-5 gap-x-5 justify-end">
              <button
                type="reset"
                className="px-3 p-2 font-bold text-lg bg-foreground rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 p-2 font-bold text-lg bg-button rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handlePasswordUpdate} className="w-full pt-5">
          <div className="divide-y divide-solid gap-y-5">
            <div className="py-5">
              <div className="text-xl font-bold">Password</div>
              <div className="text-lg text-textSecondary">
                Please enter your current password to change your password
              </div>
            </div>

            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">Current Password</div>
              <input
                name="currentPassword"
                type="password"
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px]"
                id="currentPassword"
              />
            </div>
            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">New Password</div>
              <input
                name="newPassword"
                type="password"
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px]"
                id="newPassword"
              />
            </div>
            <div className="md:flex py-5">
              <div className="sm:w-1/3 max-w-[350px]">Confirm Password</div>
              <input
                name="confirmPassword"
                type="password"
                className="rounded-lg bg-textBackground text-lg p-2 max-w-[512px] md:w-1/3 w-2/3 max-h-[44px]"
                id="confirmPassword"
              />
            </div>
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
            {passwordSuccess && (
              <div className="text-green-500">{passwordSuccess}</div>
            )}
            <div className="flex py-5 gap-x-5 justify-end">
              <button
                type="reset"
                className="px-3 p-2 font-bold text-lg bg-foreground rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 p-2 font-bold text-lg bg-button rounded-md"
              >
                Update Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
