import { MdCastForEducation } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GrChannel } from "react-icons/gr";
import { TbHours12 } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";

const WorkScheduleCard = ({ schedule }) => {
  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl font-light shadow-md">
      <div className="flex justify-between items-center">
        <div>Work Schedule</div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" size="sm">
                Edit
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="gap-3">
                <DialogTitle>Edit Working Hours</DialogTitle>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Monday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Tuesday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Wednesday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Thursday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Friday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Saturday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between ">
                    <span>
                      <div className="flex items-center gap-2">
                        <TbHours12 />
                        <span className="text-xs">Sunday</span>
                      </div>
                    </span>

                    <div className="flex gap-2">
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                      <Button variant="outline">
                        <IoMdTime />
                        <Input type="time" className="border-0 shadow-none" />
                      </Button>
                    </div>
                  </div>

                  <Button>Save</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <ul className="text-sm flex flex-col gap-2 divide-y-[1px]">
        {[
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ].map((day) => {
          const daySchedule = schedule[day]; // Her günün saatlerini alıyoruz
          const startTime = daySchedule?.start || ""; // Başlangıç saati
          const endTime = daySchedule?.end || ""; // Bitiş saati
          const workHours =
            startTime && endTime ? `${startTime} - ${endTime}` : "Not Working"; // Eğer saatler varsa yaz, yoksa "Not Working"

          return (
            <li
              key={day}
              className="flex items-center justify-between gap-2 pt-2"
            >
              <div className="flex items-center gap-2">
                <TbHours12 />
                <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>{" "}
                {/* Gün adını baş harfi büyük olarak yaz */}
              </div>
              <div>
                <span>{workHours}</span> {/* Saatleri veya "Not Working" yaz */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkScheduleCard;
