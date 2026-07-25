import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Monitor,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bookmark,
  FileText,
  Headphones,
  ShieldCheck,
  Search,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export const metadata = {
  title: `Central Library | ${INSTITUTE_INFO.name}`,
  description: `Explore. Learn. Excel at Moonlight Central Library in Parsauni, Sitamarhi. Over 12,000 books, digital learning resources, and quiet study zones.`,
};

export default function LibraryPage() {
  const libraryResources = [
    {
      title: "Academic Books",
      desc: "Extensive collection of NCERT, reference books and subject specific books.",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-50",
    },
    {
      title: "Competitive Exams",
      desc: "Books for JEE, NEET, BPSC, SSC, Banking, Railway and other competitive exams.",
      icon: <Bookmark className="w-6 h-6 text-teal-600" />,
      iconBg: "bg-teal-50",
    },
    {
      title: "Reference Materials",
      desc: "Dictionaries, encyclopedias, handbooks and quick reference guides.",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      iconBg: "bg-amber-50",
    },
    {
      title: "Magazines & Journals",
      desc: "Latest magazines, newspapers and journals to keep students informed.",
      icon: <FileText className="w-6 h-6 text-rose-600" />,
      iconBg: "bg-rose-50",
    },
    {
      title: "Digital Library",
      desc: "Access e-books, online journals and digital resources anytime, anywhere.",
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
    },
    {
      title: "Audio Visual Resources",
      desc: "Educational videos, lectures and audio materials for better understanding.",
      icon: <Headphones className="w-6 h-6 text-indigo-600" />,
      iconBg: "bg-indigo-50",
    },
  ];

  const environmentCards = [
    {
      title: "Spacious Reading Hall",
      desc: "Large and peaceful reading hall with ample seating.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Individual Study Zone",
      desc: "Quiet zones for focused and independent study.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Group Discussion Area",
      desc: "Collaborative spaces for group study and discussions.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Digital Access",
      desc: "Computers with internet access for online learning.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & FEMALE STUDENT IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase">
                OUR LIBRARY
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Explore. Learn. <span className="text-[#F59E0B]">Excel.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Our well-equipped library is a hub of knowledge with thousands of books, reference materials, and digital resources to support every learner.
              </p>

              {/* 4 Feature Badges Pill Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Wide Range of Books</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Updated Study Materials</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Digital Learning Resources</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Peaceful Study Environment</span>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Student Reading */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=900"
                  alt="Student Reading in Library"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 STAT COLUMNS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">12,000+</span>
            <span className="text-xs font-bold text-[#0B192C]">Books in Collection</span>
            <span className="text-[10px] text-slate-500">Across all subjects</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">500+</span>
            <span className="text-xs font-bold text-[#0B192C]">Students Daily</span>
            <span className="text-[10px] text-slate-500">Use our library</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">50+</span>
            <span className="text-xs font-bold text-[#0B192C]">Magazines &amp; Journals</span>
            <span className="text-[10px] text-slate-500">Educational &amp; Competitive</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Monitor className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">30+</span>
            <span className="text-xs font-bold text-[#0B192C]">Digital Resources</span>
            <span className="text-[10px] text-slate-500">E-Books &amp; Online Access</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">200+</span>
            <span className="text-xs font-bold text-[#0B192C]">Study Seats</span>
            <span className="text-[10px] text-slate-500">Spacious &amp; Comfortable</span>
          </div>

        </div>
      </section>

      {/* 3. MAIN RESOURCES GRID & SIDEBAR SPLIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Resource Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
                Our <span className="text-blue-600">Library</span> Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {libraryResources.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between items-center text-center space-y-4 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-heading font-extrabold text-[#0B192C]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* A Conducive Environment for Better Learning Grid */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B192C]">
                A Conducive Environment for Better Learning
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {environmentCards.map((env, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-2 text-center pb-3">
                    <div className="relative h-28 w-full bg-slate-100">
                      <Image
                        src={env.image}
                        alt={env.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="px-2">
                      <h4 className="text-xs font-heading font-bold text-[#0B192C]">{env.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{env.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Sidebar: Timings & Rules & Ask Librarian */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Library Timings Box */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 space-y-3 shadow-md">
              <h3 className="text-base font-heading font-extrabold text-white flex items-center gap-2 border-b border-slate-700/80 pb-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Library Timings</span>
              </h3>
              <div className="space-y-2 text-xs font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-300">Monday - Saturday:</span>
                  <span className="font-bold text-white">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Sunday:</span>
                  <span className="font-bold text-white">8:00 AM - 2:00 PM</span>
                </div>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl text-[10px] text-slate-400 font-medium leading-relaxed">
                The library remains open during all working days for students.
              </div>
            </div>

            {/* Library Rules Box */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 space-y-3 shadow-md">
              <h3 className="text-base font-heading font-extrabold text-white flex items-center gap-2 border-b border-slate-700/80 pb-3">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Library Rules</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Maintain silence in the library.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Keep your mobile phones on silent.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Handle books with care.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Do not write or mark in books.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Return books on time.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Keep the library clean and tidy.</span>
                </li>
              </ul>
            </div>

            {/* Find the Right Book Box */}
            <div className="bg-amber-50/90 border border-amber-200 rounded-3xl p-6 space-y-3 text-slate-950 shadow-sm">
              <h4 className="text-sm font-heading font-extrabold text-[#0B192C]">
                Find the Right Book for Your Success
              </h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed">
                Our library has the perfect resources to help you achieve your academic goals.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-slate-800 text-white font-extrabold py-3 px-4 rounded-xl text-xs shadow-md transition-all"
                >
                  <span>Ask Librarian</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. KNOWLEDGE IS POWER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-white">
              Knowledge is Power. <span className="text-[#F59E0B]">Library is the Key!</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Make the most of our library and unlock your true potential.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Visit Our Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
