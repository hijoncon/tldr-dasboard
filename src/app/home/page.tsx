"use client";
import { VideoShowcase } from "@/components/videoShowcase";
import BarChart from "@/components/barChart";
import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/card";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import MicIcon from "@mui/icons-material/Mic";
import DaySelector from "@/components/daySelector";
import {
  StreamStats,
  Stream,
  getStreams,
  getStreamStats,
  fetchClips,
  Clip,
} from "@/api/streams";
import { getUserInfo, UserDetails } from "@/api/users";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useUserInfo } from "@/hooks/useUserInfo";

const Stats = (streamStats: StreamStats) => (
  <div>
    <div className="flex flex-wrap justify-center w-full h-fit pt-5">
      <Card
        key="Total_Views"
        title="Total Views"
        value={streamStats?.total_views ?? 0}
        icon={RemoveRedEyeIcon}
      />
      <Card
        key="AI_Clip"
        title="AI Clips"
        value={streamStats?.ai_clips ?? 0}
        icon={MovieCreationIcon}
      />
      <Card
        key="Voice_Clip"
        title="Voice Clips"
        value={streamStats?.voice_clips ?? 0}
        icon={MicIcon}
      />
    </div>
    <div className="w-full h-full flex justify-center">
      <BarChart streamStats={streamStats} />
    </div>
  </div>
);

const VideoFilter = ({
  setVideoFilter,
  videoFilter,
}: {
  setVideoFilter: any;
  videoFilter: string;
}) => (
  <FormControl
    variant="filled"
    sx={{
      m: 1,
      minWidth: 200,
      background: "var(--foreground)",
      color: "var(--text)",
    }}
  >
    <InputLabel
      sx={{ background: "var(--foreground)", color: "var(--textSecondary)" }}
      shrink
      id="demo-simple-select-label"
    >
      Filter
    </InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={videoFilter}
      defaultValue={videoFilter}
      label="videoFilter"
      onChange={(e) => setVideoFilter(e.target.value)}
      sx={{
        color: "var(--text)",
      }}
    >
      <MenuItem value="All">All Clips</MenuItem>
      <MenuItem value="voice">Voice Clips</MenuItem>
      <MenuItem value="AI">AI Clips</MenuItem>
    </Select>
  </FormControl>
);

export default function Dashboard() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [streamStats, setStreamStats] = useState<StreamStats | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [videoFilter, setVideoFilter] = useState<string>("All");
  const [clips, setClips] = useState<Clip[]>([]);
  const [filteredClips, setFilteredClips] = useState<Clip[]>([]);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUserDetails(res);
      }
    });
  }, []);

  useEffect(() => {
    if (!userDetails) {
      return;
    }
    getStreams(userDetails.username).then((res) => {
      if (res) {
        setStreams(res);
        setStream(res[0]);
      }
    });
  }, [userDetails]);

  useEffect(() => {
    if (videoFilter === "All") {
      setFilteredClips(clips ?? []);
      return;
    }
    const filteredClips = clips.filter((clip) => {
      if (clip) {
        return clip.kind == videoFilter;
      }
      return true;
    });
    setFilteredClips(filteredClips ?? []);
  }, [videoFilter]);

  const [stream, setStream] = useState<Stream | null>(null);
  const handleStreamChange = (e: any) => {
    const stream_id = e.target.value;
    if (e.target.value == stream?.stream_id) {
      return;
    }
    const selected_stream = streams.find((st) => st.stream_id == stream_id);
    if (selected_stream) {
      setStream(selected_stream);
    }
  };

  useEffect(() => {
    if (!stream) {
      return;
    }
    fetchClips(stream?.stream_id ?? "").then((res) => {
      setClips(res ?? []);
      setVideoFilter("All");
      setFilteredClips(res ?? []);
    });
    getStreamStats(stream.stream_id).then((res) => {
      setStreamStats(res);
    });
  }, [stream]);

  const { userInfo, loading } = useUserInfo();

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-[1150px] w-full p-5">
        <div className="w-full h-full">
          <div className="h-fit w-full flex flex-col justify-center p-5">
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap justify-between max-w-[800px] w-full">
                <div className=" text-base md:text-lg lg:text-3xl text-text w-fit flex items-center">
                  Your TL;DR Analytics
                </div>
                <DaySelector
                  callback={handleStreamChange}
                  stream={stream}
                  streams={streams}
                />
              </div>
            </div>
            {streamStats && <Stats {...streamStats} />}
          </div>

          <div className="h-fit w-full pb-24">
            <div className="flex w-full flex-wrap justify-between p-2">
              <div className="flex text-base md:text-lg lg:text-3xl text-text items-center">
                Your Stream Highlights
              </div>
              <VideoFilter
                setVideoFilter={setVideoFilter}
                videoFilter={videoFilter}
              />
            </div>
            {!loading && (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 gap-x-5 justify-items-center">
                {filteredClips.map((clip, i) => {
                  return (
                    <VideoShowcase
                      tier={`${userInfo?.tier}`}
                      video={clip}
                      key={i}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
