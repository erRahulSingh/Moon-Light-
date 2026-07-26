"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, GraduationCap, Moon, BookOpen, User } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Library", href: "/library" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admission", href: "/admissions" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Moonlight Coaching Centre"
              width={220}
              height={65}
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
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

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-amber-400 font-black px-6 py-2.5 rounded-full border-2 border-amber-400 shadow-md hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider group"
            >
              <div className="w-6 h-6 rounded-full bg-amber-400/20 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-400 flex items-center justify-center transition-colors">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wider">Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/login"
              className="p-2.5 rounded-full bg-[#0F172A] text-amber-400 border border-amber-400/60 sm:hidden"
            >
              <User className="w-4 h-4" />
            </Link>
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
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0F172A] border-2 border-amber-400 text-amber-400 font-extrabold py-3 rounded-xl shadow-md uppercase tracking-wider text-sm"
            >
              <User className="w-4 h-4" />
              <span>Login Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
