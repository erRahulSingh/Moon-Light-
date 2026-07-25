import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Star,
  Users,
  UserCheck,
  BookOpen,
  Trophy,
  ShieldCheck,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export const metadata = {
  title: `Our Faculty | ${INSTITUTE_INFO.name}`,
  description: `Meet our experienced and dedicated educators at Moonlight Coaching Centre in Parsauni, Sitamarhi.`,
};

export default function FacultyPage() {
  const facultyMembers = [
    {
      name: "Mr. Anil Jha",
      role: "Director & Mathematics Expert",
      subject: "Mathematics",
      experience: "15+ Years",
      desc: "Expert in IIT / JEE & Board Level Mathematics with excellent results.",
      icon: "√x",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mrs. Priya Kumari",
      role: "Physics Faculty",
      subject: "Physics",
      experience: "12+ Years",
      desc: "Specializes in Concept Building and Problem Solving Techniques.",
      icon: "⚛️",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mr. Rahul Singh",
      role: "Chemistry Faculty",
      subject: "Chemistry",
      experience: "10+ Years",
      desc: "Focused on making Chemistry easy and interesting for all.",
      icon: "🧪",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mrs. Neha Verma",
      role: "English Faculty",
      subject: "English",
      experience: "9+ Years",
      desc: "Improves English skills with a strong focus on Communication.",
      icon: "📖",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mr. Amit Kumar",
      role: "Accounts Faculty",
      subject: "Accounts",
      experience: "8+ Years",
      desc: "Simplifies Accounts and builds strong conceptual clarity.",
      icon: "📊",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mrs. Shalini Mishra",
      role: "Computer Science Faculty",
      subject: "Computer Science",
      experience: "7+ Years",
      desc: "Expert in Python, C++, and Computer Applications.",
      icon: "💻",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mr. Deepak Sharma",
      role: "Biology Faculty",
      subject: "Biology",
      experience: "8+ Years",
      desc: "Makes Biology fun and easy with real-life examples.",
      icon: "🧬",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mrs. Kavita Jha",
      role: "Social Science Faculty",
      subject: "Social Science",
      experience: "9+ Years",
      desc: "Helps students understand History, Geography and Civics better.",
      icon: "🌐",
      iconBg: "bg-amber-500 text-slate-950",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & TEACHER IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        {/* Yellow Curved Arc separator */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase">
                OUR EXPERT EDUCATORS
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Meet Our <span className="text-[#F59E0B]">Faculty</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                At Moonlight Coaching Centre, we believe that great teachers inspire great students. Our faculty members are highly qualified, experienced and passionate about teaching.
              </p>

              {/* 3 Feature Badges Pill Container */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Highly Qualified</span>
                    <span className="text-[10px] text-slate-400 block">Experts in Their Fields</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Years of Experience</span>
                    <span className="text-[10px] text-slate-400 block">Proven Track Record</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Student Focused</span>
                    <span className="text-[10px] text-slate-400 block">Personal Attention</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Male Educator */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900"
                  alt="Educator Teaching at Chalkboard"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR DISTINGUISHED FACULTY GRID (8 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0B192C]">
            Our Distinguished Faculty
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Meet the experienced and dedicated educators who are committed to your success.
          </p>
        </div>

        {/* 8 Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between items-center text-center space-y-4 hover:shadow-xl transition-all group"
            >
              {/* Photo & Badge */}
              <div className="relative">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-100 shadow-md group-hover:scale-105 transition-transform">
                  <Image
                    src={fac.image}
                    alt={fac.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Subject Badge Icon */}
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center border-2 border-white shadow-md">
                  {fac.icon}
                </div>
              </div>

              {/* Name & Details */}
              <div className="space-y-1">
                <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                  {fac.name}
                </h3>
                <p className="text-xs font-bold text-slate-700">{fac.role}</p>
                <p className="text-[11px] font-semibold text-slate-500">Subject: {fac.subject}</p>
                <p className="text-[11px] font-bold text-amber-600">Experience: {fac.experience}</p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {fac.desc}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 w-full justify-center text-slate-400">
                <a href="#" className="p-1.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="p-1.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="p-1.5 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors">
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. CORE FACULTY STANDARDS BAR (4 COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 first:px-0">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Experienced Faculty</h4>
              <p className="text-[11px] text-slate-600">Experts in their subjects with years of experience</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 sm:pt-0 sm:px-3">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Student Focused</h4>
              <p className="text-[11px] text-slate-600">Personal attention to each student</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 sm:pt-0 sm:px-3">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Better Results</h4>
              <p className="text-[11px] text-slate-600">Consistent track record of student success</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 sm:pt-0 sm:px-3">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Regular Training</h4>
              <p className="text-[11px] text-slate-600">Continuous training for best teaching methods</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. JOIN THE BEST COACHING FOR A BRIGHTER FUTURE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Join the Best Coaching for a <span className="text-[#F59E0B]">Brighter Future</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Admissions Open for {INSTITUTE_INFO.admissionSession}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Admission Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Center Students Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=500"
                  alt="Students Reading Books"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Checklist Column */}
            <div className="lg:col-span-3 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-700/80 pt-6 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Quality Teaching</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Small Batches</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Regular Tests</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Study Material</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Doubt Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Personal Attention</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
