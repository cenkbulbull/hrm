export const metadata = {
  title: "HRM",
  // description: "Generated by create next app",
};
import { Lexend } from "next/font/google";
import "../app/globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased `}>{children}</body>
    </html>
  );
}
