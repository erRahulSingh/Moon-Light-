"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "header" | "footer";
  className?: string;
}

export default function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Official Emblem Circular Icon */}
      <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 rounded-full bg-gradient-to-b from-[#0A1931] via-[#0B192C] to-[#040C1A] border-2 border-amber-400 shadow-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
        
        {/* Golden Crescent Moon Outline */}
        <div className="absolute -left-1 -top-1 w-12 h-12 rounded-full border-4 border-amber-400 border-r-transparent border-b-transparent transform -rotate-45" />

        {/* Sparkling Stars */}
        <span className="absolute top-2 right-2 text-amber-300 text-[10px] animate-pulse">✦</span>
        <span className="absolute top-3.5 left-2 text-amber-200 text-[7px]">✦</span>

        {/* Torch & Book SVG Elements */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-1">
          {/* Flame */}
          <div className="w-3.5 h-4 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full blur-[0.2px] animate-pulse -mb-0.5 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          {/* Torch Stem */}
          <div className="w-1.5 h-2 bg-gradient-to-b from-slate-200 to-slate-400 rounded-sm" />
          {/* Open Book */}
          <div className="flex items-center justify-center -mt-0.5">
            <svg viewBox="0 0 24 14" className="w-6 h-3.5 text-white fill-white">
              <path d="M2 2C6 0.5 10 1.5 12 3.5C14 1.5 18 0.5 22 2V12C18 10.5 14 11.5 12 13.5C10 11.5 6 10.5 2 12V2Z" stroke="#0F172A" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Official Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-poppins font-black text-xl sm:text-2xl tracking-tight ${variant === "footer" ? "text-white" : "text-[#0B192C]"}`}>
          MOON
        </span>
        <span className="font-poppins font-black text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 bg-clip-text text-transparent -mt-1">
          LIGHT
        </span>
        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#066E38] mt-0.5">
          COACHING CENTRE
        </span>
      </div>
    </div>
  );
}
