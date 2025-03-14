import React from "react";
import {
  FirstPlace,
  ProfileIcon,
  ReferralIcon,
  SecondPlace,
  ThirdPlace,
} from "../ExportIcons";
import Image from "next/image";
import { FirstPage } from "@mui/icons-material";

const data = [
  {
    image: "https://picsum.photos/200/200",
    user: "NyrtBag",
    referred: 124,
    generated: 235,
  },
  {
    image: "https://picsum.photos/200/200",
    user: "BennyWizardPants",
    referred: 54,
    generated: 132,
  },
  {
    image: "https://picsum.photos/200/200",
    user: "xqcow",
    referred: 34,
    generated: 47,
  },
];

function ReferralsCard() {
  return (
    <div>
      <div className="flex mb-5">
        <h3 className="flex-grow font-bold text-2xl items-center">
          Referral Leaderboard
        </h3>
        <ReferralIcon />
      </div>
      <div>
        <div className="flex items-center gap-5 opacity-65 border-b border-[#171717]">
          <div className="w-6/12 flex items-center py-2 pl-5">
            <div className="mr-2">
              <ProfileIcon />
            </div>
            User
          </div>
          <div className="w-3/12 text-right py-2"># Referred</div>
          <div className="w-3/12 text-right py-2 pr-5">$ Generated</div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-5 ${
              index !== data.length - 1 ? "border-b border-[#171717]" : ""
            }`}
          >
            <div className="w-6/12 flex items-center py-2 pl-5">
              <div className="mr-4 flex-shrink-0 object-contain">
                <Image
                  alt={item.user}
                  src={item.image}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </div>
              <span className="block font-bold mr-4">{item.user}</span>
              <div className="flex-shrink-0 object-contain">
                {index === 0 && <FirstPlace />}
                {index === 1 && <SecondPlace />}
                {index === 2 && <ThirdPlace />}
              </div>
            </div>
            <div className="w-3/12 text-right py-2 font-bold">
              {item.referred}
            </div>
            <div className="w-3/12 text-right py-2 pr-5 font-bold">
              {item.generated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReferralsCard;
