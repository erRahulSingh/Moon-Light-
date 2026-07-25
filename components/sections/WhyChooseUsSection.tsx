"use client";

import React from "react";
import { UserCheck, Lightbulb, ClipboardCheck, Users, ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/coachingData";

export default function WhyChooseUsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "UserCheck":
        return <UserCheck className="w-8 h-8 text-[#0F172A]" />;
      case "Lightbulb":
        return <Lightbulb className="w-8 h-8 text-[#0F172A]" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-8 h-8 text-[#0F172A]" />;
      case "Users":
        return <Users className="w-8 h-8 text-[#0F172A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-[#0F172A]" />;
      default:
        return <UserCheck className="w-8 h-8 text-[#0F172A]" />;
    }
  };

  return (
    <section className="py-16 bg-white" id="why-us">
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

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-between"
            >
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-4">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-poppins font-black text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
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
