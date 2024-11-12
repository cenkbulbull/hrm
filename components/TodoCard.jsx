"use client";

import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useState } from "react";
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
  const [date, setDate] = useState();
  const [todos, setTodos] = useState([
    {
      id: 1,
      date: "12.11.2024", // DD.MM.YYYY formatında
      time: "18.00",
      text: "hr toplantı",
      checked: false,
    },
    {
      id: 2,
      date: "12.11.2024",
      time: "19.00",
      text: "hr sunum",
      checked: false,
    },
    {
      id: 3,
      date: "12.11.2024",
      time: "20.00",
      text: "hr meeting",
      checked: false,
    },
    {
      id: 4,
      date: "14.11.2024",
      time: "13.00",
      text: "hr meeting",
      checked: false,
    },
    {
      id: 5,
      date: "17.11.2024",
      time: "13.00",
      text: "hr meeting",
      checked: false,
    },
    {
      id: 6,
      date: "17.11.2024",
      time: "13.00",
      text: "hr meeting",
      checked: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Tarih formatını DD.MM.YYYY'den YYYY-MM-DD'ye dönüştür
  const parseDate = (dateString) => {
    return parse(dateString, "dd.MM.yyyy", new Date());
  };

  // Görevleri tarihe göre grupla
  const groupedTodos = todos.reduce((groups, todo) => {
    const date = parseDate(todo.date); // Geçerli tarih formatına dönüştür
    const dateString = format(date, "yyyy-MM-dd"); // Gruplamak için YYYY-MM-DD formatında kullan
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
                        />
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Button variant="outline">
                    <IoMdTime />
                    <Input type="time" className="border-0 shadow-none" />
                  </Button>

                  <Button>Add</Button>
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
                  <li key={todo.id} className="flex items-center gap-2">
                    <Checkbox
                      id={`todo-${todo.id}`}
                      checked={todo.checked}
                      onCheckedChange={() => handleCheckboxChange(todo.id)}
                    />
                    <div
                      className={`flex gap-2 w-full ${
                        todo.checked ? "line-through text-gray-500" : ""
                      }`}
                    >
                      <span>{todo.time}</span>
                      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
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
