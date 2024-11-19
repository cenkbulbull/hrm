"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MdCastForEducation,
  MdDeleteOutline,
  MdOutlineTitle,
} from "react-icons/md";
import { GrChannel } from "react-icons/gr";

const EducationCard = () => {
  const [educations, setEducations] = useState([]);
  const [employees, setEmployees] = useState([]); // Çalışanlar için state
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    // Eğitimleri çekmek
    const fetchEducations = async () => {
      const response = await fetch("/api/educations/get");
      const data = await response.json();
      setEducations(data);
    };

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

    fetchEducations();
    fetchEmployees();
  }, []);

  // Yeni eğitim eklemek
  const addEducation = async () => {
    if (!title || !link || !platform) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const response = await fetch("/api/educations/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, link, platform }),
    });

    const data = await response.json();

    if (response.ok) {
      // Eğitim başarıyla eklendiyse, listeyi güncelle
      setEducations((prev) => [...prev, { title, link, platform }]);
      setTitle("");
      setLink("");
      setPlatform("");
    } else {
      alert(data.message);
    }
  };

  // Eğitim silme işlemi
  const deleteEducation = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`/api/educations/${id}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Eğitim başarıyla silindiyse, listeden çıkar
      setEducations((prevEducations) =>
        prevEducations.filter((education) => education._id !== id)
      );
    } else {
      alert(data.message || "Eğitim silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl font-light ">
      <div className="flex justify-between items-center">
        <div>Education List</div>
        <div className="flex gap-2">
          {/* Eğitim Ekleme Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" size="sm">
                New
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="gap-3">
                <DialogTitle>Add Education</DialogTitle>

                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <MdOutlineTitle className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Education name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <MdCastForEducation className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Education Link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <GrChannel className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Education Platform"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                    />
                  </div>

                  <Button onClick={addEducation}>Add</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Eğitim Atama Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" size="sm" variant="outline">
                Assign
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="gap-3">
                <DialogTitle>Assign Education</DialogTitle>

                <div className="flex flex-col gap-2">
                  {/* Eğitim Seçme */}
                  <Select>
                    <SelectTrigger className="focus:ring-0 text-xs">
                      <SelectValue placeholder="Choose Education" />
                    </SelectTrigger>
                    <SelectContent>
                      {educations.map((education, index) => (
                        <SelectItem
                          key={index}
                          className="text-xs"
                          value={education.title}
                        >
                          {education.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Kullanıcı Seçimi */}
                  <div className="flex flex-col gap-3 border-[1px] rounded-md p-2 max-h-[200px] overflow-auto">
                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="all" />
                      <label htmlFor="all">Assign to everyone</label>
                    </div>

                    {employees.map((employee, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Checkbox id={`user-${employee.id}`} />
                        <label htmlFor={`user-${employee.id}`}>
                          {employee.fullname}
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button>Assign</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Eğitim Listesi */}
      <ul className="text-sm flex flex-col gap-2 divide-y-[1px] h-[150px] overflow-auto">
        {educations.map((education, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-2 pt-2"
          >
            <div className="flex items-center gap-2">
              <MdCastForEducation className="text-blue-700" />
              <span>{education.title}</span>
            </div>

            <Button
              size="icon"
              variant="outline"
              className="me-2"
              onClick={() => deleteEducation(education._id)}
            >
              <MdDeleteOutline />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
