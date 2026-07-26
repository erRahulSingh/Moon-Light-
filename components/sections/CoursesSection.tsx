"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, FileText, Target, ArrowRight } from "lucide-react";

export default function CoursesSection() {
  const coursesData = [
    {
      id: "nursery-9th",
      title: "NURSERY TO 9TH",
      description: "Strong foundation in all subjects with concept based learning.",
      bgClass: "bg-emerald-50/60 border-emerald-200",
      textColor: "text-[#066E38]",
      buttonClass: "bg-[#066E38] hover:bg-[#055c2e] text-white",
      icon: <BookOpen className="w-9 h-9 text-[#066E38]" />,
    },
    {
      id: "10th-board",
      title: "10TH (BOARD)",
      description: "Complete preparation for Board Exams with regular tests & doubt sessions.",
      bgClass: "bg-blue-50/60 border-blue-200",
      textColor: "text-[#0F172A]",
      buttonClass: "bg-[#0F172A] hover:bg-slate-800 text-white",
      icon: <GraduationCap className="w-9 h-9 text-[#0F172A]" />,
    },
    {
      id: "11th-12th",
      title: "11TH & 12TH",
      description: "Science & Commerce Streams with expert faculty guidance.",
      bgClass: "bg-amber-50/60 border-amber-200",
      textColor: "text-amber-700",
      buttonClass: "bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-black",
      icon: <FileText className="w-9 h-9 text-amber-600" />,
    },
    {
      id: "competitive-exams",
      title: "COMPETITIVE EXAMS",
      description: "JEE, NEET, BPSC, SSC, Bank and other competitive exams preparation.",
      bgClass: "bg-purple-50/60 border-purple-200",
      textColor: "text-purple-900",
      buttonClass: "bg-purple-800 hover:bg-purple-900 text-white",
      icon: <Target className="w-9 h-9 text-purple-700" />,
    },
  ];

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-sm">
            OUR COURSES
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight">
            Classes Nursery to 12th
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Quality education for every stage of your learning journey
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${course.bgClass}`}
            >
              <div className="space-y-4 text-center flex flex-col items-center">
                {/* Icon Container */}
                <div className="p-3.5 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  {course.icon}
                </div>

                {/* Course Title */}
                <h3 className={`text-lg font-poppins font-black tracking-tight ${course.textColor}`}>
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 text-center">
                <Link
                  href="/courses"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm transition-transform hover:scale-105 ${course.buttonClass}`}
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Centered CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
          >
            <span>View All Courses</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
