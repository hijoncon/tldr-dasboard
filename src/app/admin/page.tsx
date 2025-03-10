'use client'

import { fetchAllClips, Clip } from "@/api/streams";
import { getUserInfo, UserDetails } from "@/api/users";
import { VideoShowcase } from "@/components/videoShowcase";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [clips, setClips] = useState<Clip[]>([]);
  const [user, SetUser] = useState<UserDetails | null>(null);
  useEffect(() => {
    // past three days of videos
    const curTime = Math.floor(new Date().getTime() / 1000) - 86400 * 3;
    fetchAllClips(curTime).then((clips) => {
      setClips(clips);
    });
    getUserInfo().then((user) => SetUser(user))
  }, []);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 gap-x-5 justify-items-center">
      {clips.map((clip, i) => (
        <VideoShowcase video={clip} tier={user?.tier ?? "basic"} key={i} />
      ))}
    </div>
  );
};

export default AdminDashboard;
