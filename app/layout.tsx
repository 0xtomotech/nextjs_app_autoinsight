import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "AutoInsight",
  description: "Discover the best cars for rent in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
