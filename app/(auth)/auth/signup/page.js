"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "../auth.css";
import Link from "next/link";

import { useState } from "react";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun sayfayı yeniden yüklemesini engelle

    // Validasyon
    if (!fullname || !email || !password) {
      setError("Lütfen tüm alanları doldurun!");
      return;
    }

    // API'ye isteği gönder
    try {
      const response = await fetch("/api/newEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Kullanıcı başarıyla kaydedildi!");
        setFullname(""); // Inputları sıfırlıyoruz
        setEmail(""); // Inputları sıfırlıyoruz
        setPassword(""); // Inputları sıfırlıyoruz
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
            <h1 className="text-xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground text-xs">
              Fill in the fields below to create an account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            {" "}
            {/* Form etiketini ekledik */}
            <div className="grid gap-2">
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Fullname"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
                value={fullname} // state ile bağlama
                onChange={(e) => setFullname(e.target.value)}
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
                value={email} // state ile bağlama
                onChange={(e) => setEmail(e.target.value)}
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
                value={password} // state ile bağlama
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyKey">Company Key</Label>
              <Input
                id="companyKey"
                type="text"
                placeholder="Company Key"
                required
                className="text-xs placeholder:text-xs focus-visible:ring-0"
              />
            </div>
            <Button type="submit" className="w-full text-xs">
              Signup
            </Button>
          </form>

          {/* Success/Error mesajlarını burada gösterebilirsiniz */}
          {success && <div className="text-green-500">{success}</div>}
          {error && <div className="text-red-500">{error}</div>}

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
