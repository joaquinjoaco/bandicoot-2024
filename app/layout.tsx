import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandicoot Software",
  description: "Hola mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
