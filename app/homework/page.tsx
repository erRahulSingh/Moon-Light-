"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  File,
  ChevronRight,
  ArrowLeft,
  Moon,
  BookOpen,
  Award,
  MessageSquare
} from "lucide-react";

export default function StudentHomeworkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedHomework, setSelectedHomework] = useState<any | null>(null);
  const [attachedFile, setAttachedFile] = useState("");
  const [studentRemarks, setStudentRemarks] = useState("");
  const [submittedIds, setSubmittedIds] = useState<number[]>([4]);

  const homeworkData = [
    {
      id: 1,
      title: "Physics Chapter 4: Electrostatics PYQ Worksheet",
      subject: "Physics",
      teacher: "Mr. Anil Jha",
      dueDate: "Today, 5:00 PM",
      questionsCount: "15 Questions",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      instructions:
        "Solve all 15 PYQ problems in your homework notebook. Show complete step-by-step solutions with circuit/field diagrams. Upload as a single PDF file.",
    },
    {
      id: 2,
      title: "Calculus Definite Integrals Assignment 3.2",
      subject: "Mathematics",
      teacher: "Mr. Rahul Singh",
      dueDate: "Tomorrow, 10:00 AM",
      questionsCount: "10 Problems",
      badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/30",
      instructions:
        "Complete NCERT Exercise 3.2 problems #1 to #10. Pay special attention to integration by substitution and definite boundary properties.",
    },
    {
      id: 3,
      title: "Organic Chemistry Reactions Lab Report",
      subject: "Chemistry",
      teacher: "Mrs. Priya Kumari",
      dueDate: "Friday, 28th July",
      questionsCount: "Lab Report #3",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      instructions:
        "Write complete reaction observations and chemical equations for Aldehydes & Ketones tests in your practical report notebook.",
    },
    {
      id: 4,
      title: "Capacitance & Dielectrics Numericals Sheet",
      subject: "Physics",
      teacher: "Mr. Anil Jha",
      dueDate: "Yesterday",
      questionsCount: "20 Numericals",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      instructions:
        "Solve numerical problems on parallel plate capacitors with dielectric slab insertion.",
      marks: "18 / 20 (90%)",
      grade: "Grade A+",
      teacherRemarks:
        "Excellent work Rahul! Your steps in Q3 and Q7 are very clean and precise. Pay slight attention to sign conventions in Q12.",
    },
  ];

  const filteredData = homeworkData.filter(
    (item) => activeFilter === "All" || item.subject === activeFilter
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Nav */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 shadow-lg">
              <Moon className="w-6 h-6 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
              <BookOpen className="w-5 h-5 text-white absolute bottom-1" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-poppins font-black text-lg text-white tracking-tight">MOONLIGHT</span>
              <span className="font-poppins font-extrabold text-xs text-emerald-400 tracking-wide">STUDENT PORTAL</span>
            </div>
          </Link>

          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> Homework & Assignment Desk
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Student Homework & Task Evaluation
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              View assigned subject worksheets, upload PDF answer sheets, and review teacher remarks & marks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 z-10">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 text-center min-w-[100px]">
              <span className="block text-2xl font-black text-amber-400">3</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pending</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 text-center min-w-[100px]">
              <span className="block text-2xl font-black text-sky-400">1</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submitted</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 text-center min-w-[100px]">
              <span className="block text-2xl font-black text-emerald-400">90%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Score</span>
            </div>
          </div>
        </div>

        {/* Detail Modal View */}
        {selectedHomework ? (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedHomework(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Homework List
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border ${selectedHomework.badgeColor} mb-2`}>
                  {selectedHomework.subject}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {selectedHomework.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Faculty: <span className="text-white font-bold">{selectedHomework.teacher}</span> • Questions: <span className="text-amber-400 font-bold">{selectedHomework.questionsCount}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-xl">
                  ⏰ Due: {selectedHomework.dueDate}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Teacher Instructions & Problem Set
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedHomework.instructions}
              </p>
              <button
                onClick={() => alert("Downloading Question Paper PDF...")}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline pt-1"
              >
                <FileText className="w-4 h-4" /> Download Question Paper PDF (1.8 MB)
              </button>
            </div>

            {/* Graded Marks Box */}
            {selectedHomework.marks && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Evaluation Result & Marks
                  </span>
                  <span className="text-sm font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-xl">
                    {selectedHomework.marks}
                  </span>
                </div>
                <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> Teacher Remarks ({selectedHomework.teacher}):
                  </span>
                  <p className="text-xs text-slate-300 italic">
                    "{selectedHomework.teacherRemarks}"
                  </p>
                </div>
              </div>
            )}

            {/* Submission Upload Section */}
            {!selectedHomework.marks && (
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                  <UploadCloud className="w-4 h-4 text-amber-400" /> Upload Solution Answer Sheet
                </h3>

                <div
                  onClick={() => {
                    setAttachedFile(`homework_sol_${selectedHomework.id}_rahul.pdf`);
                    alert(`Selected: homework_sol_${selectedHomework.id}_rahul.pdf (2.4 MB)`);
                  }}
                  className="border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-2xl p-6 text-center cursor-pointer transition-colors space-y-2 bg-slate-900/50"
                >
                  <File className="w-8 h-8 text-amber-400 mx-auto" />
                  <p className="text-xs font-bold text-white">
                    {attachedFile ? attachedFile : "Click to select PDF or image answer sheet"}
                  </p>
                  <p className="text-[10px] text-slate-500">Supports PDF, JPG, PNG (Max 15 MB)</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Student Notes / Doubts for Teacher (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={studentRemarks}
                    onChange={(e) => setStudentRemarks(e.target.value)}
                    placeholder="Add notes for teacher regarding your step solutions..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  onClick={() => {
                    if (!submittedIds.includes(selectedHomework.id)) {
                      setSubmittedIds([...submittedIds, selectedHomework.id]);
                    }
                    alert("Your homework solution has been submitted successfully!");
                    setSelectedHomework(null);
                  }}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg uppercase tracking-wider transition-all"
                >
                  Submit Homework Solution Now ➔
                </button>
              </div>
            )}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {/* Subject Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {["All", "Physics", "Mathematics", "Chemistry", "Biology"].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveFilter(sub)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeFilter === sub
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* List Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredData.map((hw) => {
                const isSubbed = submittedIds.includes(hw.id);
                const isGraded = hw.marks ? true : false;

                return (
                  <div
                    key={hw.id}
                    onClick={() => setSelectedHomework(hw)}
                    className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-5 space-y-4 cursor-pointer transition-all hover:shadow-xl group"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${hw.badgeColor}`}>
                        {hw.subject}
                      </span>
                      <span
                        className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                          isGraded
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : isSubbed
                            ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {isGraded ? "Graded ✓" : isSubbed ? "Submitted 🔵" : "Pending 🟡"}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                        {hw.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Teacher: {hw.teacher} • {hw.questionsCount}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Due: {hw.dueDate}
                      </span>
                      <span className="text-amber-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View & Submit <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
