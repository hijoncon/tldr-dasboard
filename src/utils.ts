export function formatTime(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true
  });

  return `${formattedDate} ${formattedTime}`;
}