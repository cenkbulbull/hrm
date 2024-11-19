"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import MeetingRequestCard from "@/components/MeetingRequestCard";
import TodoCard from "@/components/TodoCard";
import EducationCard from "@/components/EducationCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  const [jobApplications, setJobApplications] = useState([]);

  // Verileri API'den çekme
  useEffect(() => {
    const fetchJobApplications = async () => {
      const response = await fetch("/api/jobApplications/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Token ekleniyor
        },
      });
      const data = await response.json();
      if (data.success) {
        setJobApplications(data.data); // Başvuruları state'e aktar
      } else {
        console.error("Failed to load job applications.");
      }
    };

    fetchJobApplications();
  }, []);

  // Onaylama işlemi
  const handleConfirm = async (id) => {
    try {
      const response = await fetch(`/api/jobApplications/${id}/update`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: true }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Silme işlemi
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/jobApplications/${id}/delete`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Eğitim başarıyla silindiyse, listeden çıkar
        setJobApplications((prevJobApplications) =>
          prevJobApplications.filter(
            (jobApplication) => jobApplication._id !== id
          )
        );
      } else {
        alert(data.message || "Eğitim silinirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-3">
      <MeetingRequestCard />
      <TodoCard />

      <div className="col-span-2">
        <EducationCard />
      </div>

      <div className="col-span-4 bg-white p-5 rounded-2xl">
        <Table>
          <TableCaption>Job applications are listed.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Approval</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobApplications.map((application) => (
              <TableRow key={application._id}>
                <TableCell className="font-medium">
                  {application.position}
                </TableCell>
                <TableCell className="font-medium">
                  {application.email}
                </TableCell>
                <TableCell className="font-medium">
                  <a href={application.resume} download>
                    {application.resume}
                  </a>
                </TableCell>
                <TableCell className="flex gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-[120px]">
                        Confirm
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Approving</AlertDialogTitle>
                        <AlertDialogDescription>
                          Job interviews will begin.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleConfirm(application._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[120px] bg-red-600 text-white"
                      >
                        Reject
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Rejecting</AlertDialogTitle>
                        <AlertDialogDescription>
                          Send an e-mail stating that it is negative.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(application._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
