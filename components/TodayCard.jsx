"use client";
import { useState, useEffect } from "react";

import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineTaskAlt } from "react-icons/md";

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
    <div className="flex flex-col gap-8 bg-white p-5 rounded-2xl font-light">
      <div className="flex gap-2 items-center">
        <TiWeatherPartlySunny className="text-5xl" />
        <div>
          <div className="flex gap-2">
            <span>
              <span className="text-xs">Today:</span>
              {dateString}
            </span>
            <span>{timeString}</span>
          </div>
          <span className="text-xs">Realtime Insight</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm underline underline-offset-4 ">
          Today&apos;s events
        </div>

        <ul className="text-sm flex flex-col gap-2 h-[100px] overflow-auto ">
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>18.30 hr toplantı</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Stajyerlerle görüşme</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Frontend İş Görüşmesi</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>18.30 hr toplantı</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Stajyerlerle görüşme</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Frontend İş Görüşmesi</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>18.30 hr toplantı</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Stajyerlerle görüşme</span>
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineTaskAlt className="text-blue-700" />
            <span>Frontend İş Görüşmesi</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodayCard;
