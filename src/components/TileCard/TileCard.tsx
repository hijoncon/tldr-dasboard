import React from "react";

function TileCard({
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
    <div className="border-[#222222] bg-[#161616] border p-5 pr-0 rounded-xl flex-1 min-h-[116px] flex-row">
      <span className="opacity-40 block mb-1 -mt-1">{header}</span>
      <span className="text-2xl font-bold block mb-2">{count}</span>
      <div className="flex items-center text-xs">
        {tick === "green" && (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M5.59444 1.75696C6.16691 1.04137 6.45314 0.683571 6.82175 0.616796C6.93962 0.595443 7.06038 0.595443 7.17825 0.616796C7.54686 0.683571 7.83309 1.04137 8.40556 1.75695L12.6604 7.07555C13.5544 8.19295 14.0013 8.75165 13.8945 9.22162C13.8612 9.36822 13.7953 9.50541 13.7016 9.62301C13.4013 10 12.6858 10 11.2549 10H2.74512C1.31416 10 0.59867 10 0.298409 9.62301C0.204749 9.50541 0.138808 9.36822 0.105491 9.22162C-0.00131863 8.75165 0.445641 8.19295 1.33956 7.07555L5.59444 1.75696Z"
              fill="#7FE76F"
            />
          </svg>
        )}
        {` ${percent}`}%
      </div>
    </div>
  );
}

export default TileCard;
