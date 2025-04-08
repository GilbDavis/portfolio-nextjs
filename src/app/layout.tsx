import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilberto Davis - Software Developer",
  description: "Software Developer from Panamá",
  applicationName: "Gilberto Davis",
  keywords: [
    "Software Developer",
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
    <>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
