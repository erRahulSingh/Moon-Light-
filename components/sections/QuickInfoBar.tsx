"use client";

import React from "react";
import { MapPin, User, Clock, ClipboardList } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function QuickInfoBar() {
  return (
    <div className="bg-[#0F172A] text-white rounded-2xl shadow-xl p-5 sm:p-7 border border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/80">
        
        {/* Item 1: Address */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4 first:px-0">
          <div className="p-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
            <MapPin className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">ADDRESS</h4>
            <p className="text-sm font-bold text-white mt-0.5 leading-snug">
              Parsauni, Sitamarhi
            </p>
            <p className="text-xs font-medium text-slate-300">Bihar - 843316</p>
          </div>
        </div>

        {/* Item 2: Director */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
          <div className="p-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
            <User className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">DIRECTOR</h4>
            <p className="text-sm font-bold text-white mt-0.5">
              {INSTITUTE_INFO.director}
            </p>
          </div>
        </div>

        {/* Item 3: Timing */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
          <div className="p-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
            <Clock className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">TIMING</h4>
            <p className="text-xs font-bold text-white mt-0.5">
              {INSTITUTE_INFO.timingWeekdays}
            </p>
            <p className="text-xs font-medium text-slate-300">
              {INSTITUTE_INFO.timingSunday}
            </p>
          </div>
        </div>

        {/* Item 4: Courses */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
          <div className="p-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
            <ClipboardList className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">COURSES</h4>
            <p className="text-xs font-bold text-white mt-0.5 leading-snug">
              Nursery to Class 12 &amp;
            </p>
            <p className="text-xs font-medium text-slate-300">Competitive Exams</p>
          </div>
        </div>

      </div>
    </div>
  );
}
