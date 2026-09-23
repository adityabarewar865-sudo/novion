import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novion | Next-Gen AI Battery Management Systems & EV Solutions",
  description:
    "Novion revolutionizes Lithium-ion battery performance, safety, and longevity through Predictive AI and Smart Battery Management Systems (BMS). Founded by Jatin K. Barewar. Predict. Prevent. Power.",
  keywords: [
    "Novion",
    "Battery Management System",
    "Smart BMS",
    "Predictive AI",
    "Lithium-ion Battery",
    "EV Battery Consultancy",
    "Thermal Runaway Prevention",
    "Jatin K. Barewar"
  ],
  authors: [{ name: "Jatin K. Barewar" }],
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${orbitron.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#070A10] text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-400 selection:text-black relative overflow-x-hidden">
        {/* Subtle Ambient Radial Blurred Cyan Light Spots in Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top-center ambient glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
          {/* Middle-right ambient spot */}
          <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
          {/* Lower-left ambient spot */}
          <div className="absolute bottom-[20%] -left-40 w-[550px] h-[550px] bg-cyan-400/8 rounded-full blur-[130px]" />
          {/* Technical Grid overlay at 5% opacity */}
          <div className="absolute inset-0 bg-tech-grid opacity-60" />
        </div>

        <Header />
        <main className="flex-1 pt-28 md:pt-32 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
