"use client";
import EmployeeCard from "@/components/EmployeeCard";
import WorkScheduleCard from "@/components/WorkScheduleCard";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [employee, setEmployee] = useState(null);

  // params.id'yi doğrudan kullanabilirsiniz
  const { id } = React.use(params);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      if (!id) return; // id olmadığı sürece veri çekme işlemi yapma
      try {
        const response = await fetch(`/api/employee/${id}/get`);

        if (!response.ok) {
          throw new Error("Çalışan verileri alınırken bir hata oluştu.");
        }

        const data = await response.json();
        setEmployee(data.data); // Veri geldiğinde state'i güncelle
        console.log(data.data);
      } catch (error) {
        console.log(error.message); // Hata durumunu yakala
      }
    };

    fetchEmployeeData(); // veri çekme işlemi
  }, [id]); // id değiştiğinde tekrar çalışacak

  return (
    <div className="grid grid-cols-3 gap-3">
      {employee ? (
        <>
          {/* Employee Card */}
          <div className="col-span-1">
            <EmployeeCard
              className="cols-span-1"
              fullname={employee.fullname} // employee verilerini dinamik olarak kullan
              title={employee.title}
              tel={employee.tel}
              email={employee.email}
              startDate={employee.startDate}
              department={employee.department}
              salary={employee.salary}
              detail={true}
            />
          </div>

          {/* Work Schedule Card */}
          <div className="col-span-2">
            <WorkScheduleCard schedule={employee.workSchedule} />
          </div>
        </>
      ) : (
        // Veriler yüklenene kadar Loading mesajı göster
        <div className="col-span-3 text-center">Loading...</div>
      )}
    </div>
  );
};

export default Page;
