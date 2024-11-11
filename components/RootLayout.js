"use client"; // Bu, React component'inin istemci tarafında çalışacağını belirtir

import { usePathname } from "next/navigation";
import { SiPowerpages } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Lexend } from "next/font/google";
import "../app/globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/") {
      return "Dashboard";
    }

    const pageName = pathname.split("/").pop(); // URL'nin son kısmını alıyoruz
    if (pageName) {
      return pageName.charAt(0).toUpperCase() + pageName.slice(1); // İlk harfi büyük yapıyoruz
    }

    return "Dashboard";
  };

  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased px-12 py-4 overflow-hidden `}
      >
        <Navbar />

        <div className="text-xs ">
          <span className="flex items-center mx-[91px] my-3">
            {getPageTitle()}
            <SiPowerpages className="mx-1 my-2 text-blue-500" />
          </span>
        </div>

        <div className="flex gap-4 h-[75vh]">
          <div>
            <Sidebar />
          </div>

          <div className="flex-1 overflow-y-auto rounded-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
