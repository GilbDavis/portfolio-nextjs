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
  title: "Gilberto Davis - Software Engineer",
  description: "Software Engineer from Panamá",
  applicationName: "Gilberto Davis",
  keywords: [
    "Software Engineer",
    "Panamá",
    "Developer",
    "Typescript",
    "PostgreSQL",
    "React",
    "Node.js",
    "Docker",
    "NextJS",
  ],
  authors: [{ name: "Gilberto Davis" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
