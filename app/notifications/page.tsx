"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bell,
  CheckCheck,
  Video,
  Trophy,
  FileText,
  CreditCard,
  GraduationCap,
  Megaphone,
  ArrowLeft,
  Moon,
  BookOpen,
  Filter,
  Trash2
} from "lucide-react";

export default function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [readIds, setReadIds] = useState<number[]>([]);

  const notifications = [
    {
      id: 1,
      category: "Live Classes",
      title: "⚡ Physics Live Lecture Starting in 15 Mins!",
      desc: "Chapter 4: Electrostatics & Potential by Mr. Anil Jha in Main Hall. Join interactive live stream now.",
      time: "15 Mins ago",
      icon: Video,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      actionText: "Join Stream ➔",
      actionUrl: "/courses",
    },
    {
      id: 2,
      category: "Test Result",
      title: "🏆 MSAT Mock Test #4 Scorecard Published!",
      desc: "Congratulations Rahul! You scored 92% (Rank #4 in Bihar State). Subjectwise percentile analysis ready.",
      time: "1 Hour ago",
      icon: Trophy,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      actionText: "View Scorecard ➔",
      actionUrl: "/profile",
    },
    {
      id: 3,
      category: "Homework",
      title: "📝 New Homework Assigned: Physics PYQ Worksheet",
      desc: "Solve all 15 numerical problems in your notebook and submit PDF solution by 5:00 PM today.",
      time: "3 Hours ago",
      icon: FileText,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      actionText: "Submit Work ➔",
      actionUrl: "/homework",
    },
    {
      id: 4,
      category: "Fees",
      title: "💳 Fee Payment Success: July 2026 Installment",
      desc: "Payment of ₹3,500 received with thanks. Digital receipt #MNL-2026-781 is available for download.",
      time: "Yesterday",
      icon: CreditCard,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      actionText: "Download Receipt ➔",
      actionUrl: "/profile",
    },
    {
      id: 5,
      category: "Admission",
      title: "🎓 Admissions Open for Target NEET/JEE Dropper Batches!",
      desc: "Early Bird Scholarship Waiver of flat 40% available for top rankers till 31st July.",
      time: "2 Days ago",
      icon: GraduationCap,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      actionText: "Reserve Seat ➔",
      actionUrl: "/admissions",
    },
    {
      id: 6,
      category: "Announcements",
      title: "📢 Independence Day Flag Hoisting & Scholarship Drive",
      desc: "Special campus event on 15th August at 9:00 AM followed by State Merit Scholarship Award ceremony.",
      time: "3 Days ago",
      icon: Megaphone,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/30",
      actionText: "Read Circular ➔",
      actionUrl: "/about",
    },
  ];

  const categories = [
    { label: "All", icon: Bell },
    { label: "Live Classes", icon: Video },
    { label: "Test Result", icon: Trophy },
    { label: "Homework", icon: FileText },
    { label: "Fees", icon: CreditCard },
    { label: "Admission", icon: GraduationCap },
    { label: "Announcements", icon: Megaphone },
  ];

  const filteredNotifications = notifications.filter(
    (n) => activeCategory === "All" || n.category === activeCategory
  );

  const markAllAsRead = () => {
    setReadIds(notifications.map((n) => n.id));
  };

  const toggleRead = (id: number) => {
    if (!readIds.includes(id)) {
      setReadIds([...readIds, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 shadow-lg">
              <Moon className="w-6 h-6 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
              <BookOpen className="w-5 h-5 text-white absolute bottom-1" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-poppins font-black text-lg text-white tracking-tight">MOONLIGHT</span>
              <span className="font-poppins font-extrabold text-xs text-amber-400 tracking-wide">NOTIFICATION CENTER</span>
            </div>
          </Link>

          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        {/* Hero Header Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5" /> Official Alerts & Updates
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Notification Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Stay up-to-date with live class schedules, test scorecard declarations, assigned homework, fee receipts, and campus announcements.
            </p>
          </div>

          <div className="flex items-center gap-3 z-10">
            <button
              onClick={markAllAsRead}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors shadow-lg shadow-amber-400/20"
            >
              <CheckCheck className="w-4 h-4" /> Mark All as Read
            </button>
          </div>
        </div>

        {/* Categories Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.label;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.label)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20 scale-105"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            const isRead = readIds.includes(notif.id);

            return (
              <div
                key={notif.id}
                onClick={() => toggleRead(notif.id)}
                className={`p-5 rounded-3xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                  isRead
                    ? "bg-slate-900/40 border-slate-800/60 opacity-75"
                    : "bg-slate-900/90 border-amber-400/40 shadow-xl shadow-amber-400/5 hover:border-amber-400"
                }`}
              >
                {!isRead && (
                  <span className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-rose-500/20" />
                )}

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${notif.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                        {notif.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">{notif.time}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-white">{notif.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">{notif.desc}</p>
                  </div>
                </div>

                <Link
                  href={notif.actionUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-amber-400 font-black text-xs transition-colors shrink-0 self-end sm:self-center"
                >
                  {notif.actionText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
