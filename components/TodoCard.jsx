"use client";

import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TodoCard = () => {
  const [date, setDate] = useState(null);
  const [task, setTask] = useState(""); // Görev açıklaması
  const [time, setTime] = useState(""); // Görev saati
  const [todos, setTodos] = useState([]); // Görevler listesi

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          `/api/employee/673b527cc012c25fd386e3b4/get`
        );

        if (!response.ok) {
          throw new Error("Çalışan verileri alınırken bir hata oluştu.");
        }

        const data = await response.json();

        if (data.success) {
          setTodos(data.data.todolist);
          // data.data.todolist.map((todo) => {
          //   // setTodos(todo);
          // });
        } else {
          setError(data.message); // Eğer çalışan bulunamazsa mesajı göster
        }
      } catch (error) {
        console.log(error.message); // Hata durumunu yakala
      }
    };

    // Çalışan verilerini çek
    fetchEmployeeData();
  }, []); // employeeId değiştiğinde yeniden çalışır

  // Yeni görev eklemek için
  const handleAddTodo = async (employeeId) => {
    if (!task || !date || !time) return;

    const newTodo = {
      date: format(date, "dd.MM.yyyy"),
      time,
      task,
      checked: false,
    };

    try {
      // Fetch ile PATCH isteği göndermek
      const response = await fetch(
        `/api/employee/673b527cc012c25fd386e3b4/update`,
        {
          method: "PATCH", // PATCH metodu
          headers: {
            "Content-Type": "application/json", // JSON formatında veri gönderildiğini belirtir
          },
          body: JSON.stringify({
            todolist: [newTodo], // Yeni todo eklemek için
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Todo eklerken bir hata oluştu");
      }

      // Başarıyla eklenen görev backend'e eklendiyse frontend'deki todos listesine de ekleyelim
      const updatedEmployee = await response.json(); // Backend'den güncellenmiş çalışan verisini alıyoruz
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Yeni görevi frontend'de de ekliyoruz

      // Formu temizleyelim
      setTask("");
      setDate(null);
      setTime("");
    } catch (error) {
      console.error("Todo eklerken hata oluştu:", error);
    }
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // // Tarih formatını DD.MM.YYYY'den YYYY-MM-DD'ye dönüştür
  // const parseDate = (dateString) => {
  //   return parse(dateString, "dd.MM.yyyy", new Date());
  // };

  // Görevleri tarihe göre grupla
  const groupedTodos = todos.reduce((groups, todo) => {
    // const date = parseDate(todo.date); // Geçerli tarih formatına dönüştür
    // console.log(date);
    // const dateString = format(date, "yyyy-MM-dd"); // Gruplamak için YYYY-MM-DD formatında kullan
    // if (!groups[dateString]) {
    //   groups[dateString] = [];
    // }
    // groups[dateString].push(todo);
    // return groups;

    const dateString = format(todo.date, "yyyy-MM-dd"); // Gruplamak için YYYY-MM-DD formatında kullan
    if (!groups[dateString]) {
      groups[dateString] = [];
    }
    groups[dateString].push(todo);
    return groups;
  }, {});

  // Grupları sıralamak için tarihleri sıralıyoruz
  const sortedDates = Object.keys(groupedTodos).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <div className="flex flex-col gap-4 bg-white p-5 rounded-2xl font-light">
      <div className="flex justify-between items-center">
        <div>Things to do</div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" size="sm">
                New
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="gap-3">
                <DialogTitle>Add to-do</DialogTitle>

                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <MdOutlineWorkOutline className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Enter your planned job."
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>

                  <Popover>
                    <PopoverTrigger asChild className="text-xs">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CiCalendarDate />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent
                      className="flex w-auto flex-col space-y-2 p-2"
                      side="bottom"
                    >
                      <div className="rounded-md border">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          onChange={(e) => setDate(new Date(e.target.value))}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Button variant="outline">
                    <IoMdTime />
                    <Input
                      type="time"
                      className="border-0 shadow-none"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </Button>

                  <Button onClick={handleAddTodo}>Add</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Her grup için tarih başlığı ve altında görevler */}
      <div className="flex flex-col gap-4 h-[150px] overflow-auto">
        {sortedDates.map((dateString) => {
          const date = new Date(dateString);
          return (
            <div key={dateString}>
              <div className="font-semibold text-xs underline mb-2">
                {format(date, "PPP")}
              </div>
              <ul className="text-sm flex flex-col gap-2">
                {groupedTodos[dateString].map((todo) => (
                  <li key={todo._id} className="flex items-center gap-2">
                    <Checkbox
                      id={`todo-${todo._id}`}
                      checked={todo.checked}
                      onCheckedChange={() => handleCheckboxChange(todo._id)}
                    />
                    <div
                      className={`flex gap-2 w-full ${
                        todo.checked ? "line-through text-gray-500" : ""
                      }`}
                    >
                      <span>{todo.time}</span>
                      <label htmlFor={`todo-${todo._id}`}>{todo.task}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoCard;
