"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, UserCheck, Lightbulb, ClipboardCheck, Users, MapPin, User, Clock, BookOpen } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";
import QuickInfoBar from "./QuickInfoBar";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-12 overflow-hidden">
      {/* Decorative top right yellow wave background element */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#F59E0B] rounded-bl-full opacity-90 -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Welcome Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
              WELCOME TO
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

            {/* Sub-badge pill */}
            <div className="inline-block bg-[#0F172A] border-2 border-amber-400 rounded-md px-4 py-1.5 shadow-md">
              <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                {INSTITUTE_INFO.welcomeText}
              </span>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              {INSTITUTE_INFO.subtitle}
            </p>

            {/* Feature Highlights Pill Container */}
            <div className="bg-white/90 backdrop-blur border border-slate-200 rounded-2xl p-4 shadow-card grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Experienced</h4>
                  <p className="text-[11px] font-medium text-slate-500">Faculty</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Concept Based</h4>
                  <p className="text-[11px] font-medium text-slate-500">Learning</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Regular Test &</h4>
                  <p className="text-[11px] font-medium text-slate-500">Analysis</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Personal Attention</h4>
                  <p className="text-[11px] font-medium text-slate-500">To Every Student</p>
                </div>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex items-center gap-3 bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm group"
              >
                <div className="p-1.5 rounded-full bg-amber-400/20 text-amber-400">
                  <Phone className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">Call Now</span>
                  <span className="text-sm font-bold">{INSTITUTE_INFO.phone}</span>
                </div>
              </a>

              <Link
                href="/admissions"
                className="flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
              >
                <span className="leading-none">Admission Open {INSTITUTE_INFO.admissionSession}</span>
              </Link>
            </div>

          </div>

          {/* Right Column Student Photo & Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Student Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 max-w-lg w-full aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                alt="Students Studying at Moonlight Coaching Centre"
                fill
                priority
                className="object-cover object-center"
              />
              
              {/* Subtle inner shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* "CLASSES START NOW" Seal Badge */}
            <div className="absolute -top-6 -right-2 sm:-right-4 w-32 sm:w-36 h-32 sm:h-36 hero-seal-badge flex flex-col items-center justify-center text-center p-2 shadow-2xl z-20 transform rotate-6 animate-pulse">
              <span className="text-amber-400 font-black text-xs tracking-wider uppercase">CLASSES</span>
              <span className="text-white font-black text-lg leading-tight">START</span>
              <span className="text-amber-400 font-black text-xs tracking-wider uppercase">NOW</span>
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
