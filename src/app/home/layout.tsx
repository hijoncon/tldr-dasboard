"use client";
import Image from "next/image";
import logo from "@/logo.svg";
import placeholder from "@/logo_100.png";
import WindowIcon from "@mui/icons-material/Window";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Academy from "@mui/icons-material/AutoStories";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { getUserInfo, UserDetails } from "@/api/users";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userName, setUsername] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUsername(res.username);
        setProfileLink(res.profile_link);
        setProfilePic(res.profile_picture);
        return;
      }
      router.push("/auth/login.html");
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  interface MenuItemProps {
    href: string;
    icon: React.ElementType;
    text: string;
    comingSoon?: boolean;
    disabled?: boolean;
  }

  const MenuItem: React.FC<MenuItemProps> = ({
    href,
    icon: Icon,
    text,
    comingSoon = false,
    disabled = false,
  }) => {
    const content = (
      <div
        className={`flex items-center p-2 rounded-lg ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
        }`}
      >
        <Icon className="w-6 h-6 mr-2" />
        <div className="flex flex-col">
          <div>{text}</div>
          {comingSoon && <div className="text-xs">Coming Soon...</div>}
        </div>
      </div>
    );
    if (disabled) {
      return content;
    }
    return <Link href={href}>{content}</Link>;
  };

  if (!userName) {
    return null;
  }

  return (
    <div className="relative p-5 flex-col lg:flex lg:flex-row bg-background h-screen w-screen text-text lg:border-border">
      {/* Header with Logo and Menu Button */}
      <div className="flex justify-between items-center p-4 bg-foreground lg:hidden rounded-t-lg">
        <div className="flex gap-x-2 h-[40px]">
          <Image
            className="flex lg:hidden"
            src={logo}
            alt="TL;DR logo"
            width={100}
            height={26}
          />
          <div className="text-textSecondary text-base h-full flex items-end">
            BETA
          </div>
        </div>
        <button onClick={toggleMobileMenu} className="text-text">
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* <nav className="absolute top-0 left-0 right-0 lg:top-0 lg:bottom-0 lg:right-0 lg:left-auto 
                  w-full lg:w-64 p-5 bg-foreground"> */}
      <div
        className={`relative bg-foreground min-w-[300px] max-h-[850px] min-h-[300px] ${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:flex lg:rounded-lg p-5`}
      >
        <div className="w-full h-fit flex-col">
          <div className="flex gap-x-2 h-[40px]">
            <Image
              className="hidden lg:flex"
              src={logo}
              alt="TL;DR logo"
              width={100}
              height={26}
            />
            <div className="hidden lg:flex text-textSecondary text-base h-full items-end">
              BETA
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col md:pt-10 text-text justify-center">
            <MenuItem href="/home.html" icon={WindowIcon} text="Dashboard" />
            <MenuItem
              href="/home/referrals"
              icon={Academy}
              text="TL;DR Academy"
              comingSoon={true}
              disabled={true}
            />
            <MenuItem
              href="/referrals.html"
              icon={ListAltIcon}
              text="Referral Program"
            />
            <MenuItem
              href="/home/settings.html"
              icon={SettingsIcon}
              text="Account Settings"
            />

            <div className="h-fit flex p-8 gap-x-5 absolute inset-x-0 bottom-0">
              <Image
                width={54}
                height={54}
                className="w-[56px] h-[56px] rounded-lg"
                src={profilePic ?? placeholder}
                alt="profile picture"
              />
              <div className="flex flex-col justify-center text-lg font-bold">
                {userName}
                <Link
                  className="text-base text-purple-500 underline"
                  href={profileLink}
                  target="_blank"
                >
                  Profile Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </nav> */}

      {children}
    </div>
  );
}
