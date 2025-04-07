"use client";

import { EarnRewards } from "@/components/ExportIcons";
import ReferralLink from "@/components/ReferralLink/ReferralLink";
import ReferralProgress from "@/components/ReferralProgress/ReferralProgress";
import ReferralsCard from "@/components/ReferralsCard/ReferralsCard";
import TileCard from "@/components/TileCard/TileCard";

const Referrals = () => {
  return (
    <div className="text-white">
      <div className="flex gap-5 py-10">
        <div className="w-[50%] p-5 pl-0">
          <div className="mb-10">
            <EarnRewards />
          </div>
          <p className="text-2xl mb-10">
            Save your current framing setup to quickly and easily re-use on
            future clips you generate with TL;DR.
          </p>
          <ReferralProgress />
        </div>
        <div className="border-[#222222] border w-[50%] rounded-2xl p-5">
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
          <div className="mb-10">
            <h3 className="flex-grow font-semibold text-xl items-center mb-5">
              Your Referral Link
            </h3>
            <ReferralLink />
          </div>
          <div className="mb-10">
            <ReferralsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
