"use client";

import TileCard from "@/components/TileCard/TileCard";
import GoLive from "./components/GoLive";
import ChartCard from "@/components/ChartCard/ChartCard";
import ReferralsCard from "@/components/ReferralsCard/ReferralsCard";
import ReferralLink from "@/components/ReferralLink/ReferralLink";
import BookmarkCard from "@/components/BookmarkCard/BookmarkCard";
import VideoCard from "@/components/VideoCard/VideoCard";

const Overview = () => {
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
        {Array.from({ length: 21 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
