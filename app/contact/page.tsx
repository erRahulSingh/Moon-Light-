"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  UserCheck,
  GraduationCap,
  Zap,
  ShieldCheck,
  ArrowRight,
  Train,
  Bus,
  Hospital,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & BUILDING IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        {/* Yellow Curved Arc separator */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-[#2563EB] text-white font-extrabold text-xs tracking-wider uppercase">
                GET IN TOUCH
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                We&apos;d Love to <span className="text-[#F59E0B]">Hear From You!</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Have questions or want to know more about Moonlight Coaching Centre? We&apos;re here to help you on your journey to success.
              </p>

              {/* 4 Quick Info Badges Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3 hover:border-amber-400 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Call Us</span>
                    <span className="text-xs font-bold text-white block">{INSTITUTE_INFO.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${INSTITUTE_INFO.email}`} className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3 hover:border-amber-400 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Email Us</span>
                    <span className="text-[11px] font-bold text-white truncate block max-w-[90px]">info@moonlight...</span>
                  </div>
                </a>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Working Hours</span>
                    <span className="text-[11px] font-bold text-white block">Mon-Sun 6AM-8PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Visit Us</span>
                    <span className="text-[11px] font-bold text-white block">Parsauni, Bihar</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Coaching Building */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=900"
                  alt="Moonlight Coaching Centre Front"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK CONTACT BAR (4 INTERACTIVE ACTION CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          {/* Card 1: Address */}
          <div className="flex flex-col justify-between pt-2 sm:pt-0 sm:px-3 first:px-0 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-[#0B192C] text-white shrink-0">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Address</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Parsauni, Sitamarhi,<br />Bihar - 843316
                </p>
              </div>
            </div>
            <a
              href="#map-section"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#0B192C] font-extrabold text-xs transition-colors text-center"
            >
              <span>View on Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Call Us */}
          <div className="flex flex-col justify-between pt-4 sm:pt-0 sm:px-3 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-[#0B192C] text-white shrink-0">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Call Us</h4>
                <p className="text-xs font-bold text-slate-900 mt-1">
                  {INSTITUTE_INFO.phone}
                </p>
              </div>
            </div>
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#0B192C] font-extrabold text-xs transition-colors text-center"
            >
              <span>Make a Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Email Us */}
          <div className="flex flex-col justify-between pt-4 sm:pt-0 sm:px-3 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-[#0B192C] text-white shrink-0">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Email Us</h4>
                <p className="text-xs text-slate-600 font-medium mt-1 truncate max-w-[140px]">
                  {INSTITUTE_INFO.email}
                </p>
              </div>
            </div>
            <a
              href={`mailto:${INSTITUTE_INFO.email}`}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#0B192C] font-extrabold text-xs transition-colors text-center"
            >
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Timings */}
          <div className="flex flex-col justify-between pt-4 sm:pt-0 sm:px-3 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-[#0B192C] text-white shrink-0">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Timings</h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Mon - Sat : 6 AM - 8 PM
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  Sunday : 8 AM - 2 PM
                </p>
              </div>
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#0B192C] font-extrabold text-xs transition-colors text-center"
            >
              <span>View Timings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. MAP & FORM SPLIT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4" id="map-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Map & Landmarks */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-heading font-extrabold text-[#0B192C]">Find Us Here</h2>
              <span className="h-0.5 w-12 bg-amber-400 rounded-full" />
            </div>

            {/* Map Box Representation */}
            <div className="bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 relative shadow-sm h-80 flex flex-col justify-between">
              {/* Simulated Map UI */}
              <div className="absolute inset-0 bg-emerald-50/60 p-6 flex items-center justify-center text-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center gap-2 max-w-xs">
                  <div className="p-3 rounded-full bg-red-600 text-white shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-heading font-extrabold text-[#0B192C]">Moonlight Coaching Centre</h4>
                  <p className="text-xs font-semibold text-slate-600">Parsauni, Sitamarhi, Bihar - 843316</p>
                </div>
              </div>

              {/* Map Zoom Controls overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md border border-slate-200 flex flex-col divide-y">
                <button className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100">+</button>
                <button className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100">-</button>
              </div>
            </div>

            {/* Landmarks Row */}
            <div className="bg-[#0B192C] text-white rounded-2xl p-4 grid grid-cols-3 gap-2 text-center">
              <div className="flex items-center gap-2 justify-center">
                <Train className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 block leading-tight">Sitamarhi Junction</span>
                  <span className="text-xs font-bold text-amber-400">12 KM</span>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center border-l border-r border-slate-700 px-2">
                <Bus className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 block leading-tight">Parsauni Bus Stand</span>
                  <span className="text-xs font-bold text-amber-400">1 KM</span>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <Hospital className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 block leading-tight">Sitamarhi Hospital</span>
                  <span className="text-xs font-bold text-amber-400">10 KM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5" id="contact-form">
            <div className="space-y-1">
              <h2 className="text-2xl font-heading font-extrabold text-[#0B192C]">Send Us a Message</h2>
              <p className="text-xs text-slate-600 font-normal">Fill out the form below and our team will get back to you.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <span className="text-3xl">✅</span>
                <h4 className="text-base font-heading font-extrabold text-[#066E38]">Thank You!</h4>
                <p className="text-xs text-slate-700">Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-slate-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-slate-700">Your Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl text-xs shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. WHY CONTACT MOONLIGHT COACHING CENTRE? CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C] text-center">
            Why Contact Moonlight Coaching Centre?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center gap-2 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-heading font-bold text-[#0B192C]">Expert Guidance</h4>
              <p className="text-[11px] text-slate-600 leading-tight">Get advice from experienced faculty</p>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-heading font-bold text-[#0B192C]">Admissions Support</h4>
              <p className="text-[11px] text-slate-600 leading-tight">Know about courses and admission process</p>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-heading font-bold text-[#0B192C]">Career Counseling</h4>
              <p className="text-[11px] text-slate-600 leading-tight">Personalized guidance for a better future</p>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-heading font-bold text-[#0B192C]">Quick Response</h4>
              <p className="text-[11px] text-slate-600 leading-tight">We value your time and respond quickly</p>
            </div>

            <div className="flex flex-col items-center gap-2 pt-2 md:pt-0 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-heading font-bold text-[#0B192C]">100% Support</h4>
              <p className="text-[11px] text-slate-600 leading-tight">We are here to support you always</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ADMISSIONS OPEN FOR 2024-25 BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-3 hidden lg:flex justify-center">
              <div className="relative w-36 h-36">
                <Image
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=300"
                  alt="Books Stack"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
                Admissions Open For <span className="text-[#F59E0B]">2024-25</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Limited Seats! Enroll today and secure your child&apos;s future.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Fill Admission Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
                >
                  <span>View Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Student Photo */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-36 h-48 sm:w-44 sm:h-56">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
                  alt="Students Studying"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
