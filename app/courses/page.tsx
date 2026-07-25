"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Target,
  TrendingUp,
  UserCheck,
  BookOpen,
  Award,
  Clock,
  Users,
  Calendar,
  Phone,
  ArrowRight,
  User,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function CoursesPage() {
  const courseCategories = [
    {
      title: "Classes 6 to 10",
      sub1: "CBSE | ICSE | State Board",
      sub2: "All Subjects",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      btnClass: "bg-[#066E38] hover:bg-emerald-800 text-white",
    },
    {
      title: "Classes 11 & 12",
      sub1: "Science | Commerce | Arts",
      sub2: "Stream Based Preparation",
      icon: <GraduationCap className="w-6 h-6 text-[#0B192C]" />,
      btnClass: "bg-[#0B192C] hover:bg-slate-800 text-white",
    },
    {
      title: "Competitive Exams",
      sub1: "JEE | NEET | BPSC | SSC",
      sub2: "BANK | RAILWAY | Others",
      icon: <Target className="w-6 h-6 text-purple-700" />,
      btnClass: "bg-purple-700 hover:bg-purple-800 text-white",
    },
    {
      title: "Foundation Courses",
      sub1: "NTSE | Olympiad | CLAT",
      sub2: "Early Learning Programs",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      btnClass: "bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-bold",
    },
    {
      title: "Board Preparation",
      sub1: "Special Batches for",
      sub2: "Board Exam Excellence",
      icon: <Award className="w-6 h-6 text-rose-600" />,
      btnClass: "bg-rose-600 hover:bg-rose-700 text-white",
    },
    {
      title: "Scholarship Exams",
      sub1: "Sainik School | Navodaya",
      sub2: "KVPY | Other Exams",
      icon: <User className="w-6 h-6 text-teal-600" />,
      btnClass: "bg-teal-700 hover:bg-teal-800 text-white",
    },
  ];

  const featuredCourses = [
    {
      id: 1,
      badge: "POPULAR",
      badgeClass: "bg-emerald-600 text-white",
      title: "JEE Main & Advanced",
      subtitle: "Class 11 & 12 (Science)",
      desc: "Comprehensive preparation for JEE with concept clarity, practice and performance analysis.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
      duration: "2 Years",
      batchSize: "30 Students",
      classes: "5 Days/Week",
      btnClass: "bg-[#066E38] hover:bg-emerald-800 text-white",
    },
    {
      id: 2,
      badge: "BEST SELLER",
      badgeClass: "bg-blue-600 text-white",
      title: "NEET Preparation",
      subtitle: "Class 11 & 12 (Science)",
      desc: "Focused coaching for NEET with strong basics in PCB and regular tests for better results.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
      duration: "2 Years",
      batchSize: "30 Students",
      classes: "5 Days/Week",
      btnClass: "bg-[#0B192C] hover:bg-slate-800 text-white",
    },
    {
      id: 3,
      badge: "TRENDING",
      badgeClass: "bg-purple-700 text-white",
      title: "Foundation Course",
      subtitle: "Class 6 to 10",
      desc: "Strong foundation for future success with concept based learning and skill development.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
      duration: "3-4 Years",
      batchSize: "25 Students",
      classes: "5 Days/Week",
      btnClass: "bg-purple-700 hover:bg-purple-800 text-white",
    },
    {
      id: 4,
      badge: "NEW BATCH",
      badgeClass: "bg-amber-500 text-slate-950 font-bold",
      title: "BPSC Preparation",
      subtitle: "Graduation & Above",
      desc: "Complete preparation for BPSC with subject wise classes, tests and current affairs.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
      duration: "10-12 Months",
      batchSize: "40 Students",
      classes: "6 Days/Week",
      btnClass: "bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-bold",
    },
    {
      id: 5,
      badge: "POPULAR",
      badgeClass: "bg-emerald-600 text-white",
      title: "Board Exam Booster",
      subtitle: "Class 10 & 12 (All Streams)",
      desc: "Special batches for board exam preparation with important topics, notes and practice papers.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      duration: "6 Months",
      batchSize: "35 Students",
      classes: "5 Days/Week",
      btnClass: "bg-[#066E38] hover:bg-emerald-800 text-white",
    },
    {
      id: 6,
      badge: "SCHOLARSHIP",
      badgeClass: "bg-rose-600 text-white",
      title: "NTSE & Olympiad",
      subtitle: "Class 6 to 10",
      desc: "Prepare for NTSE, Olympiad & other scholarship exams with expert faculty guidance.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
      duration: "1-2 Years",
      batchSize: "25 Students",
      classes: "4 Days/Week",
      btnClass: "bg-rose-600 hover:bg-rose-700 text-white",
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & CLASSROOM IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase">
                OUR COURSES
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Courses Designed for <span className="text-[#F59E0B]">Every Goal. Every Student.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                From foundational classes to competitive exam preparation, we offer a wide range of courses to help students excel in academics and beyond.
              </p>

              {/* 4 Feature Badges Pill Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Expert Faculty Guidance</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Concept Based Learning</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Regular Tests &amp; Analysis</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Personal Attention</span>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Students Taking Notes */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900"
                  alt="Students Taking Notes in Class"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSE CATEGORIES GRID (6 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
            Course Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {courseCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between items-center text-center space-y-3 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                {cat.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-heading font-extrabold text-[#0B192C]">
                  {cat.title}
                </h3>
                <p className="text-[11px] font-semibold text-slate-500">{cat.sub1}</p>
                <p className="text-[10px] text-slate-400">{cat.sub2}</p>
              </div>

              <Link
                href="/admissions"
                className={`w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-[11px] font-extrabold shadow-sm transition-all ${cat.btnClass}`}
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR FEATURED COURSES GRID (6 CARDS WITH DETAILS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0B192C]">
            Our Featured Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-xl transition-all relative group"
            >
              {/* Header with Title & Avatar Image */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold ${course.badgeClass}`}>
                    {course.badge}
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-[#0B192C] pt-1">
                    {course.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">{course.subtitle}</p>
                </div>

                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-md shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {course.desc}
              </p>

              {/* Details Pills (Duration, Batch Size, Classes) */}
              <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-100 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" />
                    <span>Duration</span>
                  </span>
                  <span className="text-xs font-bold text-[#0B192C] mt-0.5 block">{course.duration}</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-center gap-1">
                    <Users className="w-3 h-3 text-blue-500" />
                    <span>Batch Size</span>
                  </span>
                  <span className="text-xs font-bold text-[#0B192C] mt-0.5 block">{course.batchSize}</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-500" />
                    <span>Classes</span>
                  </span>
                  <span className="text-xs font-bold text-[#0B192C] mt-0.5 block">{course.classes}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold shadow-sm transition-all ${course.btnClass}`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY STUDENTS CHOOSE OUR COURSES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
            Why Students Choose Our Courses?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Experienced Faculty</h4>
            <p className="text-[11px] text-slate-600">Learn from experts with years of teaching experience.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Concept Based Learning</h4>
            <p className="text-[11px] text-slate-600">Focus on building strong fundamentals &amp; clarity.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Regular Tests</h4>
            <p className="text-[11px] text-slate-600">Weekly tests &amp; performance analysis for improvement.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Personal Attention</h4>
            <p className="text-[11px] text-slate-600">Small batch sizes ensure individual focus.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Proven Results</h4>
            <p className="text-[11px] text-slate-600">Consistent track record of top results every year.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">All Round Support</h4>
            <p className="text-[11px] text-slate-600">Doubt sessions, study material &amp; guidance always available.</p>
          </div>
        </div>
      </section>

      {/* 5. NOT SURE WHICH COURSE IS RIGHT FOR YOU BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Photo of Students */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-700">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400"
                  alt="Students Counseling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
              <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-white">
                Not Sure Which Course is Right for You?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Our academic counselors are here to help you choose the best path for your future.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-5 py-2.5 rounded-full text-xs shadow-md transition-all"
                >
                  <span>Talk to Counselor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-5 py-2.5 rounded-full text-xs transition-all"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Phone Call Box */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start border-t lg:border-t-0 lg:border-l border-slate-700/80 pt-6 lg:pt-0 lg:pl-6">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="flex items-center gap-3 group hover:scale-105 transition-transform"
              >
                <div className="p-3 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 shadow-md">
                  <Phone className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Call for Guidance
                  </span>
                  <span className="text-lg font-heading font-extrabold text-[#F59E0B] leading-none block mt-0.5">
                    {INSTITUTE_INFO.phone}
                  </span>
                  <span className="text-[10px] text-slate-300 block mt-1">
                    Mon-Sat: 6 AM - 8 PM | Sun: 8 AM - 2 PM
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
