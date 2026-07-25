"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Scale,
  ShieldCheck,
  FileText,
  ChevronRight,
  ArrowRight,
  Phone,
  Info,
  CheckCircle2,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState(1);

  const sidebarLinks = [
    { id: 1, name: "1. General Information" },
    { id: 2, name: "2. Educational & Exam Advice" },
    { id: 3, name: "3. No Guarantee of Results" },
    { id: 4, name: "4. External Links & References" },
    { id: 5, name: "5. Accuracy of Content" },
    { id: 6, name: "6. Copyright & Brand Ownership" },
    { id: 7, name: "7. Contact Information" },
  ];

  const disclaimerList = [
    {
      id: 1,
      title: "General Information Notice",
      content:
        "The information provided by Moonlight Coaching Centre on our website (moonlightcoaching.in) and marketing materials is for general educational, academic guidance, and informational purposes only. All information is provided in good faith.",
    },
    {
      id: 2,
      title: "Educational & Exam Advice Disclaimer",
      content:
        "Our study notes, test series, syllabus summaries, and faculty advice are designed to aid board and competitive exam preparation. However, official examination guidelines, dates, and syllabus updates released by respective boards (BSEB, CBSE, NTA, BPSC) remain authoritative.",
    },
    {
      id: 3,
      title: "No Guarantee of Specific Examination Results",
      content:
        "While Moonlight Coaching Centre maintains a high success rate and provides rigorous coaching, individual student performance in competitive and board exams depends on student dedication, regular attendance, personal effort, and exam conditions. Enrollment does not guarantee a specific score or rank.",
    },
    {
      id: 4,
      title: "External Links & Third-Party References",
      content:
        "Our website or study portals may contain links to external third-party websites for student reference (e.g., educational portals, official exam result sites). We do not control or endorse the content, policies, or availability of external sites.",
    },
    {
      id: 5,
      title: "Accuracy of Content & Dynamic Updates",
      content:
        "We strive to keep fee structures, timing details, and course offerings updated. However, course fees, batch schedules, and faculty assignments may be updated periodically without prior personal notification.",
    },
    {
      id: 6,
      title: "Copyright & Brand Ownership",
      content:
        "The logo, brand name 'Moonlight Coaching Centre', study materials, and custom curriculum published on this site are intellectual property of Moonlight Coaching Centre. Unauthorized reproduction or commercial distribution is prohibited.",
    },
    {
      id: 7,
      title: "Contact Information for Legal Inquiries",
      content:
        `If you have any questions or require clarification regarding our website disclaimer, please contact our administrative desk at ${INSTITUTE_INFO.phone} or email ${INSTITUTE_INFO.email}. Address: ${INSTITUTE_INFO.address}.`,
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED ACCENT & SCALE GRAPHIC */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Link href="/" className="hover:underline">Home</Link>
                <span>•</span>
                <span className="text-white">Disclaimer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Website <span className="text-[#F59E0B]">Disclaimer</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Please read this disclaimer carefully before relying on any information provided on this website or enrolling in our academic programs.
              </p>

              <div className="text-xs text-amber-400 font-bold">
                📅 Last Updated: May 24, 2024
              </div>
            </div>

            {/* Right Side 3D Scale & Alert Shield Graphic */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="bg-[#0F172A] p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl flex items-center gap-6 max-w-md w-full z-10">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-amber-400/40">
                  <Scale className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-heading font-extrabold text-white">Legal Terms &amp; Notice</h4>
                  <p className="text-xs text-slate-300">Moonlight Coaching Centre Legal Disclaimer Statement</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 DISCLAIMER PILLARS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          <div className="flex flex-col items-center gap-2 pt-2 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">General Notice</h4>
            <p className="text-[11px] text-slate-600">Information provided for general educational guidance.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-rose-50 text-rose-600 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">No Exam Guarantee</h4>
            <p className="text-[11px] text-slate-600">Results depend on individual student dedication &amp; effort.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Third-Party Links</h4>
            <p className="text-[11px] text-slate-600">External web links are for student reference only.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-[#0B192C]">Policy Updates</h4>
            <p className="text-[11px] text-slate-600">Information is subject to change without prior notice.</p>
          </div>

        </div>
      </section>

      {/* 3. SPLIT SECTION: SIDEBAR NAVIGATION & DISCLAIMER DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-heading font-extrabold text-[#0B192C] uppercase tracking-widest px-2">
                On This Page
              </h3>
              <div className="space-y-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setActiveSection(link.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                      activeSection === link.id
                        ? "bg-[#0B192C] text-[#F59E0B] shadow-sm"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Legal Note Card */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 space-y-2">
              <h4 className="text-xs font-heading font-extrabold text-amber-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Important Legal Note</span>
              </h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed">
                Moonlight Coaching Centre is an independent coaching institute operating in Parsauni, Sitamarhi, Bihar.
              </p>
              <div className="pt-2">
                <span className="font-serif italic text-sm text-[#0B192C] font-bold block">Moonlight Coaching Centre</span>
              </div>
            </div>
          </div>

          {/* Right Detail Cards Section */}
          <div className="lg:col-span-8 space-y-4">
            {disclaimerList.map((item) => (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-3xl border transition-all ${
                  activeSection === item.id
                    ? "border-amber-400 shadow-md"
                    : "border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#0B192C] text-amber-400 text-xs font-extrabold flex items-center justify-center shrink-0">
                    {item.id}
                  </span>
                  <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed pl-10">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HAVE LEGAL INQUIRIES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-white">
              Have Questions About Our <span className="text-[#F59E0B]">Disclaimer?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              If you require further information or have any questions regarding our site&apos;s disclaimer, please contact us.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Contact Admin Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
