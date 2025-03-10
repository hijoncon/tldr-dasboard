"use client";

import { useEffect, useState } from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mr-5">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};

const RedirectPage = () => {
  useEffect(() => {
    // Run this code only on the client
    if (typeof window !== "undefined") {
      // Parse the URL parameters to get `fpr`
      const urlParams = new URLSearchParams(window.location.search);
      const fpr = urlParams.get("fpr");

      if (fpr) {
        // Show loading text after 500ms
        setTimeout(() => {
          // Set the cookie manually
          document.cookie = `fpr=${fpr}; path=/; max-age=${7 * 24 * 60 * 60};`; // Cookie expires in 7 days

          // Redirect to the desired URL
          window.location.replace("https://tl-dr.tv");
        }, 1000);
      }
    }
  }, []);

  return (
    <div className="text-[#fff] flex justify-center items-center align-middle h-screen">
      <Spinner />
      <p>Loading...</p>
    </div>
  );
};

export default RedirectPage;
