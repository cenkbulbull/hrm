import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { IoLogoBuffer } from "react-icons/io";
import { useRouter } from "next/navigation"; // Yönlendirme için

const Navbar = () => {
  const router = useRouter();

  // Logout işlemi
  const handleLogout = () => {
    // Token ve kullanıcı bilgilerini localStorage'dan sil
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Kullanıcıyı login sayfasına yönlendir
    router.push("/auth/login");
  };

  return (
    <div className="flex justify-between items-center bg-white px-10 py-4 rounded-2xl">
      <div className="flex gap-1 items-center">
        <IoLogoBuffer className="text-3xl" />
        <span>hrm</span>
      </div>

      <div className="flex items-center gap-2 divide-x-2">
        <div className="flex items-center rounded-2xl bg-slate-50 h-[30px] px-5">
          <CiSearch />
          <Input
            className="border-0 focus-visible:ring-0 shadow-none placeholder:text-xs"
            placeholder="Quick Search..."
          />
        </div>

        <div className="flex gap-3">
          <Button className="ms-8" variant="outline" size="icon">
            <IoIosNotificationsOutline />
          </Button>

          <Button variant="outline" size="icon">
            <CiCalculator1 />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-xs items-start">
                <span>Admin</span>
                <span>admin@mail.com</span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>{" "}
              {/* Logout butonuna tıklandığında handleLogout çalışacak */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
