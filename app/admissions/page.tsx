"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  UserCheck,
  BookOpen,
  Trophy,
  Smile,
  Target,
  TrendingUp,
  User,
  ShieldCheck,
  Send,
  Lock,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText,
  HelpCircle,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    course: "Class 10 (Board)",
    parentName: "",
    phone: "",
    email: "",
    location: "Parsauni, Sitamarhi, Bihar",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) {
      alert("Please enter Student Name and Mobile Number.");
      return;
    }
    setSubmitted(true);
  };

  const steps = [
    {
      step: "01",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Fill the Admission Form",
      desc: "Provide basic details in the form.",
    },
    {
      step: "02",
      icon: <Phone className="w-5 h-5 text-[#F59E0B]" />,
      title: "Counseling Session",
      desc: "Our academic counselor will connect with you.",
    },
    {
      step: "03",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      title: "Choose the Right Course",
      desc: "Select the course as per your goal.",
    },
    {
      step: "04",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: "Confirm Admission",
      desc: "Complete the admission and start learning.",
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & STUDENTS IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-none">
                Admissions Open <span className="text-[#F59E0B]">{INSTITUTE_INFO.admissionSession}</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Take the first step towards a successful future. Join Moonlight Coaching Centre and achieve your goals with the best guidance and support.
              </p>

              {/* 4 Feature Badges Pill Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Expert Faculty</span>
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
                  <span className="text-[11px] font-bold text-white leading-tight">Regular Test &amp; Analysis</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Personal Attention</span>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Students */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900"
                  alt="Students Studying at Moonlight Coaching Centre"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE & ADMISSION ENQUIRY FORM SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Why Choose Moonlight Coaching Centre */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
              Why Choose <span className="text-blue-600">Moonlight Coaching Centre?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Experienced Faculty</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Highly qualified and experienced teachers dedicated to student success.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Proven Results</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Consistent track record of excellent results every year.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Personal Attention</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Small batch sizes to ensure individual focus on every student.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Concept Based Learning</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Clear concepts, strong fundamentals and smart learning techniques.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Regular Tests</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Weekly tests and performance analysis to track and improve progress.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-heading font-bold text-[#0B192C]">Goal Oriented Approach</h4>
                <p className="text-[11px] text-slate-600 leading-tight">Helping students set goals and achieve them with the right strategy.</p>
              </div>
            </div>

            {/* Our Admission Process Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 pt-6">
              <h3 className="text-xl font-heading font-extrabold text-[#0B192C]">
                Our <span className="text-blue-600">Admission Process</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                {steps.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-2 relative">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 text-[10px] font-extrabold">
                      {item.step}
                    </span>
                    <h4 className="text-xs font-heading font-bold text-[#0B192C]">{item.title}</h4>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses We Offer Box */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-heading font-extrabold text-[#0B192C]">
                Courses <span className="text-blue-600">We Offer</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
                  <span className="text-xs font-bold text-emerald-800 block">Classes 6 to 10</span>
                  <span className="text-[10px] text-slate-600 block">All Subjects</span>
                  <Link href="/courses" className="inline-block py-1 px-3 bg-[#066E38] text-white text-[10px] font-bold rounded-lg mt-1">
                    View Details ➔
                  </Link>
                </div>

                <div className="bg-blue-50/80 border border-blue-200 p-4 rounded-2xl text-center space-y-2">
                  <span className="text-xs font-bold text-blue-900 block">Classes 11 &amp; 12</span>
                  <span className="text-[10px] text-slate-600 block">Science | Commerce | Arts</span>
                  <Link href="/courses" className="inline-block py-1 px-3 bg-[#0B192C] text-white text-[10px] font-bold rounded-lg mt-1">
                    View Details ➔
                  </Link>
                </div>

                <div className="bg-purple-50/80 border border-purple-200 p-4 rounded-2xl text-center space-y-2">
                  <span className="text-xs font-bold text-purple-900 block">Competitive Exams</span>
                  <span className="text-[10px] text-slate-600 block">JEE | NEET | BPSC | SSC</span>
                  <Link href="/courses" className="inline-block py-1 px-3 bg-purple-700 text-white text-[10px] font-bold rounded-lg mt-1">
                    View Details ➔
                  </Link>
                </div>

                <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl text-center space-y-2">
                  <span className="text-xs font-bold text-amber-900 block">Foundation Courses</span>
                  <span className="text-[10px] text-slate-600 block">NTSE | Olympiad | Others</span>
                  <Link href="/courses" className="inline-block py-1 px-3 bg-[#F59E0B] text-slate-950 text-[10px] font-bold rounded-lg mt-1">
                    View Details ➔
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Enquiry Form Card & Sidebars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Form Card */}
            <div className="bg-[#0B192C] text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800">
              <div className="p-6 bg-slate-900 border-b border-slate-800 space-y-1">
                <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Admission Enquiry Form</span>
                </h3>
                <p className="text-xs text-slate-400">Limited Seats! Enroll today and secure your child&apos;s future.</p>
              </div>

              <div className="p-6 bg-white text-slate-900">
                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                    <span className="text-3xl">🎉</span>
                    <h4 className="text-base font-heading font-extrabold text-[#066E38]">Enquiry Submitted!</h4>
                    <p className="text-xs text-slate-700">Thank you {formData.studentName}. Our academic team will call you at {formData.phone} shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter student full name"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Class / Course Interested In *</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      >
                        <option value="Class 6 to 9">Class 6 to 9 Foundation</option>
                        <option value="Class 10 (Board)">Class 10 (Board Exam)</option>
                        <option value="Class 11 Science/Commerce">Class 11 Science / Commerce</option>
                        <option value="Class 12 Science/Commerce">Class 12 Science / Commerce</option>
                        <option value="Competitive Exams">JEE / NEET / BPSC Competitive</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter parent / guardian name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">City / Location</label>
                      <input
                        type="text"
                        placeholder="Parsauni, Sitamarhi, Bihar"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-extrabold text-slate-700">Message (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-xs shadow-md transition-all"
                    >
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>Your information is safe with us. We will never share your details.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Important Information Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-3xl p-6 space-y-3">
              <h4 className="text-xs font-heading font-extrabold text-blue-950 uppercase tracking-widest flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Important Information</span>
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Admissions are on first come first serve basis.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Counseling is free for all students.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Scholarship test available for deserving students.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hostel facility available (Limited Seats).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Separate batches for Boys &amp; Girls.</span>
                </li>
              </ul>
            </div>

            {/* Need Help? Call Us Box */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 space-y-3 flex items-center gap-4 border border-slate-800 shadow-md">
              <div className="p-3.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 shrink-0">
                <Phone className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Need Help? Call Us
                </span>
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="text-xl font-heading font-extrabold text-[#F59E0B] leading-none block mt-0.5 hover:underline">
                  {INSTITUTE_INFO.phone}
                </a>
                <span className="text-[10px] text-slate-300 block mt-1">
                  Mon - Sat : 6:00 AM - 8:00 PM | Sunday : 8:00 AM - 2:00 PM
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STATS BANNER (DARK NAVY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
              <User className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">500+</span>
              <span className="text-xs text-slate-300 font-medium">Admissful Students</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
              <UserCheck className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">25+</span>
              <span className="text-xs text-slate-300 font-medium">Expert Faculty</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">50+</span>
              <span className="text-xs text-slate-300 font-medium">Courses Offered</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
              <Trophy className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">95%</span>
              <span className="text-xs text-slate-300 font-medium">Success Rate</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0 col-span-2 sm:col-span-1">
              <Smile className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">1000+</span>
              <span className="text-xs text-slate-300 font-medium">Happy Parents</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
