"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Phone, Eye, EyeOff, ArrowRight, ShieldCheck, Moon, BookOpen } from "lucide-react";

export default function LoginPage() {
  const [loginMode, setLoginMode] = useState<"password" | "otp">("password");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMode === "otp") {
      window.location.href = `/verify-otp?phone=${encodeURIComponent(emailOrPhone || "7870391245")}`;
    } else {
      alert("Sign in successful! Welcome to Moonlight Coaching Centre.");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center z-10">
        <Link href="/" className="inline-flex items-center gap-3 group mb-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 shadow-lg group-hover:scale-105 transition-transform">
            <Moon className="w-7 h-7 absolute -top-1 -right-0.5 text-amber-400 fill-amber-400 transform -rotate-12" />
            <BookOpen className="w-6 h-6 text-white absolute bottom-1.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-poppins font-black text-xl text-white tracking-tight">MOONLIGHT</span>
            <span className="font-poppins font-extrabold text-sm text-emerald-400 tracking-wide">COACHING CENTRE</span>
          </div>
        </Link>

        <h2 className="text-2xl font-black text-white tracking-tight sm:text-3xl">
          Welcome Back, Student!
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Sign in to access your courses, test series, and study progress
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4">
        <div className="bg-slate-900/90 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-3xl border border-slate-800 sm:px-10">
          
          {/* Mode Switcher */}
          <div className="flex bg-slate-950 p-1 rounded-2xl mb-6 border border-slate-800">
            <button
              onClick={() => setLoginMode("password")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                loginMode === "password"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🔑 Password Login
            </button>
            <button
              onClick={() => setLoginMode("otp")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                loginMode === "otp"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📱 Mobile OTP Login
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address or Mobile Number *
              </label>
              <div className="relative rounded-2xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  {loginMode === "otp" ? <Phone className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                </div>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder={loginMode === "otp" ? "e.g. 7870391245" : "e.g. rahulkumar@gmail.com"}
                  className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>
            </div>

            {loginMode === "password" && (
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Account Password *
                </label>
                <div className="relative rounded-2xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            {loginMode === "password" && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-800 text-amber-400 focus:ring-amber-400"
                  />
                  <span>Remember Me</span>
                </label>
                <Link href="/forgot-password" className="font-bold text-amber-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-amber-400/20 transition-all uppercase tracking-wider"
            >
              <span>{loginMode === "otp" ? "Send Verification OTP" : "Sign In to Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Login Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-3 text-slate-500 font-bold">Or Continue With</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => { alert("Google Sign-In successful!"); window.location.href = "/"; }}
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 transition-colors"
              >
                <span>🌐 Google</span>
              </button>
              <Link
                href="/verify-otp?phone=7870391245"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 transition-colors"
              >
                <span>📱 Quick OTP</span>
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-black text-amber-400 hover:underline">
              Sign Up / Register ➔
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
