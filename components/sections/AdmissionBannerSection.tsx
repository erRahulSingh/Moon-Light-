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
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0F172A] border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Navy Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 text-white z-10">
              <h2 className="text-2xl sm:text-4xl font-poppins font-black tracking-tight text-amber-400">
                ADMISSIONS OPEN FOR {INSTITUTE_INFO.admissionSession}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-semibold">
                Limited Seats! Enroll Today and Secure Your Child&apos;s Future
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm group"
                >
                  <span>Fill Admission Form Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Yellow Column with Phone Call CTA & Overlapping Student Image */}
            <div className="lg:col-span-5 bg-[#F59E0B] p-8 sm:p-10 text-slate-950 flex flex-col justify-center items-center lg:items-end relative min-h-[160px]">
              
              {/* Overlapping Student Photo (Visible on desktop) */}
              <div className="hidden lg:block absolute -left-16 bottom-0 w-44 h-56 z-20">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400"
                  alt="Student Holding Books"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Call for Admission Box */}
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex items-center gap-4 group text-slate-950 hover:scale-105 transition-transform"
              >
                <div className="p-4 rounded-full bg-slate-950 text-amber-400 shadow-md">
                  <Phone className="w-7 h-7 fill-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-black tracking-widest uppercase block text-slate-900">
                    CALL FOR ADMISSION
                  </span>
                  <span className="text-2xl sm:text-3xl font-poppins font-black tracking-tight leading-none block">
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
