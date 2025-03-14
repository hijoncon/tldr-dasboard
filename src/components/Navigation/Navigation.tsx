"use client";

import React, { useState } from "react";
import SearchBox from "../Searchbox/Searchbox";

function Navigation() {
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    // Example of handling search logic
    console.log("Searching for:", query);
    setSearchResult(`You searched for: ${query}`);
  };

  return (
    <>
      <div className="flex">
        <div className="flex py-10 items-center flex-grow">
          <div className="flex gap-2 items-baseline mr-10">
            <a
              href="/v2/overview"
              className="hover:animate-pulse transition-all"
            >
              <svg
                width="96"
                height="26"
                viewBox="0 0 96 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M81.3976 13.4829H89.7919V18.9057H81.3976V26H75.7891V0H89.7919V5.38572H81.3976V13.4829ZM95.4005 13.4829H89.7919V5.38572H95.4005V13.4829ZM95.4005 26H89.7919V18.9057H95.4005V26Z"
                  fill="white"
                />
                <path
                  d="M52.7197 26V0H66.2769V5.38572H71.6626V26H52.7197ZM66.054 5.38572H58.3283V20.6143H66.054V5.38572Z"
                  fill="white"
                />
                <rect
                  x="41.5254"
                  width="6.60333"
                  height="6.60333"
                  fill="#C197FF"
                />
                <rect
                  x="41.5254"
                  y="12.7943"
                  width="6.60333"
                  height="6.60333"
                  fill="#C197FF"
                />
                <rect
                  x="44.8281"
                  y="19.3966"
                  width="3.30167"
                  height="6.60333"
                  fill="#C197FF"
                />
                <path
                  d="M27.7717 20.6143H22.1631V0H27.7717V20.6143ZM38.9145 26H27.7717V20.6143H38.9145V26Z"
                  fill="white"
                />
                <path
                  d="M0 0H19.9829V5.38572H12.8143V26H7.20571V5.38572H0V0Z"
                  fill="white"
                />
              </svg>
            </a>
            <span className="text-white opacity-25 tracking-wider">BETA</span>
          </div>
          <SearchBox onSearch={handleSearch} />
        </div>
        <div className="flex items-center gap-5">
          <a
            href=""
            className="h-[40px] flex rounded-full hover:text-glow border-white text-white glow border items-center px-3 opacity-25 hover:opacity-100 transition-all"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00071 8.94339C6.78888 8.94339 5.80254 7.95705 5.80254 6.74522C5.80254 5.5334 6.78888 4.54706 8.00071 4.54706C9.21254 4.54706 10.1989 5.5334 10.1989 6.74522C10.1989 7.95705 9.21254 8.94339 8.00071 8.94339ZM11.7504 0.25H4.24964L0.5 6.74522L4.24964 13.2404H11.7504L15.5 6.74522L11.7504 0.25Z"
                fill="white"
              />
            </svg>
            Account Settings
          </a>
          <a
            href=""
            className="h-[40px] flex rounded-full border-white text-white border items-center px-3 opacity-25 hover:opacity-100 transition-all"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M2.625 5.25C4.07476 5.25 5.25 4.07476 5.25 2.62501C5.25 1.17525 4.07476 0 2.625 0C1.17526 0 0 1.17525 0 2.62501C0 4.07476 1.17526 5.25 2.625 5.25Z"
                fill="white"
              />
              <path
                d="M9.37504 5.25C10.8248 5.25 12 4.07476 12 2.62501C12 1.17525 10.8248 0 9.37504 0C7.92524 0 6.75 1.17525 6.75 2.62501C6.75 4.07476 7.92524 5.25 9.37504 5.25Z"
                fill="white"
              />
              <path
                d="M12 9.37496C12 10.8248 10.8248 12 9.37504 12C7.92524 12 6.75 10.8248 6.75 9.37496C6.75 7.92524 7.92524 6.75 9.37504 6.75C10.8248 6.75 12 7.92524 12 9.37496Z"
                fill="white"
              />
              <path
                d="M2.625 12C4.07476 12 5.25 10.8248 5.25 9.37496C5.25 7.92524 4.07476 6.75 2.625 6.75C1.17526 6.75 0 7.92524 0 9.37496C0 10.8248 1.17526 12 2.625 12Z"
                fill="white"
              />
            </svg>
            Integration
          </a>
          <a
            href=""
            className="text-white opacity-25 hover:opacity-100 transition-all font-bold text-lg"
          >
            Logout
          </a>
        </div>
      </div>
      <div className="flex gap-10">
        <a
          href="/v2/overview"
          className={`hover:opacity-100 transition-opacity opacity-25`}
        >
          <svg
            width="238"
            height="50"
            viewBox="0 0 238 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.696 49.72C13.584 49.72 11.616 49.408 9.792 48.784C7.968 48.112 6.384 47.176 5.04 45.976C3.696 44.776 2.64 43.36 1.872 41.728C1.104 40.048 0.72 38.176 0.72 36.112V14.368C0.72 12.304 1.104 10.432 1.872 8.752C2.64 7.072 3.696 5.656 5.04 4.504C6.384 3.304 7.968 2.392 9.792 1.768C11.616 1.096 13.584 0.759999 15.696 0.759999C17.76 0.759999 19.656 1.096 21.384 1.768C23.16 2.392 24.696 3.304 25.992 4.504C27.288 5.656 28.296 7.072 29.016 8.752C29.736 10.432 30.096 12.304 30.096 14.368V36.112C30.096 38.176 29.736 40.048 29.016 41.728C28.296 43.36 27.288 44.776 25.992 45.976C24.696 47.176 23.16 48.112 21.384 48.784C19.656 49.408 17.76 49.72 15.696 49.72ZM12.024 37.696C12.024 38.8 12.336 39.664 12.96 40.288C13.584 40.864 14.424 41.152 15.48 41.152C16.488 41.152 17.28 40.888 17.856 40.36C18.48 39.784 18.792 38.92 18.792 37.768V12.784C18.792 11.68 18.48 10.84 17.856 10.264C17.28 9.688 16.488 9.4 15.48 9.4C14.424 9.4 13.584 9.688 12.96 10.264C12.336 10.84 12.024 11.68 12.024 12.784V37.696ZM30.1106 1.48H41.7026L45.5186 35.752H46.4546L50.7026 1.48H62.2946L53.5106 49H38.8226L30.1106 1.48ZM63.72 1.48H87.552V11.56H74.952V20.632H85.464V29.704H74.952V38.92H87.552V49H63.72V1.48ZM88.9622 1.48H104.946C109.602 1.48 112.962 2.608 115.026 4.864C117.09 7.072 118.146 10.264 118.194 14.44C118.194 16.264 118.026 17.92 117.69 19.408C117.402 20.848 116.874 22.12 116.106 23.224C115.338 24.28 114.306 25.12 113.01 25.744C111.762 26.368 110.154 26.728 108.186 26.824L108.114 27.256C110.226 27.256 111.882 27.496 113.082 27.976C114.33 28.408 115.266 29.056 115.89 29.92C116.562 30.784 116.994 31.84 117.186 33.088C117.378 34.336 117.474 35.752 117.474 37.336V49H106.17V35.896C106.17 34.216 105.954 32.944 105.522 32.08C105.09 31.216 104.226 30.784 102.93 30.784H100.194V49H88.9622V1.48ZM102.858 23.512C104.25 23.512 105.162 23.056 105.594 22.144C106.026 21.184 106.242 19.432 106.242 16.888C106.242 14.584 106.05 12.88 105.666 11.776C105.282 10.672 104.394 10.12 103.002 10.12H100.194V23.512H102.858ZM117.439 1.48H129.031L132.847 35.752H133.783L138.031 1.48H149.623L140.839 49H126.151L117.439 1.48ZM151.048 1.48H162.28V11.416C162.28 12.136 161.968 12.496 161.344 12.496C160.96 12.496 160.648 12.448 160.408 12.352L152.992 10.048V10.552L159.184 13.432C160.192 13.912 160.96 14.536 161.488 15.304C162.016 16.072 162.28 17.224 162.28 18.76V49H151.048V1.48ZM163.704 1.48H187.536V11.56H174.936V20.632H185.448V29.704H174.936V38.92H187.536V49H163.704V1.48ZM188.947 1.48H200.539L203.131 30.424H204.067L208.027 1.48H219.619L223.147 30.424H224.011L226.243 1.48H237.835L230.779 49H216.883L213.643 21.496L209.755 49H196.363L188.947 1.48Z"
              fill="#FFF"
            />
          </svg>
        </a>
        <a
          href="/v2/highlights"
          className={`hover:opacity-100 transition-opacity opacity-25`}
        >
          <svg
            width="254"
            height="50"
            viewBox="0 0 254 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.72 1.48H11.952V21.352H16.848V1.48H28.152V49H16.848V29.56H11.952V49H0.72V1.48ZM29.6184 1.48H40.8504V11.416C40.8504 12.136 40.5384 12.496 39.9144 12.496C39.5304 12.496 39.2184 12.448 38.9784 12.352L31.5624 10.048V10.552L37.7544 13.432C38.7624 13.912 39.5304 14.536 40.0584 15.304C40.5864 16.072 40.8504 17.224 40.8504 18.76V49H29.6184V1.48ZM57.2507 49.72C55.1867 49.72 53.2427 49.408 51.4187 48.784C49.6427 48.112 48.0587 47.176 46.6667 45.976C45.3227 44.776 44.2427 43.336 43.4267 41.656C42.6587 39.976 42.2747 38.128 42.2747 36.112V14.368C42.2747 12.352 42.6587 10.504 43.4267 8.824C44.2427 7.144 45.3227 5.704 46.6667 4.504C48.0587 3.304 49.6427 2.392 51.4187 1.768C53.2427 1.096 55.1867 0.759999 57.2507 0.759999C59.2187 0.759999 61.0667 1.096 62.7947 1.768C64.5227 2.392 66.0107 3.304 67.2587 4.504C68.5547 5.704 69.5627 7.144 70.2827 8.824C71.0507 10.504 71.4347 12.352 71.4347 14.368V20.632H60.2027V12.568C60.2027 11.56 59.8907 10.792 59.2667 10.264C58.6427 9.688 57.8987 9.4 57.0347 9.4C56.1227 9.4 55.3307 9.688 54.6587 10.264C53.9867 10.792 53.6507 11.56 53.6507 12.568V37.84C53.6507 38.848 53.9627 39.664 54.5867 40.288C55.2587 40.864 56.0507 41.152 56.9627 41.152C57.8267 41.152 58.5707 40.888 59.1947 40.36C59.8187 39.784 60.1307 38.968 60.1307 37.912V30.64L55.5947 29.92L56.7467 21.64L71.4347 23.584V36.112C71.4347 38.128 71.0507 39.976 70.2827 41.656C69.5627 43.336 68.5547 44.776 67.2587 45.976C66.0107 47.176 64.5227 48.112 62.7947 48.784C61.0667 49.408 59.2187 49.72 57.2507 49.72ZM72.8606 1.48H84.0926V21.352H88.9886V1.48H100.293V49H88.9886V29.56H84.0926V49H72.8606V1.48ZM101.759 1.48H112.991V38.92H122.927V49H101.759V1.48ZM124.4 1.48H135.632V11.416C135.632 12.136 135.32 12.496 134.696 12.496C134.312 12.496 134 12.448 133.76 12.352L126.344 10.048V10.552L132.536 13.432C133.544 13.912 134.312 14.536 134.84 15.304C135.368 16.072 135.632 17.224 135.632 18.76V49H124.4V1.48ZM152.032 49.72C149.968 49.72 148.024 49.408 146.2 48.784C144.424 48.112 142.84 47.176 141.448 45.976C140.104 44.776 139.024 43.336 138.208 41.656C137.44 39.976 137.056 38.128 137.056 36.112V14.368C137.056 12.352 137.44 10.504 138.208 8.824C139.024 7.144 140.104 5.704 141.448 4.504C142.84 3.304 144.424 2.392 146.2 1.768C148.024 1.096 149.968 0.759999 152.032 0.759999C154 0.759999 155.848 1.096 157.576 1.768C159.304 2.392 160.792 3.304 162.04 4.504C163.336 5.704 164.344 7.144 165.064 8.824C165.832 10.504 166.216 12.352 166.216 14.368V20.632H154.984V12.568C154.984 11.56 154.672 10.792 154.048 10.264C153.424 9.688 152.68 9.4 151.816 9.4C150.904 9.4 150.112 9.688 149.44 10.264C148.768 10.792 148.432 11.56 148.432 12.568V37.84C148.432 38.848 148.744 39.664 149.368 40.288C150.04 40.864 150.832 41.152 151.744 41.152C152.608 41.152 153.352 40.888 153.976 40.36C154.6 39.784 154.912 38.968 154.912 37.912V30.64L150.376 29.92L151.528 21.64L166.216 23.584V36.112C166.216 38.128 165.832 39.976 165.064 41.656C164.344 43.336 163.336 44.776 162.04 45.976C160.792 47.176 159.304 48.112 157.576 48.784C155.848 49.408 154 49.72 152.032 49.72ZM167.642 1.48H178.874V21.352H183.77V1.48H195.074V49H183.77V29.56H178.874V49H167.642V1.48ZM203.524 11.56H196.54V1.48H221.884V11.56H214.828V49H203.524V11.56ZM238.377 49.72C236.265 49.72 234.321 49.384 232.545 48.712C230.817 48.04 229.329 47.104 228.081 45.904C226.833 44.656 225.849 43.216 225.129 41.584C224.457 39.904 224.121 38.08 224.121 36.112V32.8H235.425V37.84C235.425 38.848 235.761 39.64 236.433 40.216C237.153 40.792 237.945 41.08 238.809 41.08C240.921 41.08 241.977 40 241.977 37.84V34.096C241.977 31.456 240.537 30.04 237.657 29.848C235.641 29.704 233.745 29.368 231.969 28.84C230.241 28.312 228.729 27.544 227.433 26.536C226.185 25.48 225.177 24.184 224.409 22.648C223.689 21.112 223.329 19.288 223.329 17.176V14.368C223.329 12.304 223.689 10.432 224.409 8.752C225.177 7.072 226.209 5.656 227.505 4.504C228.801 3.304 230.337 2.392 232.113 1.768C233.889 1.096 235.833 0.759999 237.945 0.759999C240.009 0.759999 241.929 1.096 243.705 1.768C245.481 2.44 247.017 3.376 248.313 4.576C249.657 5.776 250.689 7.216 251.409 8.896C252.177 10.528 252.561 12.352 252.561 14.368V17.896H241.257V12.712C241.257 11.656 240.921 10.84 240.249 10.264C239.577 9.688 238.809 9.4 237.945 9.4C236.985 9.4 236.193 9.688 235.569 10.264C234.993 10.84 234.705 11.656 234.705 12.712V16.168C234.705 17.8 235.161 18.952 236.073 19.624C236.985 20.296 238.377 20.68 240.249 20.776C242.121 20.824 243.849 21.112 245.433 21.64C247.065 22.12 248.457 22.864 249.609 23.872C250.809 24.832 251.721 26.032 252.345 27.472C253.017 28.912 253.353 30.616 253.353 32.584V36.184C253.353 38.2 252.969 40.048 252.201 41.728C251.481 43.36 250.449 44.776 249.105 45.976C247.809 47.128 246.249 48.04 244.425 48.712C242.601 49.384 240.585 49.72 238.377 49.72Z"
              fill="#FAF7FF"
            />
          </svg>
        </a>
        <a
          href="/v2/clips"
          className={`hover:opacity-100 transition-opacity opacity-25`}
        >
          <svg
            width="129"
            height="50"
            viewBox="0 0 129 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.696 49.72C13.632 49.72 11.688 49.408 9.864 48.784C8.088 48.112 6.504 47.176 5.112 45.976C3.768 44.776 2.688 43.336 1.872 41.656C1.104 39.976 0.72 38.128 0.72 36.112V14.368C0.72 12.352 1.104 10.504 1.872 8.824C2.688 7.144 3.768 5.704 5.112 4.504C6.504 3.304 8.088 2.392 9.864 1.768C11.688 1.096 13.632 0.759999 15.696 0.759999C17.664 0.759999 19.512 1.096 21.24 1.768C22.968 2.392 24.456 3.304 25.704 4.504C27 5.704 28.008 7.144 28.728 8.824C29.496 10.504 29.88 12.352 29.88 14.368V20.632H18.648V12.568C18.648 11.56 18.336 10.792 17.712 10.264C17.088 9.688 16.344 9.4 15.48 9.4C14.568 9.4 13.776 9.688 13.104 10.264C12.432 10.792 12.096 11.56 12.096 12.568V37.84C12.096 38.848 12.408 39.664 13.032 40.288C13.704 40.864 14.496 41.152 15.408 41.152C16.272 41.152 17.016 40.888 17.64 40.36C18.264 39.784 18.576 38.968 18.576 37.912V28.984H29.88V36.112C29.88 38.128 29.496 39.976 28.728 41.656C28.008 43.336 27 44.776 25.704 45.976C24.456 47.176 22.968 48.112 21.24 48.784C19.512 49.408 17.664 49.72 15.696 49.72ZM31.3059 1.48H42.5379V38.92H52.4739V49H31.3059V1.48ZM53.9466 1.48H65.1786V11.416C65.1786 12.136 64.8666 12.496 64.2426 12.496C63.8586 12.496 63.5466 12.448 63.3066 12.352L55.8906 10.048V10.552L62.0826 13.432C63.0906 13.912 63.8586 14.536 64.3866 15.304C64.9146 16.072 65.1786 17.224 65.1786 18.76V49H53.9466V1.48ZM66.6028 1.48H83.0188C85.2748 1.48 87.2668 1.84 88.9948 2.56C90.7228 3.28 92.1868 4.288 93.3868 5.584C94.6348 6.88 95.5708 8.44 96.1948 10.264C96.8668 12.088 97.2028 14.08 97.2028 16.24C97.1548 18.256 96.7708 20.128 96.0508 21.856C95.3308 23.536 94.2988 25 92.9548 26.248C91.6588 27.448 90.0508 28.384 88.1308 29.056C86.2588 29.728 84.1228 30.064 81.7228 30.064H77.8348V49H66.6028V1.48ZM80.8588 21.496C82.2028 21.496 83.1388 21.112 83.6668 20.344C84.1948 19.528 84.4588 18.112 84.4588 16.096C84.4588 13.888 84.1948 12.352 83.6668 11.488C83.1388 10.576 82.2028 10.12 80.8588 10.12H77.8348V21.424L80.8588 21.496ZM113.713 49.72C111.601 49.72 109.657 49.384 107.881 48.712C106.153 48.04 104.665 47.104 103.417 45.904C102.169 44.656 101.185 43.216 100.465 41.584C99.7933 39.904 99.4573 38.08 99.4573 36.112V32.8H110.761V37.84C110.761 38.848 111.097 39.64 111.769 40.216C112.489 40.792 113.281 41.08 114.145 41.08C116.257 41.08 117.313 40 117.313 37.84V34.096C117.313 31.456 115.873 30.04 112.993 29.848C110.977 29.704 109.081 29.368 107.305 28.84C105.577 28.312 104.065 27.544 102.769 26.536C101.521 25.48 100.513 24.184 99.7453 22.648C99.0253 21.112 98.6653 19.288 98.6653 17.176V14.368C98.6653 12.304 99.0253 10.432 99.7453 8.752C100.513 7.072 101.545 5.656 102.841 4.504C104.137 3.304 105.673 2.392 107.449 1.768C109.225 1.096 111.169 0.759999 113.281 0.759999C115.345 0.759999 117.265 1.096 119.041 1.768C120.817 2.44 122.353 3.376 123.649 4.576C124.993 5.776 126.025 7.216 126.745 8.896C127.513 10.528 127.897 12.352 127.897 14.368V17.896H116.593V12.712C116.593 11.656 116.257 10.84 115.585 10.264C114.913 9.688 114.145 9.4 113.281 9.4C112.321 9.4 111.529 9.688 110.905 10.264C110.329 10.84 110.041 11.656 110.041 12.712V16.168C110.041 17.8 110.497 18.952 111.409 19.624C112.321 20.296 113.713 20.68 115.585 20.776C117.457 20.824 119.185 21.112 120.769 21.64C122.401 22.12 123.793 22.864 124.945 23.872C126.145 24.832 127.057 26.032 127.681 27.472C128.353 28.912 128.689 30.616 128.689 32.584V36.184C128.689 38.2 128.305 40.048 127.537 41.728C126.817 43.36 125.785 44.776 124.441 45.976C123.145 47.128 121.585 48.04 119.761 48.712C117.937 49.384 115.921 49.72 113.713 49.72Z"
              fill="#FAF7FF"
            />
          </svg>
        </a>

        <a
          href="/v2/analytics"
          className={`hover:opacity-100 transition-opacity opacity-25`}
        >
          <svg
            width="246"
            height="50"
            viewBox="0 0 246 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.136 1.48H24.264L31.464 49H19.872L18.504 39.208H13.392L12.312 49H0.72L8.136 1.48ZM18.216 31.288L16.416 13.288H15.552L13.968 31.288H18.216ZM32.9231 1.48H47.9711L53.4431 31.576H54.0191V1.48H65.3231V49H50.2751L44.8031 21.064H44.1551V49H32.9231V1.48ZM74.1594 1.48H90.2874L97.4874 49H85.8954L84.5274 39.208H79.4154L78.3354 49H66.7434L74.1594 1.48ZM84.2394 31.288L82.4394 13.288H81.5754L79.9914 31.288H84.2394ZM98.9466 1.48H110.179V38.92H120.115V49H98.9466V1.48ZM121.829 32.296L111.533 1.48H123.485L127.445 20.272H127.877L131.693 1.48H143.861L133.205 32.224V49H121.901L121.829 32.296ZM152.267 11.56H145.283V1.48H170.627V11.56H163.57V49H152.267V11.56ZM172.072 1.48H183.304V11.416C183.304 12.136 182.992 12.496 182.368 12.496C181.984 12.496 181.672 12.448 181.432 12.352L174.016 10.048V10.552L180.208 13.432C181.216 13.912 181.984 14.536 182.512 15.304C183.04 16.072 183.304 17.224 183.304 18.76V49H172.072V1.48ZM199.704 49.72C197.64 49.72 195.696 49.408 193.872 48.784C192.096 48.112 190.512 47.176 189.12 45.976C187.776 44.776 186.696 43.336 185.88 41.656C185.112 39.976 184.728 38.128 184.728 36.112V14.368C184.728 12.352 185.112 10.504 185.88 8.824C186.696 7.144 187.776 5.704 189.12 4.504C190.512 3.304 192.096 2.392 193.872 1.768C195.696 1.096 197.64 0.759999 199.704 0.759999C201.672 0.759999 203.52 1.096 205.248 1.768C206.976 2.392 208.464 3.304 209.712 4.504C211.008 5.704 212.016 7.144 212.736 8.824C213.504 10.504 213.888 12.352 213.888 14.368V20.632H202.656V12.568C202.656 11.56 202.344 10.792 201.72 10.264C201.096 9.688 200.352 9.4 199.488 9.4C198.576 9.4 197.784 9.688 197.112 10.264C196.44 10.792 196.104 11.56 196.104 12.568V37.84C196.104 38.848 196.416 39.664 197.04 40.288C197.712 40.864 198.504 41.152 199.416 41.152C200.28 41.152 201.024 40.888 201.648 40.36C202.272 39.784 202.584 38.968 202.584 37.912V28.984H213.888V36.112C213.888 38.128 213.504 39.976 212.736 41.656C212.016 43.336 211.008 44.776 209.712 45.976C208.464 47.176 206.976 48.112 205.248 48.784C203.52 49.408 201.672 49.72 199.704 49.72ZM230.362 49.72C228.25 49.72 226.306 49.384 224.53 48.712C222.802 48.04 221.314 47.104 220.066 45.904C218.818 44.656 217.834 43.216 217.114 41.584C216.442 39.904 216.106 38.08 216.106 36.112V32.8H227.41V37.84C227.41 38.848 227.746 39.64 228.418 40.216C229.138 40.792 229.93 41.08 230.794 41.08C232.906 41.08 233.962 40 233.962 37.84V34.096C233.962 31.456 232.522 30.04 229.642 29.848C227.626 29.704 225.73 29.368 223.954 28.84C222.226 28.312 220.714 27.544 219.418 26.536C218.17 25.48 217.162 24.184 216.394 22.648C215.674 21.112 215.314 19.288 215.314 17.176V14.368C215.314 12.304 215.674 10.432 216.394 8.752C217.162 7.072 218.194 5.656 219.49 4.504C220.786 3.304 222.322 2.392 224.098 1.768C225.874 1.096 227.818 0.759999 229.93 0.759999C231.994 0.759999 233.914 1.096 235.69 1.768C237.466 2.44 239.002 3.376 240.298 4.576C241.642 5.776 242.674 7.216 243.394 8.896C244.162 10.528 244.546 12.352 244.546 14.368V17.896H233.242V12.712C233.242 11.656 232.906 10.84 232.234 10.264C231.562 9.688 230.794 9.4 229.93 9.4C228.97 9.4 228.178 9.688 227.554 10.264C226.978 10.84 226.69 11.656 226.69 12.712V16.168C226.69 17.8 227.146 18.952 228.058 19.624C228.97 20.296 230.362 20.68 232.234 20.776C234.106 20.824 235.834 21.112 237.418 21.64C239.05 22.12 240.442 22.864 241.594 23.872C242.794 24.832 243.706 26.032 244.33 27.472C245.002 28.912 245.338 30.616 245.338 32.584V36.184C245.338 38.2 244.954 40.048 244.186 41.728C243.466 43.36 242.434 44.776 241.09 45.976C239.794 47.128 238.234 48.04 236.41 48.712C234.586 49.384 232.57 49.72 230.362 49.72Z"
              fill="#FAF7FF"
            />
          </svg>
        </a>

        <a
          href="/v2/referrals"
          className={`hover:opacity-100 transition-opacity opacity-25`}
        >
          <svg
            width="254"
            height="50"
            viewBox="0 0 254 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.72 1.48H16.704C21.36 1.48 24.72 2.608 26.784 4.864C28.848 7.072 29.904 10.264 29.952 14.44C29.952 16.264 29.784 17.92 29.448 19.408C29.16 20.848 28.632 22.12 27.864 23.224C27.096 24.28 26.064 25.12 24.768 25.744C23.52 26.368 21.912 26.728 19.944 26.824L19.872 27.256C21.984 27.256 23.64 27.496 24.84 27.976C26.088 28.408 27.024 29.056 27.648 29.92C28.32 30.784 28.752 31.84 28.944 33.088C29.136 34.336 29.232 35.752 29.232 37.336V49H17.928V35.896C17.928 34.216 17.712 32.944 17.28 32.08C16.848 31.216 15.984 30.784 14.688 30.784H11.952V49H0.72V1.48ZM14.616 23.512C16.008 23.512 16.92 23.056 17.352 22.144C17.784 21.184 18 19.432 18 16.888C18 14.584 17.808 12.88 17.424 11.776C17.04 10.672 16.152 10.12 14.76 10.12H11.952V23.512H14.616ZM31.3763 1.48H55.2083V11.56H42.6083V20.632H53.1203V29.704H42.6083V38.92H55.2083V49H31.3763V1.48ZM56.6184 1.48H81.8904V11.632H67.8504V19.552H76.9224V30.784H67.8504V49H56.6184V1.48ZM83.3372 1.48H107.169V11.56H94.5692V20.632H105.081V29.704H94.5692V38.92H107.169V49H83.3372V1.48ZM108.579 1.48H124.563C129.219 1.48 132.579 2.608 134.643 4.864C136.707 7.072 137.763 10.264 137.811 14.44C137.811 16.264 137.643 17.92 137.307 19.408C137.019 20.848 136.491 22.12 135.723 23.224C134.955 24.28 133.923 25.12 132.627 25.744C131.379 26.368 129.771 26.728 127.803 26.824L127.731 27.256C129.843 27.256 131.499 27.496 132.699 27.976C133.947 28.408 134.883 29.056 135.507 29.92C136.179 30.784 136.611 31.84 136.803 33.088C136.995 34.336 137.091 35.752 137.091 37.336V49H125.787V35.896C125.787 34.216 125.571 32.944 125.139 32.08C124.707 31.216 123.843 30.784 122.547 30.784H119.811V49H108.579V1.48ZM122.475 23.512C123.867 23.512 124.779 23.056 125.211 22.144C125.643 21.184 125.859 19.432 125.859 16.888C125.859 14.584 125.667 12.88 125.283 11.776C124.899 10.672 124.011 10.12 122.619 10.12H119.811V23.512H122.475ZM139.236 1.48H155.22C159.876 1.48 163.236 2.608 165.3 4.864C167.364 7.072 168.42 10.264 168.468 14.44C168.468 16.264 168.3 17.92 167.964 19.408C167.676 20.848 167.148 22.12 166.38 23.224C165.612 24.28 164.58 25.12 163.284 25.744C162.036 26.368 160.428 26.728 158.46 26.824L158.388 27.256C160.5 27.256 162.156 27.496 163.356 27.976C164.604 28.408 165.54 29.056 166.164 29.92C166.836 30.784 167.268 31.84 167.46 33.088C167.652 34.336 167.748 35.752 167.748 37.336V49H156.444V35.896C156.444 34.216 156.228 32.944 155.796 32.08C155.364 31.216 154.5 30.784 153.204 30.784H150.468V49H139.236V1.48ZM153.132 23.512C154.524 23.512 155.436 23.056 155.868 22.144C156.3 21.184 156.516 19.432 156.516 16.888C156.516 14.584 156.324 12.88 155.94 11.776C155.556 10.672 154.668 10.12 153.276 10.12H150.468V23.512H153.132ZM176.605 1.48H192.733L199.933 49H188.341L186.973 39.208H181.861L180.781 49H169.189L176.605 1.48ZM186.685 31.288L184.885 13.288H184.021L182.437 31.288H186.685ZM201.392 1.48H212.624V38.92H222.56V49H201.392V1.48ZM238.377 49.72C236.265 49.72 234.321 49.384 232.545 48.712C230.817 48.04 229.329 47.104 228.081 45.904C226.833 44.656 225.849 43.216 225.129 41.584C224.457 39.904 224.121 38.08 224.121 36.112V32.8H235.425V37.84C235.425 38.848 235.761 39.64 236.433 40.216C237.153 40.792 237.945 41.08 238.809 41.08C240.921 41.08 241.977 40 241.977 37.84V34.096C241.977 31.456 240.537 30.04 237.657 29.848C235.641 29.704 233.745 29.368 231.969 28.84C230.241 28.312 228.729 27.544 227.433 26.536C226.185 25.48 225.177 24.184 224.409 22.648C223.689 21.112 223.329 19.288 223.329 17.176V14.368C223.329 12.304 223.689 10.432 224.409 8.752C225.177 7.072 226.209 5.656 227.505 4.504C228.801 3.304 230.337 2.392 232.113 1.768C233.889 1.096 235.833 0.759999 237.945 0.759999C240.009 0.759999 241.929 1.096 243.705 1.768C245.481 2.44 247.017 3.376 248.313 4.576C249.657 5.776 250.689 7.216 251.409 8.896C252.177 10.528 252.561 12.352 252.561 14.368V17.896H241.257V12.712C241.257 11.656 240.921 10.84 240.249 10.264C239.577 9.688 238.809 9.4 237.945 9.4C236.985 9.4 236.193 9.688 235.569 10.264C234.993 10.84 234.705 11.656 234.705 12.712V16.168C234.705 17.8 235.161 18.952 236.073 19.624C236.985 20.296 238.377 20.68 240.249 20.776C242.121 20.824 243.849 21.112 245.433 21.64C247.065 22.12 248.457 22.864 249.609 23.872C250.809 24.832 251.721 26.032 252.345 27.472C253.017 28.912 253.353 30.616 253.353 32.584V36.184C253.353 38.2 252.969 40.048 252.201 41.728C251.481 43.36 250.449 44.776 249.105 45.976C247.809 47.128 246.249 48.04 244.425 48.712C242.601 49.384 240.585 49.72 238.377 49.72Z"
              fill="#FAF7FF"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Navigation;
