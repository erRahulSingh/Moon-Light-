"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Edit3, UserCheck, Lightbulb, ClipboardCheck, Users } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";
import QuickInfoBar from "./QuickInfoBar";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-white to-slate-50 pt-6 pb-12 overflow-hidden">
      {/* Top right decorative yellow background curve */}
      <div className="absolute top-0 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#F59E0B] rounded-bl-full opacity-90 -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Welcome Tag */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
                WELCOME TO
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-poppins font-black text-[#0F172A] tracking-tight leading-none">
                MOONLIGHT
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-poppins font-black text-[#066E38] tracking-tight leading-tight">
                COACHING CENTRE
              </h2>
            </div>

            {/* Sub-badge pill with accent line */}
            <div className="relative inline-block">
              <div className="bg-[#0F172A] border-2 border-amber-400 rounded-md px-4 py-1.5 shadow-md relative z-10">
                <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                  WHERE LEARNING MEETS SUCCESS
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-full h-full bg-amber-400 rounded-md z-0" />
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-slate-700 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              Building strong concepts, improving skills and shaping brighter futures for students from Nursery to Class 12.
            </p>

            {/* Feature Highlights Bar */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-3">
              
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <UserCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Experienced</h4>
                  <p className="text-[11px] font-medium text-slate-500">Faculty</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Concept Based</h4>
                  <p className="text-[11px] font-medium text-slate-500">Learning</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Regular Test &</h4>
                  <p className="text-[11px] font-medium text-slate-500">Analysis</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Personal Attention</h4>
                  <p className="text-[11px] font-medium text-slate-500">To Every Student</p>
                </div>
              </div>

            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex items-center gap-3 bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm group"
              >
                <div className="p-1.5 rounded-full bg-amber-400/20 text-amber-400">
                  <Phone className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">Call Now</span>
                  <span className="text-sm font-bold tracking-wide">{INSTITUTE_INFO.phone}</span>
                </div>
              </a>

              <Link
                href="/admissions"
                className="flex items-center gap-2.5 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
              >
                <Edit3 className="w-4 h-4 text-slate-950" />
                <span className="leading-none">Admission Open 2024-25</span>
              </Link>
            </div>

          </div>

          {/* Right Column Student Photo & Seal Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Main Student Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 max-w-lg w-full aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                alt="Students Studying at Moonlight Coaching Centre"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* "CLASSES START NOW" Scalloped Starburst Badge */}
            <div className="absolute -top-6 -right-2 sm:-right-4 w-32 sm:w-36 h-32 sm:h-36 z-20 drop-shadow-2xl transform rotate-6 animate-pulse">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* 24-point Scalloped Starburst shape */}
                <polygon
                  points="50,2 55,6 62,3 65,9 73,8 74,15 82,16 81,24 88,27 85,35 91,40 86,47 91,54 85,60 88,68 81,71 82,79 74,80 73,87 65,86 62,92 55,89 50,93 45,89 38,92 35,86 27,87 26,80 18,79 19,71 12,68 15,60 9,54 14,47 9,40 15,35 12,27 19,24 18,16 26,15 27,8 35,9 38,3 45,6"
                  fill="#0F172A"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 leading-tight">
                <span className="text-amber-400 font-black text-[11px] tracking-widest uppercase">CLASSES</span>
                <span className="text-white font-black text-base sm:text-lg tracking-wider my-0.5">START</span>
                <span className="text-amber-400 font-black text-[11px] tracking-widest uppercase">NOW</span>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Info Bar Component */}
        <div className="mt-12">
          <QuickInfoBar />
        </div>

      </div>
    </section>
  );
}
