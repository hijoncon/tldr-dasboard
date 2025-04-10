"use client";

import TileCard from "@/components/TileCard/TileCard";
import GoLive from "./components/GoLive";
import ChartCard from "@/components/ChartCard/ChartCard";
import ReferralsCard from "@/components/ReferralsCard/ReferralsCard";
import ReferralLink from "@/components/ReferralLink/ReferralLink";
import BookmarkCard from "@/components/BookmarkCard/BookmarkCard";
import VideoCard from "@/components/VideoCard/VideoCard";
import { useEffect, useState } from "react";

type Clip = any; // Replace with actual structure if you know it
type Stream = { id: string };

export default function Overview() {
  const [clips, setClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const email = "dev@tl-dr.tv";

  useEffect(() => {
    const fetchClips = async () => {
      try {
        // Step 1: Get stream list
        const streamRes = await fetch(
          `https://api-v2.tl-dr.tv/stream/list/${email}`
        );
        if (!streamRes.ok) throw new Error("Failed to load stream list");

        const streams: any[] = await streamRes.json();

        // Step 2: Fetch clips in parallel
        const clipPromises = streams.map(async (stream) => {
          try {
            const res = await fetch(
              `https://api-v2.tl-dr.tv/stream/clips/${stream.stream_id}`
            );
            if (!res.ok) throw new Error(`Failed for ID ${stream.stream_id}`);
            return await res.json();
          } catch (err) {
            return {
              error: true,
              streamId: stream.stream_id,
              message: (err as Error).message,
            };
          }
        });

        const allClips = await Promise.all(clipPromises);
        setClips(allClips);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchClips();
  }, [email]);

  // if (loading) return <p>Loading clips...</p>;
  // if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="text-white">
      <div className="flex gap-5 py-10">
        <div className="border-[#222222] border w-[40%] rounded-2xl p-5">
          <div className="mb-5">
            <GoLive />
          </div>
          <div className="flex gap-5 mb-5">
            <TileCard
              header={"Total Views"}
              count={2534}
              tick="green"
              percent={9}
            />
            <TileCard
              header={"# of Clips"}
              count={324}
              tick="green"
              percent={9}
            />
            <TileCard
              header={"Voice Clips"}
              count={14}
              tick="green"
              percent={9}
            />
          </div>
          <div className="mb-5">
            <ChartCard
              header={"Total Chats"}
              count={5325}
              tick="green"
              percent={9}
            />
          </div>
          <div>
            <ChartCard
              header={"Total Views"}
              count={5325}
              tick="green"
              percent={9}
            />
          </div>
        </div>
        <div className="border-[#222222] border w-[40%] rounded-2xl p-5">
          <div className="mb-10">
            <ReferralsCard />
          </div>
          <h3 className="flex-grow font-semibold text-xl items-center mb-5">
            Your Referral Stats
          </h3>
          <div className="flex gap-5 mb-10">
            <TileCard
              header={"Your Active Referrals"}
              count={23}
              tick="green"
              percent={9}
            />
            <TileCard
              header={"Referral Link Views"}
              count={324}
              tick="red"
              percent={9}
            />
            <TileCard
              header={"Money Generated"}
              count={23}
              tick="green"
              percent={9}
            />
          </div>
          <h3 className="flex-grow font-semibold text-xl items-center mb-5">
            Your Referral Link
          </h3>
          <ReferralLink />
        </div>
        <div className="border-[#222222] border w-[20%] rounded-2xl p-5">
          <h3 className="flex-grow font-semibold text-xl items-center mb-5">
            Bookmarks
          </h3>
          <BookmarkCard />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pb-20">
        {clips.map((clip, index) => (
          <VideoCard data={clip} key={index} />
        ))}
      </div>
    </div>
  );
}
