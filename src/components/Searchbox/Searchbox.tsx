"use client";

import { useState } from "react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="border-0 px-5 py-0 rounded-xl m-0 bg-[#272727] leading-none h-[48px] w-[304px] transition-all outline-none focus:bg-[#333] text-white"
        />
        <svg
          className="absolute top-3.5 right-4"
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_522_11924)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.736 8.8179C3.736 5.58376 6.36767 2.95292 9.6018 2.95292C12.8351 2.95292 15.4668 5.58376 15.4668 8.8179C15.4668 12.0521 12.8351 14.6837 9.6018 14.6837C6.36767 14.6837 3.736 12.0521 3.736 8.8179ZM18.5602 18.1237C18.8851 17.7979 18.8844 17.2703 18.5586 16.9454L15.316 13.7112C16.446 12.3937 17.1335 10.6862 17.1335 8.8179C17.1335 4.66542 13.7543 1.28625 9.6018 1.28625C5.4485 1.28625 2.06934 4.66542 2.06934 8.8179C2.06934 12.9712 5.4485 16.3504 9.6018 16.3504C11.2868 16.3504 12.8393 15.7871 14.0951 14.8479L17.3818 18.1254C17.7076 18.4503 18.2352 18.4496 18.5602 18.1237Z"
              fill="white"
              fill-opacity="0.48"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_522_11924"
              x="-1.09961"
              y="0"
              width="23"
              height="24.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1.5"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_522_11924"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_522_11924"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="0.5"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_522_11924"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_522_11924"
                result="effect2_dropShadow_522_11924"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_522_11924"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </form>
    </div>
  );
};

export default SearchBox;
