import { Clip } from "@/api/streams";
import { formatTime } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import DownloadIcon from "@mui/icons-material/Download";
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const DOWNLOAD = {
  BASIC: "basic_watermarked",
  BASIC_CROPPED: "basic_watermarked_cropped",
  PAID: "base_video",
  PAID_CROPPED: "basic_cropped",
};

export const VideoShowcase = ({
  video,
  tier,
}: {
  tier: string;
  video: Clip;
}) => {
  const handleDownload = async (
    event: React.MouseEvent<HTMLElement>,
    isMobile: boolean
  ) => {
    event.preventDefault();

    const isPaidUser = tier.toLowerCase() !== "basic";
    const basicUrl = isMobile ? DOWNLOAD.BASIC_CROPPED : DOWNLOAD.BASIC;
    const paidUrl = isMobile ? DOWNLOAD.PAID_CROPPED : DOWNLOAD.PAID;

    console.log(video.file);

    const url = `${process.env.NEXT_PUBLIC_CDN}/${video.file}`.replace(
      DOWNLOAD.BASIC,
      isPaidUser ? paidUrl : basicUrl
    );

    const filename = `${video.title}${isMobile ? " (Mobile)" : ""}.mp4`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_VIDEO}/?video_id=${video.id}`}
      target="_blank"
    >
      <div
        className="flex-col flex gap-y-2 w-fit p-1 max-w-[330px] h-[280px] text-text rounded-md"
        id="videoBox"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}/${video.thumbnail}`}
          alt="video thumbnail"
          width={325}
          height={181}
        />
        <div className="w-full h-fit flex justify-between">
          <div className="text-lg px-2 font-bold line-clamp-2">
            {video.title}
          </div>
          <div className="relative group">
            <div
              className="absolute z-10 bg-black border border-[#8E59F2] px-2 bottom-0 right-0 hidden group-hover:block"
              onClick={(e) => e.preventDefault()}
            >
              <IconButton
                onClick={(event) => handleDownload(event, false)}
                sx={{ color: "var(--text)" }}
                className="text-xs hover:text-[#8E59F2]"
              >
                <StayCurrentLandscapeIcon className="mr-3" /> Landscape
              </IconButton>
              <IconButton
                onClick={(event) => handleDownload(event, true)}
                sx={{ color: "var(--text)" }}
                className="text-xs hover:text-[#8E59F2]"
              >
                <StayCurrentPortraitIcon className="mr-3" /> Mobile
              </IconButton>
            </div>
            <DownloadIcon />
          </div>
        </div>
        <div className="flex px-2 justify-between text-md">
          {video.views ? (
            <span className="flex gap-x-1">
              <strong>{video.views}</strong> views
            </span>
          ) : (
            "New"
          )}
          <span className="">{formatTime(video.start_time)}</span>
        </div>
      </div>
    </Link>
  );
};
