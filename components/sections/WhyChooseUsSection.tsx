"use client";

import React from "react";
import { UserCheck, Lightbulb, ClipboardCheck, User, Target } from "lucide-react";

export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Expert Faculty",
      description: "Well qualified and experienced teachers",
      icon: <UserCheck className="w-8 h-8 text-[#0F172A]" />,
    },
    {
      title: "Concept Based Learning",
      description: "Focus on building strong concepts",
      icon: <Lightbulb className="w-8 h-8 text-[#0F172A]" />,
    },
    {
      title: "Regular Test & Analysis",
      description: "Weekly tests and detailed performance analysis",
      icon: <ClipboardCheck className="w-8 h-8 text-[#0F172A]" />,
    },
    {
      title: "Personal Attention",
      description: "Small batch size and personal attention",
      icon: <User className="w-8 h-8 text-[#0F172A]" />,
    },
    {
      title: "Safe & Conducive Environment",
      description: "Peaceful and secure learning environment",
      icon: <Target className="w-8 h-8 text-[#0F172A]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#FAF9F6]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-sm">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight relative">
            Better Concepts. Better Grades. Brighter Tomorrow!
            <span className="block h-1 w-24 bg-amber-400 mx-auto mt-2 rounded-full" />
          </h2>
        </div>

        {/* 5 Feature Cards - 2 Per Row on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-start space-y-2.5"
            >
              <div className="p-2 sm:p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-poppins font-black text-[#0F172A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
