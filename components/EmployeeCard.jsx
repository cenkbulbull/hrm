import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HiDotsHorizontal } from "react-icons/hi";

const EmployeeCard = ({
  fullname,
  title,
  tel,
  email,
  startDate,
  department,
  salary,
  image = "https://github.com/shadcn.png",
  link = "1",
  detail,
}) => {
  return (
    <Link
      href={`/employees/${link}`}
      className="relative flex flex-col gap-3 bg-white p-8 rounded-2xl shadow-md cursor-pointer"
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute right-5 top-3">
          <HiDotsHorizontal />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <div>
          <span className="font-semibold">Fullname:</span> {fullname}
        </div>
        <div>
          <span className="font-semibold">Department:</span> {department}
        </div>
        <div>
          <span className="font-semibold">Title:</span> {title}
        </div>
        <div className={detail ? "flex flex-col gap-2" : "hidden"}>
          <div>
            <span className="font-semibold">Phone:</span> {tel}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {email}
          </div>
          <div>
            <span className="font-semibold">Start Date:</span> {startDate}
          </div>
          <div>
            <span className="font-semibold">Salary:</span> {salary}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
