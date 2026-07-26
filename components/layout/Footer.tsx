"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, BookOpen, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";
import BrandLogo from "@/components/common/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-14 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4 md:pr-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Moonlight Coaching Centre"
                width={220}
                height={65}
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform bg-white/95 p-1.5 rounded-xl shadow-md"
              />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to providing quality education and shaping the future of students. Join us and achieve your dreams.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${INSTITUTE_INFO.phone}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 pt-6 md:pt-0 md:px-6">
            <h4 className="text-xs font-poppins font-black text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-2 space-y-3 pt-6 md:pt-0 md:px-6">
            <h4 className="text-xs font-poppins font-black text-white uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-4 space-y-3 pt-6 md:pt-0 md:pl-6">
            <h4 className="text-xs font-poppins font-black text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">Parsauni, Sitamarhi<br />Bihar - 843316</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="text-slate-300 font-bold hover:text-amber-400">
                  {INSTITUTE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="text-slate-300 font-medium hover:text-amber-400">
                  {INSTITUTE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 font-medium space-y-0.5 text-xs">
                  <p>{INSTITUTE_INFO.timingWeekdays}</p>
                  <p>{INSTITUTE_INFO.timingSunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-3">
          <p>© 2024 Moonlight Coaching Centre. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-red-500">❤️</span> for Students
          </p>
        </div>

      </div>
    </footer>
  );
}
