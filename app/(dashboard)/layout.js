"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Yönlendirme için

import { usePathname } from "next/navigation";
import { SiPowerpages } from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login"); // Token yoksa login sayfasına yönlendir
    } else {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
      setLoading(false); // Token varsa, loading durumu bitti
    }
  }, [router]);

  // Url'i bölelim ve breadcrumb oluşturacak şekilde işleyelim
  const getBreadcrumbs = () => {
    if (pathname === "/") {
      return (
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      );
    }

    // URL'yi bölelim ve her segmenti işleyelim
    const segments = pathname
      .split("/") // URL'yi / karakterinden bölelim
      .filter(Boolean); // Boş değerleri çıkar

    // Breadcrumb için dinamik olarak item'ları oluşturalım
    return (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator>
                <MdNavigateNext />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {index === segments.length - 1 ? (
                  <BreadcrumbPage>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    );
  };

  // Loading durumunda render edilmeyecek
  if (loading) {
    return null; // Sayfa hiç gözükmesin
  }

  return (
    <div className="px-12 py-4 overflow-hidden ">
      <Navbar />

      <div className="text-xs ">
        <span className="flex items-center mx-[91px] my-3">
          {getBreadcrumbs()}
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
