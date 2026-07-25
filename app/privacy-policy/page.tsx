"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  FileText,
  Lock,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(1);

  const sidebarLinks = [
    { id: 1, name: "1. Introduction" },
    { id: 2, name: "2. Information We Collect" },
    { id: 3, name: "3. How We Use Information" },
    { id: 4, name: "4. Information Sharing" },
    { id: 5, name: "5. Data Security" },
    { id: 6, name: "6. Your Rights & Choices" },
    { id: 7, name: "7. Cookies & Tracking" },
    { id: 8, name: "8. Data Retention" },
    { id: 9, name: "9. Children's Privacy" },
    { id: 10, name: "10. Changes to This Policy" },
    { id: 11, name: "11. Contact Us" },
  ];

  const privacyList = [
    {
      id: 1,
      title: "Introduction",
      content:
        "This Privacy Policy describes how Moonlight Coaching Centre collects, uses, and protects the personal information of students, parents, and website visitors. We are committed to maintaining data privacy and security.",
    },
    {
      id: 2,
      title: "Information We Collect",
      content:
        "We may collect personal information such as student full name, parent name, mobile number, email address, course preferences, and location when you register or submit enquiry forms.",
    },
    {
      id: 3,
      title: "How We Use Information",
      content:
        "We use the collected information to process course enrollments, communicate class schedules, send performance reports to parents, and improve our educational services.",
    },
    {
      id: 4,
      title: "Information Sharing",
      content:
        "We do not sell or rent your personal information to third parties. We may share data strictly with trusted service providers who assist in operating our SMS, website, or payment processing.",
    },
    {
      id: 5,
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      id: 6,
      title: "Your Rights & Choices",
      content:
        "You have the right to access, update, or request deletion of your personal information. You can also opt out of promotional SMS or email communications at any time.",
    },
    {
      id: 7,
      title: "Cookies & Tracking",
      content:
        "Our website uses standard session cookies to enhance browsing performance and analyze traffic trends. You can control or disable cookie preferences through your browser settings.",
    },
    {
      id: 8,
      title: "Data Retention",
      content:
        "We retain personal student records only as long as necessary for educational reference, academic verification, or legal compliance purposes.",
    },
    {
      id: 9,
      title: "Children's Privacy",
      content:
        "Our online forms for minor students must be filled with parental consent. We do not knowingly collect personal data from children without guardian authorization.",
    },
    {
      id: 10,
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy periodically. Any modifications will be updated on this page along with a revised effective date.",
    },
    {
      id: 11,
      title: "Contact Us",
      content:
        `If you have any questions about this Privacy Policy, please contact our administrative desk at ${INSTITUTE_INFO.phone} or email ${INSTITUTE_INFO.email}.`,
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH DIGITAL SHIELD & PADLOCK MESH */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/20 rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-blue-600/30 text-amber-400 font-extrabold text-xs tracking-wider uppercase border border-amber-400/40">
                🔒 Your Privacy, Our Priority
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Privacy <span className="text-[#F59E0B]">Policy</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                At Moonlight Coaching Centre, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
              </p>

              <div className="text-xs text-amber-400 font-bold">
                📅 Effective Date: May 24, 2024
              </div>
            </div>

            {/* Right Side 3D Digital Shield Graphic */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="bg-[#0F172A] p-8 rounded-3xl border-2 border-blue-500/40 shadow-2xl flex items-center gap-6 max-w-md w-full z-10">
                <div className="w-20 h-20 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/40">
                  <Lock className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-heading font-extrabold text-white">Data Protection Shield</h4>
                  <p className="text-xs text-slate-300">Industry Standard Encryption &amp; Security</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 KEY DATA PILLARS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          
          <div className="flex flex-col items-center gap-2 pt-2 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-white">Information We Collect</h4>
            <p className="text-[11px] text-slate-300">We collect personal information you provide to us.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-white">How We Use Information</h4>
            <p className="text-[11px] text-slate-300">We use your data to provide and improve services.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-white">Data Protection</h4>
            <p className="text-[11px] text-slate-300">We implement industry-standard security measures.</p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 sm:pt-0 sm:px-2">
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-extrabold text-white">Your Rights</h4>
            <p className="text-[11px] text-slate-300">You have control over your personal information.</p>
          </div>

        </div>
      </section>

      {/* 3. SPLIT SECTION: SIDEBAR NAVIGATION & ACCORDION ITEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0F172A] text-white rounded-3xl p-6 border border-slate-800 shadow-sm space-y-3">
              <h3 className="text-xs font-heading font-extrabold text-amber-400 uppercase tracking-widest px-2">
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
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Respect Privacy Card */}
            <div className="bg-blue-950/60 border border-blue-800/60 rounded-3xl p-6 space-y-2 text-white">
              <h4 className="text-xs font-heading font-extrabold text-blue-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>We Respect Your Privacy</span>
              </h4>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Your trust is important to us. We never sell your personal data.
              </p>
              <div className="pt-2">
                <span className="font-serif italic text-sm text-amber-400 font-bold block">Thank you!</span>
                <span className="text-[11px] font-bold text-slate-300 block">Moonlight Coaching Centre</span>
              </div>
            </div>
          </div>

          {/* Right Accordion Section */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            {privacyList.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all ${
                  activeSection === item.id
                    ? "border-blue-500 bg-blue-50/30"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActiveSection(activeSection === item.id ? 0 : item.id)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeSection === item.id ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {activeSection === item.id && (
                  <p className="text-xs text-slate-600 font-normal leading-relaxed pt-3 pl-10">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HAVE QUESTIONS ABOUT YOUR PRIVACY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-full bg-slate-800 text-amber-400 shrink-0 hidden sm:flex">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Have Questions About Your Privacy?
              </h3>
              <p className="text-xs text-slate-300 font-normal mt-1">
                We are here to help you understand how we protect your information.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs shadow-md transition-all"
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
