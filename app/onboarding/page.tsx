"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, LineChart, BookOpen, ArrowRight, CheckCircle2, Moon } from "lucide-react";

export default function OnboardingPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      icon: <GraduationCap className="w-16 h-16 text-amber-400" />,
      title: "Learn from Expert Educators",
      subtitle: "Qualified faculty team, 1-on-1 personalized doubt clearing, and dedicated student mentorship.",
      badge: "EXPERT FACULTY & MENTORSHIP"
    },
    {
      icon: <LineChart className="w-16 h-16 text-emerald-400" />,
      title: "Interactive Test Series & AI Analytics",
      subtitle: "Regular chapter mock tests, state rankers leaderboard, and dynamic scorecard performance tracking.",
      badge: "TESTS & PERFORMANCE"
    },
    {
      icon: <BookOpen className="w-16 h-16 text-sky-400" />,
      title: "Central Library & Digital Study Kits",
      subtitle: "Access 5000+ topicwise formula handbooks, PYQ question banks, and quiet AC study rooms.",
      badge: "DIGITAL LIBRARY & NOTES"
    }
  ];

  const currentSlide = slides[slideIndex];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="max-w-xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2">
          <Moon className="w-6 h-6 text-amber-400 fill-amber-400" />
          <span className="font-poppins font-black text-white text-lg">MOONLIGHT</span>
        </Link>
        <Link href="/login" className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider">
          Skip ➔
        </Link>
      </div>

      {/* Main Slide Content */}
      <div className="max-w-xl mx-auto w-full z-10 my-auto text-center px-4">
        <div className="bg-slate-900/90 backdrop-blur-xl py-12 px-8 shadow-2xl rounded-3xl border border-slate-800 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-amber-400/40 flex items-center justify-center mb-6 shadow-xl">
            {currentSlide.icon}
          </div>

          <span className="text-[10px] font-black text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            {currentSlide.badge}
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
            {currentSlide.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
            {currentSlide.subtitle}
          </p>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  slideIndex === idx ? "w-8 bg-amber-400" : "w-2 bg-slate-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="max-w-xl mx-auto w-full z-10">
        <button
          onClick={() => {
            if (slideIndex < slides.length - 1) {
              setSlideIndex(slideIndex + 1);
            } else {
              window.location.href = "/login";
            }
          }}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl hover:shadow-amber-400/20 transition-all uppercase tracking-wider"
        >
          <span>{slideIndex === slides.length - 1 ? "Get Started Now" : "Next Screen"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
