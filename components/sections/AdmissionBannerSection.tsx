"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function AdmissionBannerSection() {
  return (
    <section className="py-12 bg-white" id="admission-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F172A] border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Navy Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-4 text-white z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-black tracking-tight leading-tight">
                ADMISSIONS OPEN FOR{" "}
                <span className="text-amber-400">2024-25</span>
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-semibold max-w-xl">
                Limited Seats! Enroll Today and Secure Your Child&apos;s Future
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm group"
                >
                  <span>Fill Admission Form Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Yellow Column with Phone Call CTA & Overlapping Student Image */}
            <div className="lg:col-span-5 bg-[#F59E0B] p-7 sm:p-10 text-slate-950 flex flex-col justify-center items-center lg:items-center relative min-h-[160px] [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]">
              
              {/* Overlapping Student Photo cutout */}
              <div className="hidden lg:block absolute -left-12 bottom-0 w-44 h-60 z-20">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=500"
                  alt="Student Holding Books"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Call for Admission Box */}
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex items-center gap-4 group text-slate-950 hover:scale-105 transition-transform z-30 lg:ml-12"
              >
                <div className="w-12 h-12 rounded-full border-2 border-slate-950 flex items-center justify-center text-slate-950 shrink-0">
                  <Phone className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs font-black tracking-wider uppercase block text-slate-900 leading-tight">
                    CALL FOR ADMISSION
                  </span>
                  <span className="text-2xl sm:text-3xl font-poppins font-black tracking-tight leading-none block mt-0.5">
                    {INSTITUTE_INFO.phone}
                  </span>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
