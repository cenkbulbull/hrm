"use client";
import { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const TodayCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Component unmount olduğunda timer'ı temizle
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = currentTime.toLocaleDateString();

  return (
    <div className="flex flex-col gap-3 justify-between bg-white p-5 rounded-2xl max-w-[300px] font-light">
      <div className="flex gap-2 items-center">
        <TiWeatherPartlySunny className="text-5xl" />
        <div className="flex flex-col gap-1">
          <span>{timeString}</span>
          <span className="text-xs">Realtime Insight</span>
        </div>
      </div>
      <div>
        Today: <span className="font-bold">{dateString}</span>
      </div>
    </div>
  );
};

export default TodayCard;
