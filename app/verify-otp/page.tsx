"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, RefreshCw, Moon, BookOpen } from "lucide-react";

export default function VerifyOtpPage() {
  const [digits, setDigits] = useState(["5", "8", "2", "9"]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: any = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mobile number verified successfully! Welcome to Moonlight Coaching Centre.");
    window.location.href = "/";
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
            <ShieldCheck className="w-8 h-8 text-amber-400" />
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            Verify Mobile OTP
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Enter the 4-digit code sent to <span className="text-amber-400 font-bold">+91 7870391245</span>
          </p>

          <form className="mt-6 space-y-6" onSubmit={handleVerify}>
            <div className="flex justify-center gap-3">
              {digits.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newDigits = [...digits];
                    newDigits[idx] = e.target.value;
                    setDigits(newDigits);
                  }}
                  className="w-12 h-14 bg-slate-950 border-2 border-amber-400/80 rounded-2xl text-center text-xl font-black text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>Resend OTP Code in:</span>
              <span className="font-bold text-amber-400">
                {timer > 0 ? `00:${timer < 10 ? "0" : ""}${timer}s` : "Available"}
              </span>
              {timer === 0 && (
                <button
                  type="button"
                  onClick={() => setTimer(30)}
                  className="ml-2 font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Resend Code
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-amber-400/20 transition-all uppercase tracking-wider"
            >
              <span>Verify OTP & Complete Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-500">
            Wrong mobile number?{" "}
            <Link href="/register" className="font-bold text-slate-400 hover:underline">
              Change Number
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
