import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "../auth.css";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full lg:grid h-screen items-center lg:grid-cols-2">
      <div className="flex items-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground text-xs">
              Fill in the fields below to create an account.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                id="fullname"
                type="fullname"
                placeholder="Fullname"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="companyKey">Company Key</Label>
              <Input
                id="companyKey"
                type="companyKey"
                placeholder="Company Key"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>

            <Button type="submit" className="w-full text-xs">
              Signup
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block magicpattern w-[100%] h-[100%]"></div>
    </div>
  );
}
