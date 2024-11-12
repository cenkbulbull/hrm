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
  image = "https://github.com/shadcn.png",
  link = "employees/1",
}) => {
  return (
    <Link
      href={link}
      className="relative flex flex-col items-center gap-3 bg-white p-8 rounded-2xl shadow-md cursor-pointer"
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

      <div className="flex flex-col gap-1 items-center text-xs">
        <div>{fullname}</div>
        <div>{title}</div>
        <div>{tel}</div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
