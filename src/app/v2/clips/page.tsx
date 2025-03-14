"use client";

import ClipCard from "@/components/ClipCard/ClipCard";

const Clips = () => {
  return (
    <div className="text-white py-10">
      <div className="grid grid-cols-4 gap-4 pb-16">
        {Array.from({ length: 21 }).map((_, index) => (
          <ClipCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Clips;
