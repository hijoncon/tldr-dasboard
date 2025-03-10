import { formatTime } from "@/utils";
import axios from "axios";
import { axiosWithAuth } from "./middleware";

export interface Stream {
  stream_id: string,
  stream_start_time: number
}

export const getStreams = async (channel: string): Promise<Stream[]> => {
  try {
    console.log(channel)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/list/${channel}`;
    const res = await axiosWithAuth.get(url);
    return res.data
  } catch(err) {
    console.error('Failed to get streams due to:', err)
  }
  return []
}

export interface StreamStats  {
  chats: number[],
  labels: number[],
  start_time: number,
  voice_clips: number,
  ai_clips: number,
  total_views: number
}

export const getStreamStats = async (streamId: string): Promise<StreamStats | null> => {
  try {
    const url = `/stream/stats/${streamId}`;
    const res = await axiosWithAuth.get(url);
    const chats = res.data.chats;
    const startTime = res.data.start_time;
    const [modifiedChats, modifiedTimes] = mergeChats(chats);
    let stats = res.data;
    stats.chats = modifiedChats;
    stats.labels = modifiedTimes;
    return stats
  } catch(err) {
    console.error('Failed to get streams due to:', err)
  }
  return null
}

const mergeChats = (chats: number[]) => {
  try {
    const mergeFactor = Math.floor(chats.length / 10) + 1;
    var updatedChats = [];
    var times = [];
    let sum = 0;
    for(let i = 0; i < chats.length; i += 1) {
      sum += chats[i]
      if (i % mergeFactor == mergeFactor - 1) {
        times.push(formatMins((i + 1)  * 300));
        updatedChats.push(sum);
        sum = 0
      }
    }
    times = times.map((time) => time)
    return [updatedChats, times]
  } catch(err) {
    console.log(`Failed to merge chats due to ${err}`)
  }
  return []
}

const formatMins = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export interface Clip {
  id: number;
  start_time: number;
  title: string;
  thumbnail: string;
  file: string;
  views: number;
  kind: string;
}

export const fetchClips = async (streamId: string): Promise<Clip[]> => {
  try {
    const url = `/stream/clips/${streamId}`;
    const response = await axiosWithAuth.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.log('No clips found for this stream');
        return [];
      }
      console.error('Error fetching clips:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

export const fetchAllClips = async (time: number): Promise<Clip[]> => {
  try {
    const url = `/stream/allClips/${time}`;
    const response = await axiosWithAuth.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.log('No clips found for this stream');
        return [];
      }
      console.error('Error fetching clips:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};