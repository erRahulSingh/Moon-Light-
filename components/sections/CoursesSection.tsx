"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, FileText, Target, ArrowRight } from "lucide-react";
import { COURSES } from "@/data/coachingData";

export default function CoursesSection() {
  const getIcon = (name: string, colorClass: string) => {
    switch (name) {
      case "BookOpen":
        return <BookOpen className={`w-10 h-10 ${colorClass}`} />;
      case "GraduationCap":
        return <GraduationCap className={`w-10 h-10 ${colorClass}`} />;
      case "FileText":
        return <FileText className={`w-10 h-10 ${colorClass}`} />;
      case "Target":
        return <Target className={`w-10 h-10 ${colorClass}`} />;
      default:
        return <BookOpen className={`w-10 h-10 ${colorClass}`} />;
    }
  };

  const getTextColor = (theme: string) => {
    switch (theme) {
      case "green":
        return "text-[#066E38]";
      case "blue":
        return "text-[#0F172A]";
      case "yellow":
        return "text-amber-600";
      case "purple":
        return "text-purple-800";
      default:
        return "text-[#0F172A]";
    }
  };

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase">
            OUR COURSES
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-[#0F172A] tracking-tight">
            Classes Nursery to 12th
          </h2>
          <p className="text-slate-600 font-medium text-base">
            Quality education for every stage of your learning journey
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${course.bgClass}`}
            >
              <div className="space-y-4 text-center flex flex-col items-center">
                {/* Icon Container */}
                <div className="p-4 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {getIcon(course.iconName, getTextColor(course.colorTheme))}
                </div>

                {/* Course Title */}
                <h3 className={`text-xl font-poppins font-black tracking-tight ${getTextColor(course.colorTheme)}`}>
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
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-transform hover:scale-105 ${course.buttonClass}`}
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
