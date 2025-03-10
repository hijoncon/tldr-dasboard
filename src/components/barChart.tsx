"use client"
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { StreamStats } from '@/api/streams';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({streamStats}: {streamStats: StreamStats | null}) => {
  const [highlightColor, setHighlightColor] = useState<string>("");
  const [borderColor, setBorderColor] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const computedStyles = getComputedStyle(document.documentElement);
      const highlight = computedStyles.getPropertyValue("--highlight").trim();
      const border = computedStyles.getPropertyValue("--border").trim();
      setHighlightColor(highlight);
      setBorderColor(border);
    }
  },[]);

  const data = {
    labels: streamStats?.labels ?? [],
    datasets: [
      {
        label: "chats",
        data: streamStats?.chats ?? [],
        backgroundColor: highlightColor,
        borderColor: borderColor,
        borderWidth: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Viewer Engagement",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '800px',
      height: '100%',
      minHeight: '300px',
      // margin: 'auto',
      display: 'flex', 
      margin: '8px',
      backgroundColor: 'var(--foreground)', 
      padding: '10px', 
      borderRadius: '5px' 
    }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;