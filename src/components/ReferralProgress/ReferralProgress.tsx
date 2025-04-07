import React from "react";

const referrals = 26; // You can replace this value dynamically

// Function to get width class based on referral count
const getWidthClass = (referrals: number) => {
  if (referrals >= 0 && referrals <= 25) return "w-[20%]";
  if (referrals >= 26 && referrals <= 50) return "w-[40%]";
  if (referrals >= 51 && referrals <= 75) return "w-[60%]";
  if (referrals >= 76 && referrals <= 100) return "w-[80%]";
  return "w-[100%]"; // For values above 100
};

function TierPhase({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="pr-10">
      <h3 className="text-sm">{title}</h3>
      <h4 className="text-[#D1B2FF] text-sm font-bold">{subtitle} Referrals</h4>
      <p className="text-xs opacity-65">{description}</p>
    </div>
  );
}

function ReferralProgress() {
  const widthClass = getWidthClass(referrals);
  return (
    <>
      <div className="justify-between flex">
        <h3 className="text-xl font-bold">Referral Progress</h3>
        <h4 className="text-lg text-[#838383]">
          You're currently on{" "}
          <span className="font-bold text-white">Tier 1</span>
        </h4>
      </div>
      <div className="py-10 flex">
        <TierPhase
          title="Tier 2"
          subtitle="1-25"
          description="$5 credit per referral"
        />
        <TierPhase
          title="Tier 2"
          subtitle="26-50"
          description="$7.50 credit per referral"
        />
        <TierPhase
          title="Tier 3"
          subtitle="51-75"
          description="$10 credit per referral"
        />
        <TierPhase
          title="Tier Partner"
          subtitle="75+"
          description="$5 per month for every active referral"
        />
      </div>
      <div className="flex mb-10 justify-between">
        <div className="border-l border-[#838383] pl-3 text-lg opacity-65 font-bold w-[20%]">
          0
        </div>
        <div className="border-l border-[#838383] pl-3 text-lg opacity-65 font-bold w-[20%]">
          25
        </div>
        <div className="border-l border-[#838383] pl-3 text-lg opacity-65 font-bold w-[20%]">
          50
        </div>
        <div className="border-l border-[#838383] pl-3 text-lg opacity-65 font-bold w-[20%]">
          75
        </div>
        <div className="border-l border-[#838383] pl-3 text-lg opacity-65 font-bold w-[20%]">
          100+
        </div>
      </div>
      <div className="flex mb-10">
        <div className="bg-[#1E1B22] overflow-hidden rounded w-[100%]">
          <div
            className={`bg-[#B46AF5] text-sm overflow-hidden rounded h-[25px] flex justify-center items-center ${widthClass}`}
          >
            {referrals} referrals
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralProgress;
