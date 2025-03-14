import React from "react";

function ChartCard({
  header,
  count,
  tick,
  percent,
}: {
  header: String;
  count: number;
  tick: "green" | "red" | "neutral";
  percent: number;
}) {
  return (
    <div className="border-[#222222] bg-[#161616] border p-5 rounded-xl flex-1 h-[180px] flex-row">
      <span className="opacity-40 block mb-1 -mt-1">{header}</span>
      <div className="flex items-center text-xs">
        <span className="text-2xl font-bold block mb-2 mr-2">{count}</span>
        <span className="font-bold block mb-2 text-xs bg-[#1D3024] text-[#73DC91] px-2 py-0.5 rounded-full">
          {tick === "green" ? "+" : "-"}
          {`${percent}%`}
        </span>
      </div>
    </div>
  );
}

export default ChartCard;
