"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, User, Phone, Mail, GraduationCap, MapPin, AlertCircle } from "lucide-react";
import { submitAdmissionForm } from "@/app/actions";

const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  phone: z.string().min(10, "Please enter a valid 10-digit mobile number").max(10),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  targetClass: z.string().min(1, "Please select target class"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  message: z.string().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await submitAdmissionForm(data);
      if (res.success) {
        setSubmitted(true);
        reset();
      } else {
        setErrorMsg(res.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please call 9953016615 directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-poppins font-black text-emerald-900">
          Admission Enquiry Submitted!
        </h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto font-medium">
          Thank you for choosing Moonlight Coaching Centre. Our admission team will contact you within 24 hours to guide you through the process.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-[#0F172A] text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-slate-800 transition-all"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-poppins font-black text-[#0F172A]">
          Online Admission Registration Form
        </h3>
        <p className="text-slate-500 text-xs font-medium mt-1">
          Fill out the details below to reserve a seat for the 2025-26 academic session.
        </p>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 text-red-800 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Student & Parent Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Student Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("studentName")}
              type="text"
              placeholder="e.g. Rahul Kumar"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.studentName && (
            <span className="text-xs text-red-500 font-semibold">{errors.studentName.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Father&apos;s / Parent&apos;s Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("parentName")}
              type="text"
              placeholder="e.g. Suresh Kumar"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.parentName && (
            <span className="text-xs text-red-500 font-semibold">{errors.parentName.message}</span>
          )}
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Mobile Number (WhatsApp) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="9953016615"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.phone && (
            <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("email")}
              type="email"
              placeholder="student@gmail.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Target Class Select */}
      <div className="space-y-1">
        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
          Target Class / Course *
        </label>
        <div className="relative">
          <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <select
            {...register("targetClass")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none bg-white"
          >
            <option value="">Select Target Class</option>
            <option value="Nursery to Class 5">Nursery to Class 5</option>
            <option value="Class 6th to 8th">Class 6th to 8th</option>
            <option value="Class 9th">Class 9th</option>
            <option value="Class 10th (Board)">Class 10th (Board)</option>
            <option value="Class 11th Science/Commerce">Class 11th Science/Commerce</option>
            <option value="Class 12th Science/Commerce">Class 12th Science/Commerce</option>
            <option value="Competitive Exam (JEE/NEET/BPSC)">Competitive Exam (JEE/NEET/BPSC)</option>
          </select>
        </div>
        {errors.targetClass && (
          <span className="text-xs text-red-500 font-semibold">{errors.targetClass.message}</span>
        )}
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
          Village / Address *
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            {...register("address")}
            type="text"
            placeholder="e.g. Parsauni, Sitamarhi"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
          />
        </div>
        {errors.address && (
          <span className="text-xs text-red-500 font-semibold">{errors.address.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-amber-400 font-black py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm disabled:opacity-50"
        >
          {loading ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <>
              <span>Submit Admission Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
