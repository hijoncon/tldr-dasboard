"use client";

import {
  getPromoter,
  getTopPromoters,
  getUserInfo,
  TopPromoter,
  UserDetails,
} from "@/api/users";
import background from "@/app/images/banner-gradient.png";
import { useCallback, useEffect, useState } from "react";

const Banner = ({ data }: { data: UserDetails | undefined }) => {
  const hostName =
    location.hostname === "localhost"
      ? "http://localhost:4000"
      : "http://dashboard.tl-dr.tv";
  return (
    <div
      className="flex bg-purple-900 rounded-2xl p-8"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="flex-grow font-bold text-4xl">
        Earn Rewards for Inviting
        <br />
        Your Friends to TL-DR!
      </span>
      <div className="flex flex-col pr-10">
        <span className="text-[18px] text-[#E5D4FF] font-semibold">
          Your Referral URL
        </span>
        <span className="text-[18px] text-[#F9F5FF] font-semibold flex items-center gap-2">
          {hostName}
          /redirect?fpr={data?.default_ref_id}
          <span
            onClick={async () => {
              await navigator.clipboard.writeText(
                `${hostName}/redirect?fpr=${data?.default_ref_id}`
              );
            }}
            className="cursor-pointer active:scale-75"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 11.25C3.05109 11.25 2.70163 11.25 2.42597 11.1358C2.05843 10.9836 1.76642 10.6916 1.61418 10.324C1.5 10.0484 1.5 9.69891 1.5 9V3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H9C9.69891 1.5 10.0484 1.5 10.324 1.61418C10.6916 1.76642 10.9836 2.05843 11.1358 2.42597C11.25 2.70163 11.25 3.05109 11.25 3.75M9.15 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V9.15C16.5 8.30992 16.5 7.88988 16.3365 7.56901C16.1927 7.28677 15.9632 7.0573 15.681 6.91349C15.3601 6.75 14.9401 6.75 14.1 6.75H9.15C8.30992 6.75 7.88988 6.75 7.56901 6.91349C7.28677 7.0573 7.0573 7.28677 6.91349 7.56901C6.75 7.88988 6.75 8.30992 6.75 9.15V14.1C6.75 14.9401 6.75 15.3601 6.91349 15.681C7.0573 15.9632 7.28677 16.1927 7.56901 16.3365C7.88988 16.5 8.30992 16.5 9.15 16.5Z"
                stroke="#D1B2FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>
        <span className="text-[12px] text-[#D1B2FF] font-bold">
          Any users who sign up through your link receive 10% off
        </span>
      </div>
    </div>
  );
};

const ReferralTimeline = ({ data }: { data: UserDetails | undefined }) => {
  return (
    <div className="flex pt-32 pb-6">
      <div className="flex flex-col gap-0 text-[10px] w-[12%]">
        <h2 className="text-[18px] font-semibold mb-1">Referrals:</h2>
        <span>Your Tier:</span>
        <span className="text-[#D1B2FF]">
          Tier{" "}
          {(() => {
            const leadsCount = data?.promotions?.[0]?.leads_count || 0;
            if (leadsCount > 99) return "3";
            if (leadsCount > 25) return "2";
            return "1";
          })()}{" "}
          ({data?.promotions?.[0]?.leads_count || 0})
        </span>

        <span>$7.50 credit per referral</span>
      </div>

      <div className="w-[88%]">
        <div className="text-[18px] font-semibold text=[#E5D4FF] flex mb-2">
          <div className="border-l-2 border-[#AF79FF] pl-2 w-[20%] relative left-3">
            <div className="absolute -top-[50px] -left-9">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="21.6533"
                  width="38.0012"
                  height="38.0012"
                  transform="rotate(-34.7365 0 21.6533)"
                  fill="url(#pattern0_94_5714)"
                />
                <defs>
                  <pattern
                    id="pattern0_94_5714"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_94_5714"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_94_5714"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA3klEQVRoQ+2XwQ2DMAxFYZJOADPARJ0F9cAOSFVHgBnKBJ2Enoh8SABXMTTR44SQFfz9n+OkLBJ/ysTzLxBwtYM4kKUDdVUtq7D3PJu6bLI4AhRcRnNAVn2cJpdC2zTu3QInBKzlzdaB/tE5hIbnKzpO5gghYGdHwoG9JgYhEDo41kNzAIRACIQ4SmwywCRmEh/cJEJhIJQNQtJieayQ3//6Uo+AH5vZpInb+8ebztjd0rjUI0CBUzSEaGJF1WUoDvgKxyBT4ARCimKZhJo4YJJpYFEEnFlt379w4GoHvmm9DkCPotdcAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>
            0
          </div>
          <div className="border-l-2 border-[#AF79FF] pl-2 w-[20%] relative left-3">
            <div className="absolute -top-[50px] -left-9">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="48" height="48" fill="url(#pattern0_94_5718)" />
                <defs>
                  <pattern
                    id="pattern0_94_5718"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_94_5718"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_94_5718"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOUlEQVRoQ+2WMRKCMBBFYcbD0EBpozNi4UU8gYXjIay0s/IiFlKoB4CGwzCjDcSMYya7bDDE+ZaYbPj/fXYTR4H/4sDfP4IA3wRBAASEDiBCQgPF20kEsjR92k4qq4pUy1aH+z/pUAjg2spYzyZwLYqv5Zd5rp7/Mk4Q0NkeDIEs2auoHE9T73FiRwgCGB2GspREQC+kzwQJDdNs4XYwCOjocD9obwRcxelwr1WpzSzpPQTZEYKA1oFREKDQKOudWubqpfVzRRGCgNYBbu8fhICJhh6b7eKhljXNunfngQDbHUUfUkESMMVJfz6ZnJ3EyVkXMlExXRkgoHVscAIUMrfL+140X/HuRRBg60h/S4DSqSgT2luEIMB3F+r77XzuG0WEJGIgQOKei70g4MJFSQ0QkLjnYm/wBF6TJucxN9DD0wAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
            25
          </div>
          <div className="border-l-2 border-[#AF79FF] pl-2 w-[20%] relative left-3">
            <div className="absolute -top-[60px] -left-9">
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="57" height="57" fill="url(#pattern0_94_5716)" />
                <defs>
                  <pattern
                    id="pattern0_94_5716"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_94_5716"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_94_5716"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABXklEQVRoQ2NkGOKAcYi7n2HUAwMdg6MxMBoDFIbAaBKiMAAp1k5UDOjp6v4nZNOly5eJMouQOaTKE2XpqAdIDVYS1JMcA7Nn7cdqfGqaI1ycnslp1AOwYB8yMSAnmgBPKgtXI9h3biEKKnp6huQkNOoBEkoYYpQSFQPIBiHXCYMhNkY9AIudgcrQJMcAtZITrvRNaiU46gFYSJKaoQdFDJCanFxM7eFaZCNC4Gwhy39w9rmq9SS1qShKQqMegIbAoIgBXLHB/BXRRkJONo9XrIFr+cuNSAh0LYVwZUTk2nrUAwQaRFTLxLiSkIJvMFwKOdlIKyTCxZ8+mE92chr1ALYYRs4DQz4GjNoCsVZSyJkbOTk9er1gYCoyXHlg1AMDUQrhig3kSopao300KYVGPQANAWKaFTSPAWJGFihRM+oBSkKPGnpHY4AaoUiJGaMxQEnoUUPvaAxQIxQpMQMAyyIXQNg12W0AAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
            50
          </div>
          <div className="border-l-2 border-[#AF79FF] pl-2 w-[20%] relative left-3">
            <div className="absolute -top-[60px] -left-9">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="52" height="52" fill="url(#pattern0_94_5717)" />
                <defs>
                  <pattern
                    id="pattern0_94_5717"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_94_5717"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_94_5717"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABmElEQVRoQ2NkGOKAcYi7n2F4eUBPV/c/KTFy6fLlAQ8AFAeMeoCU6KOSWpwxsGv1YoJWuIXGwtUMVHIa9QAsCgZdDBQVV8OTx/y9r+DsldV2WJPWQCUnnElo1AMEiwDqKCAqBpCtGmzJadQD2BICPTM0zrYMcrMCOUPTIjnhasIQUzSPegAWI5TUDzSJAeSkQuvkhGy+UVsg3OpzVesJtrWIas+PegAajrhKJ5rHwGBOTkQloVEPYKntqJWcSI4BWseGgm8w3IoHm9dSpxTC1W6kRek06gFyW+mkxsb7C7PhVpEa6shupCgPUJIfRj0ADT2qxQAxsdHX24o12fzatgIu/uwvK8GShyZJaNQD0BCgawwQ045HVoNc2iAnGxt1BXgEHrn5gKTkRFEeGPUANKwHRQzg6knhqqSQM70U8284l1TPUC0JjXqAzOREUQzgKvtJ7ZgjFwa4ktOqa0+xVnCjHoAFCyUd80ERA7iSEzHDg7j04mraI5tJtSQ06gFoCBAzV03zGCC3V0eOPpokIXIcQq6eIe8BAEJfBE8/SQqVAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>
            75
          </div>
          <div className="border-l-2 border-[#AF79FF] pl-2 w-[20%] relative left-3">
            <div className="absolute -top-[70px] -left-9">
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="57" height="57" fill="url(#pattern0_94_5715)" />
                <defs>
                  <pattern
                    id="pattern0_94_5715"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_94_5715"
                      transform="scale(0.0208333)"
                    />
                  </pattern>
                  <image
                    id="image0_94_5715"
                    width="48"
                    height="48"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABxklEQVRoQ+2ZsU7DMBCGHYm178DA0CUFMTP0BRBDVx6gCxLiBQgvgJBYOiMYOzCwd2BgqgpdOvICTKwIGJJc/gofOmM7DtV1siI7zX//57tzkplh8WVC/GZFFuI2rvfIVEAdsi44cHl97OogzT87uW3WtihmDSEVkAAn1oGbux0rTnvjbbp+YWY0nr5/JMFJBdRh/5cOIGOpcPJCSAX8ueo0C4M5sJi80l3vx8049t5QAXXYO+fAqLdFSBxNmuKFhQwRRgF4PTZOLEIqoLIhvgPoN5zOsDNFN87N0Jr8OIRi907rx0AV8NOcdh3wwEmCUIxUy79JcMRJBVTuu56tZe9yBG5gsUMScQ/EKHYqoI52tx1wzE5c7yTZ6K4nOxlCKqCMQDcccHQDeyeJAJyzeCro3wZvUxq/LJdEjjtCKuD3fqldBxzdkKTa+WHPisogz+lDTDiEVEAZAWw30jng4cbnQ06rD3ZPafz4fGXFCf/KLwtZD5fG4Hc37miK+0EFcIEMcp1pxbm+H7PNvN+nR9hfrSIUMolCFVBGKZ0DTHbC3ganYJFCnLjsFCcLCbKTCqiC1K4Dkk3PzEGc4hcyjwfllm6sgG92xTp5LBgP3QAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
            100+
          </div>
        </div>

        <div className="h-[26px] bg-[#1F1B23] rounded-full">
          <div
            className={`h-[26px] bg-[#3CCB7F] rounded-full text-[12px] font-semibold flex justify-center items-center`}
            style={{
              width: `${data?.promotions[0].leads_count || 8}%`,
            }}
          >
            {data?.promotions[0].leads_count || 0} Referrals
          </div>
        </div>

        <div className="flex gap-5 pl-5 py-5">
          <div className="w-[20%]">
            <div className="border-l border-b border-r border-[#322546] h-[16px]" />
            <div className="flex flex-col items-center text-[12px] font-semibold py-2">
              <span>Tier 1</span>
              <span className="text-[#D1B2FF]">1-25 Referrals</span>
              <span>$5 credit per referrals</span>
            </div>
          </div>
          <div className="w-[61.5%]">
            <div className="border-l border-b border-r border-[#322546] h-[16px]" />
            <div className="flex flex-col items-center text-[12px] font-semibold py-2">
              <span>Tier 2</span>
              <span className="text-[#D1B2FF]">26-99Referrals</span>
              <span>$7.50 credit per referrals</span>
            </div>
          </div>
          <div className="w-[18.5%]">
            <div className="border-l border-b border-[#322546] h-[16px]" />
            <div className="flex flex-col items-center text-[12px] font-semibold py-2">
              <span>Tier 3</span>
              <span className="text-[#D1B2FF]">100+ Referrals</span>
              <span>$10 credit per referrals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MilestoneBonuses = ({ data }: { data: UserDetails | undefined }) => {
  return (
    <div className="flex flex-col flex-grow">
      <span className="text-[20px] font-semibold mb-3">Milestone Bonuses</span>
      <div className="flex flex-col mb-12">
        <div className="flex items-center">
          <span className="col-span-1 pb-2 text-[12px] text-[#3CCB7F] font-bold w-28">
            @ 25 Referrals
          </span>
          <span className="col-span-1 pb-2 text-[12px] font-bold w-52">
            $50 cash bonus or 10 gifted subs
          </span>
          <span className="col-span-1 pb-2 text-[12px]">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8.90619L1.87249 5.77869L0.807495 6.83619L5 11.0287L14 2.02869L12.9425 0.971191L5 8.90619Z"
                fill="#3CCB7F"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center">
          <span className="col-span-1 pb-2 text-[12px] text-[#C197FF] font-bold w-28">
            @ 50 Referrals
          </span>
          <span className="col-span-1 pb-2 text-[12px] font-bold w-52">
            $100 cash bonus or 20 gifted subs
          </span>
          <span className="col-span-1 pb-2 text-[12px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" fillOpacity="0.14" />
            </svg>
          </span>
        </div>

        <div className="flex items-center">
          <span className="col-span-1 pb-2 text-[12px] text-[#B8B8B8] font-bold w-28">
            @ 100 Referrals
          </span>
          <span className="col-span-1 pb-2 text-[12px] font-bold  w-52">
            $250 cash bonus or 50 gifted subs
          </span>
          <span className="col-span-1 pb-2 text-[12px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" fillOpacity="0.14" />
            </svg>
          </span>
        </div>
      </div>

      <span className="text-[30px] font-semibold">
        Your Total Earned Credit
      </span>
      <span className="text-[16px] font-normal text-[#98A2B3]">
        The amount of credit you’ve accrued from referrals
      </span>

      <div className="flex py-3 items-center">
        <span className="text-[65px] font-bold">$25</span>
        <div className="flex flex-col px-5 text-[12px]">
          <span>Your Tier</span>
          <span className="text-[#D1B2FF] font-semibold">
            Tier{" "}
            {(() => {
              const leadsCount = data?.promotions?.[0]?.leads_count || 0;
              if (leadsCount > 99) return "3";
              if (leadsCount > 25) return "2";
              return "1";
            })()}{" "}
            ({data?.promotions?.[0]?.leads_count || 0})
          </span>
          <span>$7.50 credit per referral</span>
        </div>
      </div>

      <div className="mb-10">
        <div className="font-semibold text-[12px] mb-3">
          Please Choose Payout Method:
        </div>

        <div className="flex flex-col gap-2 text-[12px] mb-7">
          <label className="flex items-center space-x-2">
            <input type="radio" name="option" value="2" />
            <span>Visa Gift Card</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="radio" name="option" value="3" />
            <span>Gifted Subs on Twitch (Get an extra 5 subs)</span>
          </label>
        </div>

        <div>
          <button className="bg-[#7F56D9] text-white rounded-md px-4 py-2 hover:bg-purple-700 text-[14px] font-semibold mb-7">
            Request Payout
          </button>
        </div>

        <div className="max-w-[344px] leading-tight">
          <span className="text-[12px] text-[#98A2B3]">
            If your credit is above $25, you can choose between applying the
            credit towards TL-DR or redeem as a gift card or gifted subs. If
            below $25, can only be applied to TL-DR subscription.
          </span>
        </div>
      </div>

      <div>
        <div className="font-semibold text-[30px] mb-1">Support</div>
        <div className=" mb-5">
          <span>Need help with our referral program?</span>
        </div>
        <div>
          <button className="bg-[#7F56D9] text-white rounded-md px-4 py-2 hover:bg-purple-700 text-[14px] font-semibold flex gap-2">
            Email TL-DR Referral Support
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.74958 10.2501L16.4996 1.50014M7.8559 10.5235L10.046 16.1552C10.2389 16.6513 10.3354 16.8994 10.4744 16.9718C10.5949 17.0346 10.7384 17.0347 10.859 16.972C10.9981 16.8998 11.0949 16.6518 11.2884 16.1559L16.7803 2.08281C16.955 1.63516 17.0424 1.41133 16.9946 1.26831C16.9531 1.1441 16.8556 1.04663 16.7314 1.00514C16.5884 0.957356 16.3646 1.0447 15.9169 1.21939L1.84379 6.71134C1.3479 6.90486 1.09995 7.00163 1.02769 7.14071C0.965054 7.26129 0.965139 7.40483 1.02792 7.52533C1.10034 7.66433 1.3484 7.7608 1.84452 7.95373L7.47619 10.1438C7.5769 10.183 7.62725 10.2026 7.66965 10.2328C7.70724 10.2596 7.7401 10.2925 7.76691 10.3301C7.79715 10.3725 7.81673 10.4228 7.8559 10.5235Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const MonthlyLeaders = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: TopPromoter[];
}) => {
  return (
    <div className="pb-12">
      <div className="bg-[#1F1B23] rounded-2xl p-8">
        <h3 className="text-[41px] font-semibold">Monthly Leaderboard</h3>
        <h4 className="text-[19px] font-semibold text-[#E5D4FF]">
          November 1st - December 1st
        </h4>

        <div className="flex justify-center p-10">
          {isLoading && <span>Loading top promoters..</span>}
          <div className="flex items-end gap-5">
            {data[1] && (
              <div className="bg-[#802EEF] w-[167px] h-[236px] items-center flex flex-col rounded-md pt-5">
                <div
                  className="rounded-md w-[114px] h-[114px] bg-blue-500 mb-2"
                  style={{
                    backgroundImage: `url('${data[1].profile.avatar_url}')`,
                  }}
                ></div>
                <div className="text-[16px] font-semibold flex flex-col items-center">
                  <span>{data[1].promoter_name}</span>
                  <span className="opacity-50">
                    {data[1].referrals_count} Referrals
                  </span>
                  <span>2nd Place</span>
                </div>
              </div>
            )}
            {data[0] && (
              <div className="bg-[#9851FB] w-[167px] h-[272px] items-center flex flex-col rounded-md pt-5">
                <div
                  className="rounded-md w-[114px] h-[114px] bg-green-500 mb-2"
                  style={{
                    backgroundImage: `url('${data[0].profile.avatar_url}')`,
                  }}
                ></div>
                <div className="text-[16px] font-semibold flex flex-col items-center">
                  <span>{data[0].promoter_name}</span>
                  <span className="opacity-50">
                    {data[0].referrals_count} Referrals
                  </span>
                  <span>1st Place</span>
                </div>
              </div>
            )}
            {data[2] && (
              <div className="bg-[#6D1ED2] w-[167px] h-[220px] items-center flex flex-col rounded-md pt-5">
                <div
                  className="rounded-md w-[114px] h-[114px] bg-orange-500 mb-2"
                  style={{
                    backgroundImage: `url('${data[2].profile.avatar_url}')`,
                  }}
                ></div>
                <div className="text-[16px] font-semibold flex flex-col items-center">
                  <span>{data[2].promoter_name}</span>
                  <span className="opacity-50">
                    {data[2].referrals_count} Referrals
                  </span>
                  <span>3rd Place</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-semibold mb-5">
            Leaderboard Standings
          </h3>
          <div className="flex items-center border-b border-[#332C3B] pb-2 mb-2">
            <div className="flex flex-grow gap-5 items-center">
              <div className="rounded-md w-[58px] h-[58px] bg-yellow-500 mb-2"></div>
              <span className="font-semibold">Nyrtbag</span>
              <span className="font-semibold opacity-50">$250 Earned</span>
            </div>
            <span className="font-semibold opacity-50">134 Referrals</span>
          </div>
          <div className="flex items-center border-b border-[#332C3B] pb-2 mb-2">
            <div className="flex flex-grow gap-5 items-center">
              <div className="rounded-md w-[58px] h-[58px] bg-blue-500 mb-2"></div>
              <span className="font-semibold">Nyrtbag</span>
              <span className="font-semibold opacity-50">$250 Earned</span>
            </div>
            <span className="font-semibold opacity-50">134 Referrals</span>
          </div>
          <div className="flex items-center border-b border-[#332C3B] pb-2 mb-2">
            <div className="flex flex-grow gap-5 items-center">
              <div className="rounded-md w-[58px] h-[58px] bg-pink-500 mb-2"></div>
              <span className="font-semibold">Nyrtbag</span>
              <span className="font-semibold opacity-50">$250 Earned</span>
            </div>
            <span className="font-semibold opacity-50">134 Referrals</span>
          </div>
          <div className="flex items-center pb-2 mb-2">
            <div className="flex flex-grow gap-5 items-center">
              <div className="rounded-md w-[58px] h-[58px] bg-slate-500 mb-2"></div>
              <span className="font-semibold">Nyrtbag</span>
              <span className="font-semibold opacity-50">$250 Earned</span>
            </div>
            <span className="font-semibold opacity-50">134 Referrals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenQPartnership = () => {
  return (
    <div className="pb-12">
      <h3 className="text-[30px] font-semibold">
        BenQ Official Partnership Referral Rewards
      </h3>
      <h5 className="text-[16px] opacity-50">Information can be found below</h5>
      <div className="flex">
        <div className="w-[70%]">Image container</div>
        <div className="w-[30%]">
          <div className="w-[382px]">
            <h3 className="text-[24px] font-semibold mb-2">
              Every 3rd Referral - Raffle:
            </h3>
            <p className="opacity-50 mb-5">
              For every 3rd referral, you (the referrer) get a ticket entered
              into a raffle for a free BenQ EX2710U Gaming Monitor. Winners are
              decided on December 1st, 2024.
            </p>
          </div>
          <div className="w-[382px]">
            <h3 className="text-[24px] font-semibold mb-2">
              Monthly Leaderboard Winner - Free Monitor
            </h3>
            <p className="opacity-50 mb-5">
              Referrals start October 25th, and whoever refers the most users by
              December 1st wins a free BenQ EX2710U Gaming Monitor. You can
              track your standing using the leaderboard above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PromotionalTools = () => {
  return (
    <div className="pb-12">
      <h3 className="text-[30px] font-semibold">Promotional Tools</h3>
      <h5 className="text-[16px] opacity-50">
        Access shareable promotional material for TL-DR
      </h5>
      <div className="flex py-14 gap-10">
        <div>
          <div className="w-[329px] h-[419px] rounded-md bg-[#1F1B23] mb-3"></div>
          <h4>Instagram Story / TikTok Format</h4>
          <h5 className="opacity-50">9:16</h5>
        </div>
        <div>
          <div className="w-[329px] h-[419px] rounded-md bg-[#1F1B23] mb-3"></div>
          <h4>Instagram Post / X Post Image</h4>
          <h5 className="opacity-50">1:1</h5>
        </div>
        <div>
          <div className="w-[329px] h-[419px] rounded-md bg-[#1F1B23] mb-3"></div>
          <h4>Shareable Graphic</h4>
          <h5 className="opacity-50">1:1</h5>
        </div>
      </div>
    </div>
  );
};

const ProgramTerms = () => {
  return (
    <div className="flex pb-16">
      <div className="w-[40%]">
        <h3 className="text-[30px] font-semibold">
          TL-DR Referral Program Terms
        </h3>
        <h5 className="text-[16px] opacity-50">Learn about our terms</h5>
      </div>
      <div className="w-[60%]">
        <div className="flex flex-col gap-5 text-[12px]">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing
            pulvinar feugiat inceptos lorem viverra congue aenean nec tortor.
            Consequat blandit condimentum duis adipiscing non. Justo mollis
            donec maecenas cursus hendrerit. Gravida tristique adipiscing,
            vehicula cubilia curabitur non. Suspendisse interdum sit class eget
            tortor tempus. Egestas rhoncus habitant potenti ante sit sodales est
            erat.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing
            pulvinar feugiat inceptos lorem viverra congue aenean nec tortor.
            Consequat blandit condimentum duis adipiscing non. Justo mollis
            donec maecenas cursus hendrerit. Gravida tristique adipiscing,
            vehicula cubilia curabitur non. Suspendisse interdum sit class eget
            tortor tempus. Egestas rhoncus habitant potenti ante sit sodales est
            erat.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing
            pulvinar feugiat inceptos lorem viverra congue aenean nec tortor.
            Consequat blandit condimentum duis adipiscing non. Justo mollis
            donec maecenas cursus hendrerit. Gravida tristique adipiscing,
            vehicula cubilia curabitur non. Suspendisse interdum sit class eget
            tortor tempus. Egestas rhoncus habitant potenti ante sit sodales est
            erat.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing
            pulvinar feugiat inceptos lorem viverra congue aenean nec tortor.
            Consequat blandit condimentum duis adipiscing non. Justo mollis
            donec maecenas cursus hendrerit. Gravida tristique adipiscing,
            vehicula cubilia curabitur non. Suspendisse interdum sit class eget
            tortor tempus. Egestas rhoncus habitant potenti ante sit sodales est
            erat.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing
            pulvinar feugiat inceptos lorem viverra congue aenean nec tortor.
            Consequat blandit condimentum duis adipiscing non. Justo mollis
            donec maecenas cursus hendrerit. Gravida tristique adipiscing,
            vehicula cubilia curabitur non. Suspendisse interdum sit class eget
            tortor tempus. Egestas rhoncus habitant potenti ante sit sodales est
            erat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Referrals() {
  const [isLoadingTopPromoters, setIsLoadingTopPromoter] =
    useState<boolean>(false);
  const [isLoadingUserDetail, setIsLoadingUserDetail] =
    useState<boolean>(false);

  const [topPromoters, setTopPromoters] = useState<TopPromoter[]>([]);
  const [userDetail, setUserDetail] = useState<UserDetails>();

  const fetchTopPromoters = useCallback(async () => {
    setIsLoadingTopPromoter(true);
    try {
      const res = await getTopPromoters();
      if (res) {
        const enrichedPromoters = await Promise.all(
          res.map(async (item) => {
            const promoterRes = await fetchPromoter(item.promoter_id);
            return {
              ...promoterRes,
              ...item,
            };
          })
        );
        setTopPromoters(enrichedPromoters);
      }
    } catch (error) {
      console.error("Error fetching top promoters:", error);
    } finally {
      setIsLoadingTopPromoter(false);
    }
  }, [getTopPromoters, setIsLoadingTopPromoter, setTopPromoters]);

  const fetchPromoter = useCallback(
    async (promoter_id: number) => {
      try {
        const res = await getPromoter(promoter_id);
        if (res) {
          return res;
        }
      } catch (error) {
        console.error("Error fetching promoter:", error);
      }
    },
    [getPromoter]
  );

  const fetchDetails = useCallback(async () => {
    setIsLoadingUserDetail(true);
    try {
      const res = await getUserInfo();
      if (res) {
        const promoterRes = await fetchPromoter(Number(res.first_promoter_id));
        setUserDetail({
          ...res,
          ...promoterRes,
        });
      }
    } catch (error) {
      console.error("Error fetching promoter:", error);
    } finally {
      setIsLoadingUserDetail(false);
    }
  }, [getPromoter, setUserDetail]);

  useEffect(() => {
    fetchTopPromoters();
    fetchDetails();
  }, [fetchTopPromoters, fetchDetails]);

  return (
    <>
      {!isLoadingUserDetail && (
        <>
          <Banner data={userDetail} />
          <ReferralTimeline data={userDetail} />
        </>
      )}
      <div className="flex py-10 max-w-[1500px] m-auto">
        <MilestoneBonuses data={userDetail} />
        <MonthlyLeaders isLoading={isLoadingTopPromoters} data={topPromoters} />
      </div>
      <div className="max-w-[1500px] m-auto">
        <BenQPartnership />
        <PromotionalTools />
        <ProgramTerms />
      </div>
    </>
  );
}
