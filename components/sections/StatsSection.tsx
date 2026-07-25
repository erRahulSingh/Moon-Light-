"use client";

import React from "react";
import { Trophy, UserCheck, ClipboardList, Star, Smile } from "lucide-react";
import { STATS } from "@/data/coachingData";

export default function StatsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Trophy":
        return <Trophy className="w-8 h-8 text-amber-400" />;
      case "UserCheck":
        return <UserCheck className="w-8 h-8 text-amber-400" />;
      case "ClipboardList":
        return <ClipboardList className="w-8 h-8 text-amber-400" />;
      case "Star":
        return <Star className="w-8 h-8 text-amber-400 fill-amber-400" />;
      case "Smile":
        return <Smile className="w-8 h-8 text-amber-400" />;
      default:
        return <Trophy className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 pt-4 sm:pt-3 first:pt-0 sm:first:pt-3"
              >
                <div className="mb-2 p-2 rounded-2xl bg-amber-400/10">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-2xl sm:text-4xl font-poppins font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
