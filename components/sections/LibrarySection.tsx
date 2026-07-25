"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ShieldCheck, Newspaper, Users, Award, ArrowRight } from "lucide-react";
import { LIBRARY_FEATURES } from "@/data/coachingData";

export default function LibrarySection() {
  const featureIcons = [
    <BookOpen className="w-5 h-5 text-amber-600" key="1" />,
    <ShieldCheck className="w-5 h-5 text-emerald-600" key="2" />,
    <Newspaper className="w-5 h-5 text-blue-600" key="3" />,
    <Users className="w-5 h-5 text-purple-600" key="4" />,
    <Award className="w-5 h-5 text-amber-600" key="5" />,
  ];

  return (
    <section className="py-16 bg-slate-50" id="library">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Image with Top-Left Yellow Accent Corner */}
          <div className="lg:col-span-6 relative">
            
            {/* Top-Left Yellow Curved Shape */}
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#F59E0B] rounded-tl-3xl -z-0" />

            {/* Library Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
                alt="Moonlight Coaching Centre Library & Reading Room"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* Right Column Copy & Feature Checklist */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Yellow Tag */}
            <div className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-sm">
              OUR LIBRARY
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight leading-tight">
              Read Today, Lead Tomorrow
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-600 font-medium text-base leading-relaxed">
              Our library is a hub of knowledge and inspiration. We provide thousands of books, a peaceful study environment and all the resources students need to excel in their academic and competitive journey.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              {LIBRARY_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="p-2 rounded-xl bg-slate-50 shrink-0">
                    {featureIcons[idx % featureIcons.length]}
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Explore Library Green Button */}
            <div className="pt-4">
              <Link
                href="/library"
                className="inline-flex items-center gap-2 bg-[#066E38] hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm"
              >
                <span>Explore Library</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
