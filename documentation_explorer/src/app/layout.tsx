import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit Docs | Modern Web Architecture & Next.js App Router Documentation",
  description: "Explore the core architecture, installation guides, and complete API references for building scalable modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="app-container">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
