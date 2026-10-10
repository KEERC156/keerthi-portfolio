import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keerthi | Software Developer & Engineer Portfolio",
  description:
    "Personal portfolio of Keerthi - Software Engineering, Full-Stack Development, Hackathon Innovator, and Problem Solver.",
  keywords: [
    "Keerthi",
    "Software Developer",
    "Portfolio",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Three.js",
    "Software Engineering Intern",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#05070d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
