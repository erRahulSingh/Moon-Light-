"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/coachingData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-slate-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-sm">
            STUDENT TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight relative">
            What Our Students Say
            <span className="block h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full" />
          </h2>
        </div>

        {/* Testimonials Cards Row - 1 Single Line Layout */}
        <div className="flex flex-row overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="min-w-[290px] sm:min-w-[340px] md:min-w-[380px] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                {/* Yellow Quote Marks */}
                <div className="text-amber-500 text-4xl leading-none font-serif">
                  ““
                </div>
                
                {/* Feedback Text */}
                <p className="text-slate-700 text-sm font-medium leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Bottom Student Profile Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.classTag}
                    </p>
                  </div>
                </div>

                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

      </div>
    </section>
  );
}
