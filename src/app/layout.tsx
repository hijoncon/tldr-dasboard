import type { Metadata } from "next";
import localFont from "next/font/local";
import logo from "@/logo_100.png";
import "./globals.css";
import Alert from '@mui/material/Alert';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TL;DR.tv Dashboard",
  description: "Dashboard for TL;DR.tv users",
  icons: {
    icon: logo.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const message = "We're in Beta Testing, so you might see updates or minor changes as we refine the platform. Your feedback is key—thanks for helping us improve!";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Alert sx={{justifyContent: 'center', background: '#D1B2FF'}} severity="info">{message}</Alert>
        {children}
      </body>
    </html>
  );
}
