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

const WorkScheduleCard = () => {
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
        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Monday</span>
          </div>

          <div>
            <span>09:00</span> - <span>18:00</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Tuesday</span>
          </div>

          <div>
            <span>09:00</span> - <span>18:00</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Wednesday</span>
          </div>

          <div>
            <span>09:00</span> - <span>18:00</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Thursday</span>
          </div>

          <div>
            <span>09:00</span> - <span>18:00</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Friday</span>
          </div>

          <div>
            <span>09:00</span> - <span>18:00</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Saturday</span>
          </div>

          <div>
            <span>Not Working</span>
          </div>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <TbHours12 />
            <span>Sunday</span>
          </div>

          <div>
            <span>Not Working</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WorkScheduleCard;
