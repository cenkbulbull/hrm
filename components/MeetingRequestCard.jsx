"use client";

import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import { useState } from "react";
import { addDays, format } from "date-fns";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const MeetingRequestCard = () => {
  const [date, setDate] = useState();
  return (
    <div className="flex flex-col gap-3 justify-between bg-white p-5 rounded-2xl max-w-[300px] font-light">
      <div>Set up a meeting</div>

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

        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </PopoverContent>
      </Popover>

      <Button variant="outline">
        <IoMdTime />
        <Input type="time" className="border-0 shadow-none" />
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="text-xs">Send meeting e-mail to everyone</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              The meeting e-mail is sent to everyone.
            </AlertDialogTitle>
            <AlertDialogDescription>
              Meeting date: ../../.. ..:..
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MeetingRequestCard;
