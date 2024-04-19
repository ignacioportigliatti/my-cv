import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    <html className="dark" lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <ToastContainer />
          <div className="min-h-screen bg flex flex-col h-full">
            <nav className="h-[8vh] sticky backdrop-blur-sm z-50 top-0">
              <Navbar />
            </nav>
            {children}
          </div>
        </Providers>
      </body>

    </html>
  );
}
