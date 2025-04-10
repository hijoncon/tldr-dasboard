"use client";
import { redirect } from "next/navigation";

const Home = () => {
  redirect("/auth/login"); // or any other route
};

export default Home;
