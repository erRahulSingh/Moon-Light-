import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { INSTITUTE_INFO } from "@/data/coachingData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${INSTITUTE_INFO.name} | ${INSTITUTE_INFO.tagline}`,
  description: `${INSTITUTE_INFO.subtitle} Located in ${INSTITUTE_INFO.address}. Director: ${INSTITUTE_INFO.director}. Call ${INSTITUTE_INFO.phone}.`,
  keywords: [
    "Moonlight Coaching Centre",
    "Coaching in Sitamarhi",
    "Parsauni Coaching",
    "Class 10 Board Coaching",
    "Class 11 12 Science Commerce",
    "Library in Parsauni Sitamarhi",
    "Mrs. Anil Jha Coaching",
    "JEE NEET Preparation Sitamarhi"
  ],
  authors: [{ name: INSTITUTE_INFO.name }],
  openGraph: {
    title: `${INSTITUTE_INFO.name} – ${INSTITUTE_INFO.tagline}`,
    description: INSTITUTE_INFO.subtitle,
    type: "website",
    locale: "en_IN",
    siteName: INSTITUTE_INFO.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-[#0F172A] antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
