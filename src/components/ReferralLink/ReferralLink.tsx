import React, { useEffect, useState } from "react";

function ReferralLink() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const email = "dev@tl-dr.tv";

    fetch(`https://api-v2.tl-dr.tv/user/referral?email=${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch referral data");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="h-[56px] bg-[#202020] rounded-lg flex items-center">
      <svg
        width="61"
        height="56"
        viewBox="0 0 61 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <g filter="url(#filter0_ii_522_12939)">
          <path
            d="M0.5 21.6C0.5 12.6006 0.5 8.10096 2.7918 4.94658C3.53195 3.92784 4.42784 3.03195 5.44658 2.2918C8.60096 0 13.1006 0 22.1 0H38.9C47.8994 0 52.399 0 55.5534 2.2918C56.5722 3.03195 57.468 3.92784 58.2082 4.94658C60.5 8.10096 60.5 12.6006 60.5 21.6V34.4C60.5 43.3994 60.5 47.899 58.2082 51.0534C57.468 52.0722 56.5722 52.968 55.5534 53.7082C52.399 56 47.8994 56 38.9 56H22.1C13.1006 56 8.60096 56 5.44658 53.7082C4.42784 52.968 3.53195 52.0722 2.7918 51.0534C0.5 47.899 0.5 43.3994 0.5 34.4V21.6Z"
            fill="#111111"
          />
          <path
            d="M1 21.6C1 17.0892 1.00069 13.7462 1.28357 11.1353C1.56543 8.53368 2.12265 6.71822 3.1963 5.24047C3.90562 4.26418 4.76418 3.40562 5.74047 2.6963C7.21822 1.62265 9.03368 1.06543 11.6353 0.783566C14.2462 0.500686 17.5892 0.5 22.1 0.5H38.9C43.4108 0.5 46.7538 0.500686 49.3647 0.783566C51.9663 1.06543 53.7818 1.62265 55.2595 2.6963C56.2358 3.40562 57.0944 4.26418 57.8037 5.24047C58.8773 6.71822 59.4346 8.53368 59.7164 11.1353C59.9993 13.7462 60 17.0892 60 21.6V34.4C60 38.9108 59.9993 42.2538 59.7164 44.8647C59.4346 47.4663 58.8773 49.2818 57.8037 50.7595C57.0944 51.7358 56.2358 52.5944 55.2595 53.3037C53.7818 54.3773 51.9663 54.9346 49.3647 55.2164C46.7538 55.4993 43.4108 55.5 38.9 55.5H22.1C17.5892 55.5 14.2462 55.4993 11.6353 55.2164C9.03368 54.9346 7.21822 54.3773 5.74047 53.3037C4.76418 52.5944 3.90562 51.7358 3.1963 50.7595C2.12265 49.2818 1.56543 47.4663 1.28357 44.8647C1.00069 42.2538 1 38.9108 1 34.4V21.6Z"
            stroke="white"
            stroke-opacity="0.04"
          />
          <g filter="url(#filter1_dd_522_12939)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.6338 31.8454C37.3352 31.8454 37.0377 31.731 36.8102 31.5047C36.3528 31.0497 36.3528 30.3112 36.8078 29.855L38.1448 28.5145C39.2345 27.4284 39.833 25.9817 39.833 24.4359C39.833 22.89 39.2333 21.4387 38.1448 20.3502C35.9002 18.1032 32.2368 18.1032 29.9816 20.3513L28.647 21.6907C28.1908 22.148 27.4523 22.1468 26.9973 21.693C26.54 21.238 26.54 20.4983 26.995 20.0433L28.332 18.7017C31.4995 15.5435 36.6422 15.5446 39.7968 18.7005C41.324 20.2312 42.1664 22.267 42.1664 24.4359C42.1664 26.6059 41.324 28.6394 39.7957 30.1642L38.4598 31.5024C38.2323 31.731 37.9325 31.8454 37.6338 31.8454ZM26.9367 39.6571C24.7655 39.6571 22.7285 38.8159 21.2025 37.2899C19.6765 35.7697 18.8353 33.7397 18.833 31.572C18.8307 29.4009 19.6707 27.3604 21.2014 25.8274L22.5419 24.4962C22.9992 24.04 23.7377 24.0435 24.1915 24.5009C24.6465 24.957 24.6442 25.6967 24.188 26.1505L22.8499 27.4794C21.7625 28.5679 21.1652 30.0215 21.1664 31.5697C21.1687 33.1132 21.766 34.5576 22.851 35.6391C23.9384 36.7252 25.3885 37.3237 26.9367 37.3237C28.4814 37.3237 29.9304 36.7252 31.0142 35.6402L32.3559 34.3079C32.8121 33.8517 33.5506 33.8552 34.0056 34.3126C34.4594 34.7699 34.4571 35.5084 34.0009 35.9622L32.6627 37.2922C31.1414 38.8159 29.1056 39.6571 26.9367 39.6571ZM26.6462 31.9591C26.8737 32.1866 27.1724 32.301 27.4711 32.301C27.7698 32.301 28.0684 32.1866 28.296 31.9591L34.3988 25.8586C34.855 25.4025 34.855 24.664 34.3988 24.2078C33.9438 23.7528 33.2053 23.7528 32.7492 24.2078L26.6462 30.3095C26.1901 30.7656 26.1901 31.503 26.6462 31.9591Z"
              fill="white"
              fill-opacity="0.72"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_ii_522_12939"
            x="0.5"
            y="-1"
            width="60"
            height="59"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_innerShadow_522_12939"
            />
            <feOffset dy="-1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_522_12939"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_522_12939"
              result="effect2_innerShadow_522_12939"
            />
          </filter>
          <filter
            id="filter1_dd_522_12939"
            x="15"
            y="14"
            width="31"
            height="32.5"
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
              result="effect1_dropShadow_522_12939"
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
              result="effect1_dropShadow_522_12939"
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
              result="effect2_dropShadow_522_12939"
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
              in2="effect1_dropShadow_522_12939"
              result="effect2_dropShadow_522_12939"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_522_12939"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="text-xl flex-grow">
        {error && <p className="text-red">Error: {error}</p>}
        {data?.referral_link}
      </div>
      <a href="" className="transition-all hover:opacity-55">
        <svg
          width="106"
          height="50"
          viewBox="0 0 106 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dii_522_12953)">
            <path
              d="M1 21.6C1 12.6006 1 8.10096 3.2918 4.94658C4.03195 3.92784 4.92784 3.03195 5.94658 2.2918C9.10096 0 13.6006 0 22.6 0H83.4C92.3994 0 96.899 0 100.053 2.2918C101.072 3.03195 101.968 3.92784 102.708 4.94658C105 8.10096 105 12.6006 105 21.6V26.4C105 35.3994 105 39.899 102.708 43.0534C101.968 44.0722 101.072 44.968 100.053 45.7082C96.899 48 92.3994 48 83.4 48H22.6C13.6006 48 9.10096 48 5.94658 45.7082C4.92784 44.968 4.03195 44.0722 3.2918 43.0534C1 39.899 1 35.3994 1 26.4V21.6Z"
              fill="#111111"
            />
            <path
              d="M1.5 21.6C1.5 17.0892 1.50069 13.7462 1.78357 11.1353C2.06543 8.53368 2.62265 6.71822 3.6963 5.24047C4.40562 4.26418 5.26418 3.40562 6.24047 2.6963C7.71822 1.62265 9.53368 1.06543 12.1353 0.783566C14.7462 0.500686 18.0892 0.5 22.6 0.5H83.4C87.9108 0.5 91.2538 0.500686 93.8647 0.783566C96.4663 1.06543 98.2818 1.62265 99.7595 2.6963C100.736 3.40562 101.594 4.26418 102.304 5.24047C103.377 6.71822 103.935 8.53368 104.216 11.1353C104.499 13.7462 104.5 17.0892 104.5 21.6V26.4C104.5 30.9108 104.499 34.2538 104.216 36.8647C103.935 39.4663 103.377 41.2818 102.304 42.7595C101.594 43.7358 100.736 44.5944 99.7595 45.3037C98.2818 46.3773 96.4663 46.9346 93.8647 47.2164C91.2538 47.4993 87.9108 47.5 83.4 47.5H22.6C18.0892 47.5 14.7462 47.4993 12.1353 47.2164C9.53368 46.9346 7.71822 46.3773 6.24047 45.3037C5.26418 44.5944 4.40562 43.7358 3.6963 42.7595C2.62265 41.2818 2.06543 39.4663 1.78357 36.8647C1.50069 34.2538 1.5 30.9108 1.5 26.4V21.6Z"
              stroke="url(#paint0_linear_522_12953)"
            />
            <path
              d="M27.09 30.195C25.89 30.195 24.88 29.93 24.06 29.4C23.25 28.86 22.645 28.14 22.245 27.24C21.845 26.34 21.645 25.35 21.645 24.27C21.645 23.19 21.845 22.205 22.245 21.315C22.645 20.415 23.25 19.7 24.06 19.17C24.88 18.64 25.89 18.375 27.09 18.375C28.39 18.375 29.45 18.685 30.27 19.305C31.1 19.915 31.62 20.74 31.83 21.78V21.84C31.83 21.95 31.765 22.005 31.635 22.005H29.985C29.865 22.005 29.785 21.94 29.745 21.81C29.595 21.26 29.28 20.835 28.8 20.535C28.33 20.225 27.75 20.07 27.06 20.07C25.96 20.07 25.11 20.455 24.51 21.225C23.91 21.985 23.61 23 23.61 24.27C23.61 25.54 23.91 26.565 24.51 27.345C25.11 28.115 25.96 28.5 27.06 28.5C27.76 28.5 28.345 28.335 28.815 28.005C29.285 27.675 29.595 27.19 29.745 26.55C29.795 26.43 29.875 26.37 29.985 26.37H31.635C31.715 26.37 31.77 26.39 31.8 26.43C31.84 26.46 31.85 26.505 31.83 26.565C31.63 27.685 31.115 28.57 30.285 29.22C29.465 29.87 28.4 30.195 27.09 30.195ZM37.2415 30.165C36.4215 30.165 35.6915 29.98 35.0515 29.61C34.4115 29.24 33.9115 28.725 33.5515 28.065C33.2015 27.395 33.0265 26.63 33.0265 25.77C33.0265 24.94 33.2015 24.2 33.5515 23.55C33.9115 22.89 34.4115 22.38 35.0515 22.02C35.6915 21.65 36.4215 21.465 37.2415 21.465C38.0615 21.465 38.7915 21.65 39.4315 22.02C40.0715 22.38 40.5715 22.89 40.9315 23.55C41.2915 24.2 41.4715 24.94 41.4715 25.77C41.4715 26.62 41.2915 27.38 40.9315 28.05C40.5815 28.71 40.0865 29.23 39.4465 29.61C38.8065 29.98 38.0715 30.165 37.2415 30.165ZM37.2415 28.62C37.7015 28.62 38.1165 28.5 38.4865 28.26C38.8565 28.01 39.1415 27.67 39.3415 27.24C39.5515 26.81 39.6565 26.32 39.6565 25.77C39.6565 25.25 39.5515 24.78 39.3415 24.36C39.1415 23.93 38.8565 23.595 38.4865 23.355C38.1165 23.115 37.7015 22.995 37.2415 22.995C36.7815 22.995 36.3665 23.115 35.9965 23.355C35.6265 23.585 35.3365 23.915 35.1265 24.345C34.9265 24.765 34.8265 25.24 34.8265 25.77C34.8265 26.33 34.9315 26.825 35.1415 27.255C35.3515 27.685 35.6365 28.02 35.9965 28.26C36.3665 28.5 36.7815 28.62 37.2415 28.62ZM47.3584 21.45C48.0884 21.45 48.7284 21.635 49.2784 22.005C49.8384 22.365 50.2734 22.875 50.5834 23.535C50.8934 24.195 51.0484 24.95 51.0484 25.8C51.0484 26.65 50.8934 27.405 50.5834 28.065C50.2734 28.725 49.8384 29.24 49.2784 29.61C48.7284 29.97 48.0884 30.15 47.3584 30.15C46.8784 30.15 46.4634 30.08 46.1134 29.94C45.7634 29.79 45.4234 29.53 45.0934 29.16C45.0534 29.1 45.0034 29.07 44.9434 29.07C44.9234 29.07 44.9034 29.085 44.8834 29.115C44.8634 29.145 44.8534 29.185 44.8534 29.235V32.85C44.8534 32.99 44.7834 33.06 44.6434 33.06H43.2934C43.1534 33.06 43.0834 32.99 43.0834 32.85V21.825C43.0834 21.685 43.1534 21.615 43.2934 21.615H44.6434C44.7834 21.615 44.8534 21.685 44.8534 21.825V22.41C44.8534 22.5 44.8834 22.545 44.9434 22.545C44.9834 22.545 45.0334 22.515 45.0934 22.455C45.4234 22.085 45.7634 21.825 46.1134 21.675C46.4634 21.525 46.8784 21.45 47.3584 21.45ZM46.9984 22.98C46.5484 22.98 46.1484 23.1 45.7984 23.34C45.4484 23.58 45.1734 23.915 44.9734 24.345C44.7734 24.775 44.6734 25.26 44.6734 25.8C44.6734 26.34 44.7734 26.825 44.9734 27.255C45.1734 27.685 45.4484 28.02 45.7984 28.26C46.1484 28.5 46.5484 28.62 46.9984 28.62C47.6884 28.62 48.2384 28.355 48.6484 27.825C49.0584 27.295 49.2634 26.62 49.2634 25.8C49.2634 24.98 49.0584 24.305 48.6484 23.775C48.2384 23.245 47.6884 22.98 46.9984 22.98ZM52.9631 33.06C52.8231 33.06 52.7531 32.99 52.7531 32.85V31.755C52.7531 31.615 52.8231 31.545 52.9631 31.545H53.6381C53.9381 31.545 54.1631 31.505 54.3131 31.425C54.4631 31.345 54.5931 31.16 54.7031 30.87L55.0031 30.135C55.0231 30.075 55.0331 30.03 55.0331 30C55.0331 29.95 55.0231 29.895 55.0031 29.835L52.0031 21.87C51.9931 21.85 51.9881 21.815 51.9881 21.765C51.9881 21.665 52.0431 21.615 52.1531 21.615H53.6531C53.7631 21.615 53.8431 21.675 53.8931 21.795L55.8431 27.435C55.8731 27.535 55.9181 27.585 55.9781 27.585C56.0381 27.585 56.0831 27.535 56.1131 27.435L57.8981 21.795C57.9281 21.675 58.0081 21.615 58.1381 21.615H59.6081C59.6781 21.615 59.7281 21.64 59.7581 21.69C59.7881 21.73 59.7931 21.79 59.7731 21.87L56.4431 31.215C56.1931 31.915 55.8981 32.395 55.5581 32.655C55.2181 32.925 54.7331 33.06 54.1031 33.06H52.9631Z"
              fill="white"
              fill-opacity="0.72"
            />
            <g filter="url(#filter1_dd_522_12953)">
              <path
                d="M82.0594 18.5516C82.0684 18.6958 81.9505 18.8136 81.806 18.8141L78.947 18.8221C76.4385 18.8221 74.6204 20.7013 74.6204 23.2798V27.5452C74.6204 27.6901 74.5025 27.8085 74.358 27.7984C72.6602 27.6805 71.5 26.4166 71.5 24.6608V18.8133C71.5 16.9341 72.7062 15.6667 74.5155 15.6667H79.0519C80.7676 15.6667 81.9515 16.8173 82.0594 18.5516Z"
                fill="white"
                fill-opacity="0.72"
              />
              <path
                d="M78.9472 20.136H83.488C85.2894 20.136 86.5 21.3991 86.5 23.2792V29.131C86.5 31.0103 85.2894 32.2742 83.4871 32.2742H78.9472C77.1458 32.2742 75.9352 31.0103 75.9352 29.131V23.2792C75.9352 21.3991 77.1458 20.136 78.9472 20.136Z"
                fill="white"
                fill-opacity="0.72"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_dii_522_12953"
              x="0.5"
              y="-1"
              width="105"
              height="51"
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
                radius="0.5"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_522_12953"
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
                in2="BackgroundImageFix"
                result="effect1_dropShadow_522_12953"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_522_12953"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect2_innerShadow_522_12953"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_522_12953"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect3_innerShadow_522_12953"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_522_12953"
                result="effect3_innerShadow_522_12953"
              />
            </filter>
            <filter
              id="filter1_dd_522_12953"
              x="67.5"
              y="14"
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
                result="effect1_dropShadow_522_12953"
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
                result="effect1_dropShadow_522_12953"
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
                result="effect2_dropShadow_522_12953"
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
                in2="effect1_dropShadow_522_12953"
                result="effect2_dropShadow_522_12953"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_522_12953"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_522_12953"
              x1="53"
              y1="0"
              x2="53"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stop-color="white" stop-opacity="0.07" />
              <stop offset="1" stop-color="white" stop-opacity="0.04" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </div>
  );
}

export default ReferralLink;
