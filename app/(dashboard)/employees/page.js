"use client";
import EmployeeCard from "@/components/EmployeeCard";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export default function page() {
  const [employees, setEmployees] = useState([]); // Çalışanlar için state
  useEffect(() => {
    // Çalışanları çekmek
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // Token'ı kontrol et
      const response = await fetch("/api/getEmployees", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setEmployees(data.employees || []); // Çalışanları state'e al
    };

    fetchEmployees();
  }, []);

  return (
    <div className="relative h-full">
      <div className="grid grid-cols-5 gap-3">
        {employees.map((employee) => {
          return (
            <EmployeeCard
              key={employee._id}
              fullname={employee.fullname}
              title={employee.title}
              tel={employee.tel}
              department={employee.department}
              link={employee._id}
            />
          );
        })}
      </div>

      <Pagination className="absolute bottom-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
