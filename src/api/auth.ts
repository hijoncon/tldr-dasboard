import axios from "axios";
import { axiosWithAuth } from "./middleware";

export const updatePassword = async (formData: FormData): Promise<string | null> => {
  try {
  const url = `/auth/reset-password`;
  const res = await axiosWithAuth.post(url, formData, {
    headers : {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data
  } catch(err) {
    console.error('Failed to get streams due to:', err)
  }
  return null;
}