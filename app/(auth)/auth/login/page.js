import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "../auth.css";

export default function page() {
  return (
    <div className="w-full lg:grid h-screen items-center lg:grid-cols-2">
      <div className="flex items-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground text-xs">
              Enter your email below to login to your account
            </p>
          </div>

          <div className="grid gap-4">
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
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>
            <Button type="submit" className="w-full text-xs">
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Dont have an account?
            <a href="signup" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block magicpattern w-[100%] h-[100%]"></div>
    </div>
  );
}
