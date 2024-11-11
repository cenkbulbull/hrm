"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoAirplaneOutline } from "react-icons/io5";
import { PiMoneyWavyBold } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";

const Sidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex flex-col gap-4 text-xl bg-white rounded-2xl w-[75px] py-5">
      <Link
        href="/"
        className={`px-5 py-2 rounded-sm border-l-4  ${
          currentPath === "/" ? " border-blue-500" : "border-white"
        }`}
      >
        <MdOutlineDashboard />
      </Link>
      <Link
        href="/test"
        className={`px-5 py-2 rounded-sm border-l-4 ${
          currentPath === "/test" ? " border-blue-500" : "border-white "
        }`}
      >
        <FiUsers />
      </Link>
      <Link
        href="/test"
        className={`px-5 py-2 rounded-sm border-l-4 ${
          currentPath === "/test" ? " border-blue-500" : "border-white "
        }`}
      >
        <IoAirplaneOutline />
      </Link>

      <Link
        href="/test"
        className={`px-5 py-2 rounded-sm border-l-4 ${
          currentPath === "/test" ? " border-blue-500" : "border-white "
        }`}
      >
        <PiMoneyWavyBold />
      </Link>

      <Link
        href="/test"
        className={`px-5 py-2 rounded-sm border-l-4 ${
          currentPath === "/test" ? " border-blue-500" : "border-white "
        }`}
      >
        <FaRegCalendar />
      </Link>
    </div>
  );
};

export default Sidebar;
