"use client";

import React from "react";
import { Trophy, UserCheck, ClipboardList, Star, Smile } from "lucide-react";

export default function StatsSection() {
  const statsData = [
    {
      value: "500+",
      label: "Successful Students",
      icon: <Trophy className="w-8 h-8 text-amber-400 fill-amber-400/20" />,
    },
    {
      value: "25+",
      label: "Expert Faculty",
      icon: <UserCheck className="w-8 h-8 text-amber-400" />,
    },
    {
      value: "50+",
      label: "Courses Offered",
      icon: <ClipboardList className="w-8 h-8 text-amber-400" />,
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <Star className="w-8 h-8 text-amber-400 fill-amber-400" />,
    },
    {
      value: "1000+",
      label: "Happy Parents",
      icon: <Smile className="w-8 h-8 text-amber-400 fill-amber-400/20" />,
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] rounded-2xl p-4 sm:p-8 shadow-xl text-white border border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 divide-y-0 divide-slate-700/80">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 sm:px-4 justify-start sm:justify-center"
              >
                <div className="shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-xl sm:text-3xl font-poppins font-black text-white tracking-tight block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5 block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
