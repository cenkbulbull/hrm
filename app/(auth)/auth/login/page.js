"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "../auth.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Yönlendirme için useRouter

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter(); // useRouter hook'unu kullanıyoruz

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasyon
    if (!email || !password) {
      setError("Lütfen tüm alanları doldurun!");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Başarı mesajını göster
        setSuccess(data.message);

        // Kullanıcı bilgilerini ve token'ı localStorage'a kaydediyoruz
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Yönlendirme işlemi
        setEmail(""); // Formu temizle
        setPassword(""); // Formu temizle
        router.push("/"); // Başarılı giriş sonrası anasayfaya yönlendir
      } else {
        setError(data.message || "Bir hata oluştu!");
      }
    } catch (error) {
      setError("Bir hata oluştu!");
    }
  };

  return (
    <div className="w-full lg:grid h-screen items-center lg:grid-cols-2">
      <div className="flex items-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground text-xs">
              Please enter your login details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="text-xs placeholder:text-xs focus-visible:ring-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full text-xs">
              Login
            </Button>
          </form>

          {/* Success/Error mesajlarını burada gösterebilirsiniz */}
          {success && <div className="text-green-500">{success}</div>}
          {error && <div className="text-red-500">{error}</div>}

          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block magicpattern w-[100%] h-[100%]"></div>
    </div>
  );
}
