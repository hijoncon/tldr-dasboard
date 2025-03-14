"use client";

import TimelineHeader from "@/components/TimelineHeader/TimelineHeader";
import VideoCard from "@/components/VideoCard/VideoCard";

const Highlights = () => {
  return (
    <div className="text-white py-10">
      <TimelineHeader />
      <div className="grid grid-cols-4 gap-4 pb-16">
        {Array.from({ length: 5 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
      <TimelineHeader />
      <div className="grid grid-cols-4 gap-4 pb-16">
        {Array.from({ length: 1 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
      <TimelineHeader />
      <div className="grid grid-cols-4 gap-4 pb-16">
        {Array.from({ length: 7 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
