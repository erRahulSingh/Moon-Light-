"use client";

import React from "react";
import Link from "next/link";
import { Moon, BookOpen, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-400 border border-slate-700">
                <Moon className="w-6 h-6 text-amber-400 fill-amber-400 transform -rotate-12" />
                <BookOpen className="w-5 h-5 text-white absolute bottom-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-black text-xl leading-none text-white tracking-tight">
                  MOONLIGHT
                </span>
                <span className="font-poppins font-extrabold text-sm leading-tight text-emerald-400 tracking-wide">
                  COACHING CENTRE
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to providing quality education and shaping the future of students. Join us and achieve your dreams.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${INSTITUTE_INFO.phone}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-poppins font-black text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/homework" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Homework &amp; Tasks
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-poppins font-black text-white uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-poppins font-black text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{INSTITUTE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="text-slate-300 hover:text-amber-400">
                  {INSTITUTE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="text-slate-300 hover:text-amber-400">
                  {INSTITUTE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 space-y-0.5">
                  <p>{INSTITUTE_INFO.timingWeekdays}</p>
                  <p>{INSTITUTE_INFO.timingSunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Moonlight Coaching Centre. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-red-500">❤️</span> for Students
          </p>
        </div>

      </div>
    </footer>
  );
}
