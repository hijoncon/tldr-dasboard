import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserInfo, UserDetails } from "@/api/users";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo(); // Assume getUserInfo is already defined elsewhere.
        if (res) {
          setUserInfo(res);
        } else {
          router.push("/auth/login.html");
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        router.push("/auth/login.html");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [router]);

  return { userInfo, loading };
};
