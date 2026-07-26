"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ShieldCheck, Newspaper, Users, Award, ArrowRight } from "lucide-react";
import { LIBRARY_FEATURES } from "@/data/coachingData";

export default function LibrarySection() {
  const features = [
    { text: "Wide collection of books & reference materials", icon: <BookOpen className="w-5 h-5 text-purple-700" /> },
    { text: "Peaceful reading environment", icon: <ShieldCheck className="w-5 h-5 text-emerald-700" /> },
    { text: "Newspapers, magazines & digital resources", icon: <Newspaper className="w-5 h-5 text-blue-700" /> },
    { text: "Separate Reading Room for Boys & Girls", icon: <Users className="w-5 h-5 text-amber-700" /> },
    { text: "Library membership for all students", icon: <Award className="w-5 h-5 text-amber-600" /> },
  ];

  return (
    <section className="py-16 bg-white" id="library">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Image with Top-Left Yellow Accent Corner */}
          <div className="lg:col-span-6 relative">
            
            {/* Top-Left Yellow Curved Accent */}
            <div className="absolute -top-3 -left-3 w-28 h-28 bg-[#F59E0B] rounded-tl-3xl z-0" />

            {/* Library Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000"
                alt="Moonlight Coaching Centre Library & Reading Hall"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>

          {/* Right Column Copy & Feature List */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Yellow Tag */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-sm">
                OUR LIBRARY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight leading-tight">
              Read Today, Lead Tomorrow
            </h2>

            {/* Paragraph Subtitle */}
            <p className="text-slate-600 font-medium text-base leading-relaxed">
              Our library is a hub of knowledge and inspiration. We provide thousands of books, a peaceful study environment and all the resources students need to excel.
            </p>

            {/* Feature List */}
            <div className="space-y-2.5 pt-1">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Explore Library Green Button */}
            <div className="pt-3">
              <Link
                href="/library"
                className="inline-flex items-center gap-2 bg-[#066E38] hover:bg-[#055c2e] text-white font-extrabold px-6 py-3 rounded-lg shadow-md transition-all text-sm"
              >
                <span>Explore Library</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
