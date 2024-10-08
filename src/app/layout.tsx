import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Miyake",
  description: "Eduardo Miyake Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icons/navbar-icon.svg" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
