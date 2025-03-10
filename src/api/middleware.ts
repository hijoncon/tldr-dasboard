import axios from "axios";
import { config } from "process";

export const axiosWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080',
  withCredentials: true,
});