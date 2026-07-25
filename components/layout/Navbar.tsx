"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, GraduationCap, Moon, BookOpen } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Library", href: "/library" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admission", href: "/admissions" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <Moon className="w-7 h-7 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
              <BookOpen className="w-6 h-6 text-white absolute bottom-1.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-black text-xl sm:text-2xl leading-none text-[#0F172A] tracking-tight">
                MOONLIGHT
              </span>
              <span className="font-poppins font-extrabold text-base sm:text-lg leading-tight text-[#066E38] tracking-wide">
                COACHING CENTRE
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 italic tracking-wider">
                {INSTITUTE_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "text-[#0F172A] bg-slate-100 font-bold"
                      : "text-slate-700 hover:text-[#0F172A] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button with Yellow Backdrop Arc */}
          <div className="hidden sm:flex items-center relative">
            <div className="absolute right-0 -top-6 -bottom-6 w-32 bg-[#F59E0B] rounded-bl-full -z-10 opacity-90"></div>
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm group"
            >
              <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>
              <span className="tracking-wide">{INSTITUTE_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="p-2 rounded-full bg-[#0F172A] text-amber-400 sm:hidden"
            >
              <Phone className="w-4 h-4 fill-amber-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-[#0F172A] text-white font-bold py-3 rounded-xl shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Call Us: {INSTITUTE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
