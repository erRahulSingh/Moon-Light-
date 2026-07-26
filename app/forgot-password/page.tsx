"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, ArrowRight, ArrowLeft, Moon, BookOpen } from "lucide-react";

export default function ForgotPasswordPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) {
      alert("Please enter your registered email or phone number.");
      return;
    }
    window.location.href = `/reset-password?input=${encodeURIComponent(emailOrPhone)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center z-10">
        <Link href="/" className="inline-flex items-center gap-3 group mb-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 shadow-lg">
            <Moon className="w-7 h-7 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
            <BookOpen className="w-6 h-6 text-white absolute bottom-1.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-poppins font-black text-xl text-white tracking-tight">MOONLIGHT</span>
            <span className="font-poppins font-extrabold text-sm text-emerald-400 tracking-wide">COACHING CENTRE</span>
          </div>
        </Link>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4">
        <div className="bg-slate-900/90 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-3xl border border-slate-800 sm:px-10 text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center mx-auto mb-4">
            <KeyRound className="w-8 h-8 text-amber-400" />
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            Forgot Password?
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Enter your registered email address or mobile phone to receive password reset instructions.
          </p>

          <form className="mt-6 space-y-5 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Registered Email or Mobile *
              </label>
              <div className="relative rounded-2xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="e.g. rahulkumar@gmail.com or 7870391245"
                  className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-amber-400/20 transition-all uppercase tracking-wider"
            >
              <span>Send Reset OTP Code</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6">
            <Link href="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
