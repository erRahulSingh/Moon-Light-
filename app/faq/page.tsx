"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Phone,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All FAQs");
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const categories = [
    "All FAQs",
    "Admissions & Fees",
    "Courses & Academics",
    "Library & Facilities",
    "Exams & Results",
  ];

  const faqs = [
    {
      id: 1,
      category: "Admissions & Fees",
      question: "What is the admission procedure for Session 2025-26?",
      answer:
        "Admissions can be taken either by visiting our Parsauni campus or filling out the online Admission Enquiry form on our website. After form submission, our academic counselor will contact you for a brief interaction and document verification.",
    },
    {
      id: 2,
      category: "Admissions & Fees",
      question: "Is there any scholarship or fee waiver test for new students?",
      answer:
        "Yes! Moonlight Coaching Centre conducts periodic Merit Scholarship Tests. High-scoring students can receive up to 50% waiver on tuition fees for board exam preparation and competitive courses.",
    },
    {
      id: 3,
      category: "Courses & Academics",
      question: "Which classes and streams are taught at Moonlight Coaching Centre?",
      answer:
        "We offer specialized coaching for Class 6 to 10 (All Subjects), Class 11 & 12 (Science, Commerce, and Arts streams), as well as competitive examination preparation for JEE Main/Advanced, NEET, BPSC, and SSC.",
    },
    {
      id: 4,
      category: "Courses & Academics",
      question: "What is the average batch size for classes?",
      answer:
        "We maintain small batch sizes of 25 to 35 students per class to ensure every student receives individual attention, doubt resolution, and personalized feedback from faculty members.",
    },
    {
      id: 5,
      category: "Library & Facilities",
      question: "What are the Central Library hours and rules?",
      answer:
        "The Moonlight Central Library is open Monday through Saturday from 6:00 AM to 8:00 PM, and Sundays from 8:00 AM to 2:00 PM. It features over 12,000 reference books, daily newspapers, and quiet study zones.",
    },
    {
      id: 6,
      category: "Library & Facilities",
      question: "Are there separate reading rooms and seating for boys and girls?",
      answer:
        "Yes, we have strictly designated, disciplined, and separate reading zones for Boys and Girls in our reading hall to ensure a comfortable and focused study environment.",
    },
    {
      id: 7,
      category: "Exams & Results",
      question: "How frequent are unit tests and mock examinations?",
      answer:
        "We conduct Weekly Progress Tests every Sunday and Full-Length Mock Exams at the end of each topic module. Report cards and performance analytics are shared directly with parents via SMS and parent meetings.",
    },
    {
      id: 8,
      category: "Exams & Results",
      question: "Do you offer specialized test series for Board and Competitive Exams?",
      answer:
        "Yes, we provide specialized Board Booster Test Series for Class 10 & 12 board aspirants, as well as full-length test series with detailed solutions for JEE, NEET, and BPSC candidates.",
    },
    {
      id: 9,
      category: "Admissions & Fees",
      question: "Can a student take a free demo class before enrolling?",
      answer:
        "Absolutely! Prospective students are welcome to attend up to 2 Free Demo Classes in any ongoing batch to experience our teaching methodology and faculty interaction before confirming admission.",
    },
    {
      id: 10,
      category: "Library & Facilities",
      question: "Is hostel facility available for outstation students?",
      answer:
        "Yes, limited hostel seats are available near our Parsauni campus with nutritious food, 24/7 security, and supervised evening study hours.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All FAQs" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED ACCENT & EMBLEM GRAPHIC */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Link href="/" className="hover:underline">Home</Link>
                <span>•</span>
                <span className="text-white">Frequently Asked Questions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Frequently Asked <span className="text-[#F59E0B]">Questions</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Find answers to common questions about admissions, courses, library, hostel, fees, and examination preparation at Moonlight Coaching Centre.
              </p>

              {/* 4 Feature Badges Pill Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Support Desk</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Instant Answers</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Academic Guidance</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Transparent Info</span>
                </div>
              </div>

            </div>

            {/* Right Side 3D FAQ Emblem Graphic */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="bg-[#0F172A] p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl flex items-center gap-6 max-w-md w-full z-10">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-amber-400/40">
                  <HelpCircle className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-heading font-extrabold text-white">Have a Question?</h4>
                  <p className="text-xs text-slate-300">Browse our categorized answers or contact our counseling desk.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER PILLS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all ${
                selectedCategory === cat
                  ? "bg-[#0B192C] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SPLIT SECTION: SIDEBAR SEARCH & FAQS ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Search Input Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-heading font-extrabold text-[#0B192C] uppercase tracking-widest">
                Search Questions
              </h3>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0B192C]"
                />
              </div>
            </div>

            {/* Need Personal Help Card */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 space-y-4 shadow-md border border-slate-800">
              <div className="p-3 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 w-fit">
                <Phone className="w-6 h-6 fill-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-heading font-extrabold text-white">Need Personal Help?</h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Our academic counselors are available to answer your questions personally.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {INSTITUTE_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column FAQs Accordion */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <span className="text-3xl">🔍</span>
                <h4 className="text-base font-heading font-extrabold text-slate-800">No FAQs Found</h4>
                <p className="text-xs text-slate-500">Try adjusting your search query or category filter.</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    openFaq === faq.id
                      ? "border-amber-400 bg-amber-50/20 shadow-sm"
                      : "border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#0B192C] text-amber-400 text-xs font-extrabold flex items-center justify-center shrink-0">
                        Q
                      </span>
                      <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaq === faq.id ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>

                  {openFaq === faq.id && (
                    <div className="pt-3 pl-10 space-y-2">
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                      <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* 4. STILL HAVE QUESTIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-white">
              Still Have Questions? <span className="text-[#F59E0B]">We Are Here to Help!</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly support team.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>Fill Enquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
