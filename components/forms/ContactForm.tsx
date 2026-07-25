"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, User, Phone, Mail, MessageSquare, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid 10-digit mobile number").max(10),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSubmitted(true);
        reset();
      } else {
        setErrorMsg(res.error || "Failed to send message. Please try again.");
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
          Message Sent Successfully!
        </h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto font-medium">
          Thank you for contacting Moonlight Coaching Centre. We have received your query and will reply promptly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-[#0F172A] text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-slate-800 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-poppins font-black text-[#0F172A]">
          Send Us a Message
        </h3>
        <p className="text-slate-500 text-xs font-medium mt-1">
          Have questions about our batches, library timings or fees? Drop us a note!
        </p>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 text-red-800 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Your Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("fullName")}
              type="text"
              placeholder="e.g. Anjali Kumari"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.fullName && (
            <span className="text-xs text-red-500 font-semibold">{errors.fullName.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Mobile Number *
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
      </div>

      {/* Email & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              {...register("email")}
              type="email"
              placeholder="info@moonlightcoaching.in"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
            Subject *
          </label>
          <input
            {...register("subject")}
            type="text"
            placeholder="e.g. Enquiry for Class 10 Batch"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
          />
          {errors.subject && (
            <span className="text-xs text-red-500 font-semibold">{errors.subject.message}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
          Your Message *
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Please write your questions here..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
          />
        </div>
        {errors.message && (
          <span className="text-xs text-red-500 font-semibold">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#066E38] hover:bg-emerald-800 text-white font-black py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm disabled:opacity-50"
        >
          {loading ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Message Now</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
