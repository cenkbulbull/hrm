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
  MdOutlineTaskAlt,
  MdOutlineTitle,
} from "react-icons/md";
import { GrChannel } from "react-icons/gr";

const EducationCard = () => {
  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl font-light">
      <div className="flex justify-between items-center">
        <div>Education List</div>
        <div className="flex gap-2">
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
                    />
                  </div>

                  <div className="relative">
                    <MdCastForEducation className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Education Link"
                    />
                  </div>

                  <div className="relative">
                    <GrChannel className="absolute top-[11px] left-[17px]" />
                    <Input
                      className="px-10 focus-visible:ring-0 text-xs placeholder:text-xs"
                      placeholder="Education Platform"
                    />
                  </div>

                  <Button>Add</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" size="sm" variant="outline">
                Assign
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="gap-3">
                <DialogTitle>Add Education</DialogTitle>

                <div className="flex flex-col gap-2">
                  <Select>
                    <SelectTrigger className="focus:ring-0 text-xs">
                      <SelectValue placeholder="Choose Education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="text-xs" value="Eğitim1">
                        Eğitim1
                      </SelectItem>
                      <SelectItem className="text-xs" value="Eğitim2">
                        Eğitim2
                      </SelectItem>
                      <SelectItem className="text-xs" value="Eğitim3">
                        Eğitim3
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex flex-col gap-3 border-[1px] rounded-md p-2 max-h-[200px] overflow-auto">
                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="all" />
                      <label htmlFor="all">Assign to everyone</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user2" />
                      <label htmlFor="user2">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <Checkbox id="user1" />
                      <label htmlFor="user1">Cenk Bülbül</label>
                    </div>
                  </div>

                  <Button>Assign</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <ul className="text-sm flex flex-col gap-2 divide-y-[1px] h-[150px] overflow-auto">
        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <MdCastForEducation className="text-blue-700" />
            <span>Eğitim 1</span>
          </div>

          <Button size="icon" variant="outline" className="me-2">
            <MdDeleteOutline />
          </Button>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <MdCastForEducation className="text-blue-700" />
            <span>Eğitim 2</span>
          </div>

          <Button size="icon" variant="outline" className="me-2">
            <MdDeleteOutline />
          </Button>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <MdCastForEducation className="text-blue-700" />
            <span>Eğitim 3</span>
          </div>

          <Button size="icon" variant="outline" className="me-2">
            <MdDeleteOutline />
          </Button>
        </li>

        <li className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <MdCastForEducation className="text-blue-700" />
            <span>Eğitim 4</span>
          </div>

          <Button size="icon" variant="outline" className="me-2">
            <MdDeleteOutline />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default EducationCard;
