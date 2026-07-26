"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Moon,
  BookOpen,
  TrendingUp,
  BarChart2,
  Award
} from "lucide-react";

export default function AttendancePage() {
  const [currentMonth, setCurrentMonth] = useState("July 2026");

  // 31 Days Data Grid
  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    let status = "present";
    if (day === 14) status = "absent";
    else if (day === 21) status = "leave";
    else if (day === 5 || day === 12 || day === 19 || day === 26) status = "sunday";
    return { day, status };
  });

  const subjectAttendance = [
    { name: "Physics (Theory & Numericals)", attended: 24, total: 25, percentage: 96, badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
    { name: "Mathematics (Calculus & Algebra)", attended: 23, total: 25, percentage: 92, badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/30" },
    { name: "Chemistry (Organic & Physical)", attended: 24, total: 26, percentage: 94, badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
    { name: "English & Aptitude Test", attended: 10, total: 10, percentage: 100, badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30" },
  ];

  const attendanceLog = [
    { date: "25 Jul 2026", day: "Saturday", status: "Present", note: "All 3 classes attended (Physics, Maths, Chem)", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { date: "24 Jul 2026", day: "Friday", status: "Present", note: "All 3 classes attended", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { date: "21 Jul 2026", day: "Tuesday", status: "Leave", note: "Approved Medical Leave (Parent Intimation)", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    { date: "14 Jul 2026", day: "Tuesday", status: "Absent", note: "Uninformed Absence (SMS Alert Sent to Parent)", badge: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
    { date: "12 Jul 2026", day: "Sunday", status: "Holiday", note: "Weekly Sunday Campus Holiday", badge: "bg-slate-800 text-slate-400 border-slate-700" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 shadow-lg">
              <Moon className="w-6 h-6 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
              <BookOpen className="w-5 h-5 text-white absolute bottom-1" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-poppins font-black text-lg text-white tracking-tight">MOONLIGHT</span>
              <span className="font-poppins font-extrabold text-xs text-emerald-400 tracking-wide">ATTENDANCE PORTAL</span>
            </div>
          </Link>

          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        {/* Hero Section Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <CalendarIcon className="w-3.5 h-3.5" /> Student Attendance Tracker
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Monthly Attendance & Regularity Log
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Track daily class attendance, subjectwise percentages, leave logs, and monthly calendar status.
            </p>
          </div>

          <div className="bg-slate-950/90 border border-amber-400/40 rounded-2xl p-5 flex items-center gap-6 z-10 min-w-[240px]">
            <div>
              <span className="block text-3xl font-black text-white">94%</span>
              <span className="text-xs font-bold text-amber-400">Overall Attendance</span>
              <span className="block text-[10px] text-slate-400 mt-0.5">Status: Excellent 🟢</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-black text-sm">
              47/50
            </div>
          </div>
        </div>

        {/* Stat Badges Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold">Present (P)</span>
              <span className="block text-2xl font-black text-emerald-400 mt-1">47 Days</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold">Absent (A)</span>
              <span className="block text-2xl font-black text-rose-400 mt-1">2 Days</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <XCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold">Leave (L)</span>
              <span className="block text-2xl font-black text-amber-400 mt-1">1 Day</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold">Total Classes</span>
              <span className="block text-2xl font-black text-sky-400 mt-1">50 Days</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
              <BarChart2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 🗓️ Monthly Calendar Grid */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <button onClick={() => alert("Showing July 2026 Attendance")} className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-amber-400" /> {currentMonth} Calendar View
            </h2>
            <button onClick={() => alert("Showing July 2026 Attendance")} className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Days Grid Header */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-black text-slate-400 pb-2 border-b border-slate-800/60">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((item) => {
              let bg = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
              let label = "P";
              if (item.status === "absent") {
                bg = "bg-rose-500/10 border-rose-500/30 text-rose-400";
                label = "A";
              } else if (item.status === "leave") {
                bg = "bg-amber-500/10 border-amber-500/30 text-amber-400";
                label = "L";
              } else if (item.status === "sunday") {
                bg = "bg-slate-950 border-slate-800 text-slate-500";
                label = "Sun";
              }

              return (
                <div
                  key={item.day}
                  onClick={() => alert(`Date: ${item.day} July 2026 - Status: ${item.status.toUpperCase()}`)}
                  className={`border rounded-2xl p-3 text-center cursor-pointer transition-all hover:scale-105 flex flex-col items-center justify-center gap-1 ${bg}`}
                >
                  <span className="text-sm font-black">{item.day}</span>
                  <span className="text-[10px] font-extrabold uppercase">{label}</span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-800 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Present (47 Days)
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Absent (2 Days)
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Leave (1 Day)
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> Sunday Holiday
            </span>
          </div>
        </div>

        {/* 📚 Subject-Wise Attendance Breakdown */}
        <div className="space-y-4">
          <h2 className="text-lg font-black text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" /> Subject-Wise Attendance Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjectAttendance.map((sub, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-white">{sub.name}</h3>
                  <span className="text-sm font-black text-amber-400">{sub.percentage}%</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Attended: {sub.attended} / {sub.total} Classes</span>
                  <span className="text-emerald-400 font-bold">Regular ✓</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${sub.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🕒 Attendance Log Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <h2 className="text-lg font-black text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" /> Recent Attendance History
          </h2>

          <div className="space-y-3">
            {attendanceLog.map((log, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-white block">{log.date} ({log.day})</span>
                  <span className="text-xs text-slate-400 mt-0.5 block">{log.note}</span>
                </div>
                <span className={`px-3 py-1 rounded-xl text-xs font-black uppercase border ${log.badge}`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
