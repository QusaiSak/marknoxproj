import Footer from "@/components/Footor";
import Header from "@/components/Header";
import MatrixRain from "@/components/MatrixRain";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "A cyberpunk-themed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.className} antialiased`}>
        <MatrixRain />
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
