"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  Scale,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const sidebarLinks = [
    { id: 1, name: "1. Introduction" },
    { id: 2, name: "2. Eligibility" },
    { id: 3, name: "3. Course Enrollment" },
    { id: 4, name: "4. Fees & Payments" },
    { id: 5, name: "5. Refund & Cancellation" },
    { id: 6, name: "6. Student Responsibilities" },
    { id: 7, name: "7. Intellectual Property" },
    { id: 8, name: "8. Code of Conduct" },
    { id: 9, name: "9. Limitation of Liability" },
    { id: 10, name: "10. Privacy Policy" },
    { id: 11, name: "11. Changes to Terms" },
    { id: 12, name: "12. Termination" },
    { id: 13, name: "13. Governing Law" },
    { id: 14, name: "14. Contact Us" },
  ];

  const termsList = [
    {
      id: 1,
      title: "Introduction",
      content:
        "Welcome to Moonlight Coaching Centre. These Terms & Conditions govern your use of our website, services, and enrollment in our courses. By accessing our site or registering for classes, you agree to comply with these terms in full.",
    },
    {
      id: 2,
      title: "Eligibility",
      content:
        "Our services are available to students who meet the eligibility criteria for the respective courses. By using our services, you confirm that you are eligible and providing accurate personal details during registration.",
    },
    {
      id: 3,
      title: "Course Enrollment",
      content:
        "Enrollment in any course is subject to seat availability and confirmation of initial fee payment. We reserve the right to refuse enrollment or adjust course schedules with prior notice.",
    },
    {
      id: 4,
      title: "Fees & Payments",
      content:
        "Course fees must be paid in full or as per the agreed installment payment schedule. All fees are non-transferable and non-negotiable once enrollment is confirmed.",
    },
    {
      id: 5,
      title: "Refund & Cancellation",
      content:
        "Refunds are processed strictly as per our institute Refund Policy. No refunds will be provided for partially completed courses, missed classes, or voluntary withdrawals after the batch starts.",
    },
    {
      id: 6,
      title: "Student Responsibilities",
      content:
        "Students must attend classes regularly, complete assignments on time, maintain discipline in the learning environment, and respect faculty and fellow peers.",
    },
    {
      id: 7,
      title: "Intellectual Property",
      content:
        "All content on our website and study materials, including text, graphics, logos, question banks, and notes, is the property of Moonlight Coaching Centre and protected by copyright laws.",
    },
    {
      id: 8,
      title: "Code of Conduct",
      content:
        "Students and visitors are expected to maintain a respectful and professional behavior towards faculty, staff, and fellow students both on campus and online.",
    },
    {
      id: 9,
      title: "Limitation of Liability",
      content:
        "Moonlight Coaching Centre shall not be held liable for indirect, incidental, or consequential damages resulting from website downtime, external exam schedule changes, or personal loss of belongings.",
    },
    {
      id: 10,
      title: "Privacy Policy",
      content:
        "Your privacy is paramount to us. Please refer to our separate Privacy Policy to understand how we collect, handle, and safeguard your personal data.",
    },
    {
      id: 11,
      title: "Changes to Terms",
      content:
        "We reserve the right to update these Terms & Conditions at any time. Any changes will be posted on this page with an updated revision date.",
    },
    {
      id: 12,
      title: "Termination",
      content:
        "We reserve the right to terminate student admission or website access in cases of severe misconduct, non-payment of fees, or breach of institute guidelines.",
    },
    {
      id: 13,
      title: "Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Sitamarhi, Bihar.",
    },
    {
      id: 14,
      title: "Contact Us",
      content:
        `If you have questions regarding these terms, please contact us at ${INSTITUTE_INFO.phone} or email ${INSTITUTE_INFO.email}. Address: ${INSTITUTE_INFO.address}.`,
    },
  ];

  const displayedTerms = showAll ? termsList : termsList.slice(0, 8);

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH STYLED DOCUMENT & SHIELD GRAPHIC */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        {/* Decorative Gold Arc Glow */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Link href="/" className="hover:underline">Home</Link>
                <span>•</span>
                <span className="text-white">Terms &amp; Conditions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Terms &amp; Conditions
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Please read these terms and conditions carefully before using our website or enrolling in any of our courses.
              </p>
            </div>

            {/* Right Side 3D Shield & Document Graphic */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="bg-[#0F172A] p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl flex items-center gap-6 max-w-md w-full z-10">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-amber-400/40">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-heading font-extrabold text-white">Official Agreement</h4>
                  <p className="text-xs text-slate-300">Moonlight Coaching Centre Terms &amp; Policy Guidelines</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 INFO BADGES BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Effective Date</span>
              <span className="text-xs font-bold text-[#0B192C]">May 24, 2024</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
            <div className="p-3 rounded-full bg-purple-50 text-purple-600 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Applicable To</span>
              <span className="text-xs font-bold text-[#0B192C]">All Users &amp; Students</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
            <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Governed By</span>
              <span className="text-xs font-bold text-[#0B192C]">Laws of India</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
            <div className="p-3 rounded-full bg-amber-50 text-amber-600 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Last Updated</span>
              <span className="text-xs font-bold text-[#0B192C]">May 24, 2024</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SPLIT SECTION: SIDEBAR NAVIGATION & ACCORDION ITEMS */}
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
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Agreement Card */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 space-y-2">
              <h4 className="text-xs font-heading font-extrabold text-amber-950">Your Agreement</h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed">
                By using our services, you agree to these Terms &amp; Conditions.
              </p>
              <div className="pt-2">
                <span className="font-serif italic text-sm text-[#0B192C] font-bold block">Thank you!</span>
                <span className="text-[11px] font-bold text-slate-600 block">Moonlight Coaching Centre</span>
              </div>
            </div>
          </div>

          {/* Right Accordion Section */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            {displayedTerms.map((term) => (
              <div
                key={term.id}
                className={`p-5 rounded-2xl border transition-all ${
                  activeSection === term.id
                    ? "border-blue-500 bg-blue-50/30"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActiveSection(activeSection === term.id ? 0 : term.id)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold flex items-center justify-center shrink-0">
                      {term.id}
                    </span>
                    <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                      {term.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeSection === term.id ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {activeSection === term.id && (
                  <p className="text-xs text-slate-600 font-normal leading-relaxed pt-3 pl-10">
                    {term.content}
                  </p>
                )}
              </div>
            ))}

            <div className="pt-4 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B192C] font-extrabold text-xs transition-colors"
              >
                <span>{showAll ? "Show Less Terms ↑" : "View All Terms ↓"}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. HAVE QUESTIONS ABOUT THESE TERMS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-full bg-slate-800 text-amber-400 shrink-0 hidden sm:flex">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Have Questions About These Terms?
              </h3>
              <p className="text-xs text-slate-300 font-normal mt-1">
                If you have any questions or need clarification about our Terms &amp; Conditions, feel free to reach out to us.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-6 py-3 rounded-full text-xs transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
