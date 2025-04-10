"use client";

import TimelineHeader from "@/components/TimelineHeader/TimelineHeader";
import VideoCard from "@/components/VideoCard/VideoCard";
import { useEffect, useState } from "react";

type Clip = any; // Replace with actual structure if you know it

const Highlights = () => {
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

  return (
    <div className="text-white py-10">
      <TimelineHeader />
      <div className="grid grid-cols-4 gap-4 pb-16">
        {clips.map((clip, index) => (
          <VideoCard data={clip} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
