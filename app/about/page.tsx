import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  UserCheck,
  BookOpen,
  Trophy,
  Smile,
  Eye,
  Rocket,
  Flag,
  Users,
  TrendingUp,
  User,
  ShieldCheck,
  Target,
  ArrowRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { INSTITUTE_INFO } from "@/data/coachingData";

export const metadata = {
  title: `About Us | ${INSTITUTE_INFO.name}`,
  description: `About Moonlight Coaching Centre in Parsauni, Sitamarhi. Director: Mrs. Anil Jha. Quality education for Nursery to 12th & Competitive Exams.`,
};

export default function AboutPage() {
  const journeyTimeline = [
    {
      year: "2015",
      title: "Founding Year",
      icon: <Flag className="w-5 h-5 text-amber-500" />,
      desc: "Moonlight Coaching Centre was founded with a vision to provide quality education.",
    },
    {
      year: "2016-17",
      title: "Faculty Expansion",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      desc: "Expanded our faculty team and introduced new courses for better learning.",
    },
    {
      year: "2018-19",
      title: "Modern Facilities",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      desc: "Established a well-equipped library and modern classrooms for students.",
    },
    {
      year: "2020-21",
      title: "Excellence Milestone",
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      desc: "Achieved excellent results with 95%+ success rate in board examinations.",
    },
    {
      year: "2022-23",
      title: "Competitive Success",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      desc: "Hundreds of students qualified in competitive exams and achieved their dreams.",
    },
    {
      year: "2024 & Beyond",
      title: "Brighter Future",
      icon: <Rocket className="w-5 h-5 text-indigo-500" />,
      desc: "Continuing our journey towards excellence and building a brighter future for all.",
    },
  ];

  const lifeAtCoaching = [
    { title: "Classroom", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400" },
    { title: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400" },
    { title: "Physics Lab", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" },
    { title: "Computer Lab", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" },
    { title: "Events & Activities", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" },
    { title: "Extra Curricular", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. HERO BANNER WITH CURVED YELLOW ACCENT & BUILDING IMAGE */}
      <section className="relative bg-[#0B192C] text-white pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F59E0B] rounded-bl-[140px] opacity-90 hidden lg:block -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Link href="/" className="hover:underline">Home</Link>
                <span>&gt;</span>
                <span className="text-white">About Us</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-none">
                ABOUT <span className="text-[#F59E0B]">US</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Moonlight Coaching Centre is dedicated to providing quality education and shaping the future of students.
              </p>

              {/* 4 Feature Badges Pill Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Quality Education</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Experienced Faculty</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Student Focused</span>
                </div>

                <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl p-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-[#F59E0B] shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">Better Results</span>
                </div>
              </div>

            </div>

            {/* Right Side Photo of Coaching Building */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 w-full max-w-lg aspect-[4/3] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=900"
                  alt="Moonlight Coaching Centre Building"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SPLIT SECTION: DIRECTOR'S DESK & VISION / MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Card: From the Director's Desk */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
            <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500"
                alt="Mrs. Anil Jha Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-heading font-extrabold text-[#0B192C]">
                From the Director&apos;s Desk
              </h3>
              <div className="text-amber-500 font-serif text-3xl leading-none">““</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                At Moonlight Coaching Centre, we believe every student is unique and has the potential to achieve excellence. Our mission is to provide the right guidance, quality education and a supportive environment to help students reach their goals and build a successful future.
              </p>
              <div className="pt-2">
                <span className="font-serif italic text-lg text-[#0B192C] font-bold block">
                  Mrs. Anil Jha
                </span>
                <span className="text-[11px] font-bold text-slate-500 block">
                  Director / Moonlight Coaching Centre
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: Our Vision & Our Mission Split */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Our Vision */}
            <div className="space-y-3 pt-2 sm:pt-0 sm:pr-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-base font-heading font-extrabold text-[#0B192C]">Our Vision</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be a leading educational institute that empowers students with knowledge, confidence and skills to excel in all spheres of life.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-3 pt-6 sm:pt-0 sm:pl-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto shadow-sm">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-base font-heading font-extrabold text-[#0B192C]">Our Mission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To provide quality education with concept based learning, experienced faculty, regular practice and continuous progress monitoring.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            <div className="flex flex-col items-center gap-1.5 pt-2 sm:pt-0">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-heading font-extrabold text-white">500+</span>
              <span className="text-xs text-slate-300 font-medium">Successful Students</span>
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

      {/* 4. OUR JOURNEY (TIMELINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
            Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {journeyTimeline.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <span className="text-base font-heading font-extrabold text-[#0B192C]">{item.year}</span>
              <p className="text-[11px] text-slate-600 leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE MOONLIGHT COACHING CENTRE? GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
            Why Choose <span className="text-blue-600">Moonlight Coaching Centre?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Expert Faculty</h4>
            <p className="text-[11px] text-slate-600">Highly qualified and experienced faculty dedicated to student success.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Concept Based Learning</h4>
            <p className="text-[11px] text-slate-600">Focus on building strong concepts for better understanding.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Regular Tests</h4>
            <p className="text-[11px] text-slate-600">Weekly tests and performance analysis to track progress.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Personal Attention</h4>
            <p className="text-[11px] text-slate-600">Small batch sizes to ensure individual attention for every student.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Well Equipped Library</h4>
            <p className="text-[11px] text-slate-600">Access to thousands of books and digital resources.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-heading font-bold text-[#0B192C]">Result Oriented Approach</h4>
            <p className="text-[11px] text-slate-600">Proven strategies and consistent efforts for excellent results.</p>
          </div>
        </div>
      </section>

      {/* 6. LIFE AT MOONLIGHT COACHING CENTRE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B192C]">
            Life at <span className="text-blue-600">Moonlight Coaching Centre</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {lifeAtCoaching.map((item, idx) => (
            <div key={idx} className="space-y-2 text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-bold text-[#0B192C]">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. GIVE YOUR CHILD THE BEST EDUCATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-full bg-slate-800 text-amber-400 shrink-0 hidden sm:flex">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Give Your Child the <span className="text-[#F59E0B]">Best Education</span>
              </h3>
              <p className="text-xs text-slate-300 font-normal">
                Admissions Open for {INSTITUTE_INFO.admissionSession}, Limited Seats! Enroll Today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 font-extrabold px-5 py-2.5 rounded-full text-xs shadow-md transition-all"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-bold px-5 py-2.5 rounded-full text-xs transition-all"
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
