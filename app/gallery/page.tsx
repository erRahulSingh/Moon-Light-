"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INSTITUTE_INFO } from "@/data/coachingData";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryItems = [
    {
      id: 1,
      title: "Modern Classroom Session",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Central Library & Reading Hall",
      category: "Library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Group Study & Doubt Clearance",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Annual Student Award Function",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Parsauni Campus Front View",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Board Exam Practice Test Session",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const categories = ["All", "Campus", "Classrooms", "Library", "Events"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-[#0F172A] text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-md bg-[#F59E0B] text-slate-950 font-extrabold text-xs tracking-wider uppercase">
            CAMPUS PHOTO GALLERY
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black tracking-tight">
            Life at Moonlight Coaching Centre
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base font-medium">
            Explore our classrooms, reading hall, events, and learning environment in Parsauni, Sitamarhi.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                activeFilter === cat
                  ? "bg-[#0F172A] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all border border-slate-200 aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-lg font-poppins font-black text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
