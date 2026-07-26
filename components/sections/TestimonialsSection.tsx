"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ritik Kumar",
      classTag: "Class 10th",
      text: "Moonlight Coaching Centre has helped me a lot in improving my concepts. The teachers are very supportive and regular tests really help.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      name: "Anjali Kumari",
      classTag: "Class 12th",
      text: "The library is amazing! It has all the reference books I need for my preparation. The environment is perfect for study.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      name: "Saurabh Jha",
      classTag: "Class 11th",
      text: "Best coaching in Sitamarhi! I improved my confidence and scores in a very short time.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden" id="testimonials">
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

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                {/* Yellow Quote Mark */}
                <div className="p-1 rounded-md bg-amber-400/20 text-amber-500 w-fit">
                  <span className="text-xl font-black leading-none block font-serif">“</span>
                </div>
                
                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Bottom Student Profile & Stars */}
              <div className="pt-6 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0F172A]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-500">
                      {item.classTag}
                    </p>
                  </div>
                </div>

                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
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
