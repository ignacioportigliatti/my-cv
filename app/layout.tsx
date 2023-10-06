import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignacio Portigliatti",
  description: "My CV (powered by Next.js)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>
        <div className="min-h-screen bg flex flex-col h-full">
          <nav className="h-[8vh] sticky backdrop-blur-sm z-50 top-0">
          <Navbar />
          </nav>
          {children}
        </div>
      </body>
   
    </html>
  );
}
