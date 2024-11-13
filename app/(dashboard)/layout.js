"use client";

import { usePathname } from "next/navigation";
import { SiPowerpages } from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  //Sadece url son kısım almak için
  // const getPageTitle = () => {
  //   if (pathname === "/") {
  //     return "Dashboard";
  //   }

  //   const pageName = pathname.split("/").pop(); // URL'nin son kısmını alıyoruz
  //   if (pageName) {
  //     return pageName.charAt(0).toUpperCase() + pageName.slice(1); // İlk harfi büyük yapıyoruz
  //   }

  //   return "Dashboard";
  // };

  //Url'in tamamını kullanmak için
  const getPageTitle = () => {
    if (pathname === "/") {
      return "Dashboard";
    }

    // URL'yi bölelim ve her segmenti doğru şekilde işleyelim
    const segments = pathname
      .split("/") // URL'yi / karakterinden bölelim
      .filter(Boolean) // Boş değerleri çıkar
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)); // Her segmentin ilk harfini büyütüyoruz

    // Segmentleri ikonla birleştiriyoruz
    return segments.reduce((prev, curr, index) => {
      // İkon sadece segmentler arasında olacak
      return index === 0 ? (
        <span key={curr}>{curr}</span>
      ) : (
        <div className="flex items-center gap-1">
          {prev} <MdNavigateNext />
          <span>{curr}</span>
        </div>
      );
    });
  };

  return (
    <div className="px-12 py-4 overflow-hidden ">
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
    </div>
  );
}
