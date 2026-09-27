'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero(): React.JSX.Element {
  return (
    <section id="hero" className="bg-[#FAF8F5] py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block text-xs font-semibold tracking-wider uppercase text-stone-500 border-b border-stone-300 pb-1">
            ADVANCED TRICHOLOGY LAB & CLINIC
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#2B0E2B] leading-tight">
            Crafting beauty, <br />
            <span className="italic">perfecting hairs.</span>
          </h1>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xl">
            An advanced clinical hair restoration matrix for Afro-textured hair & scalp. 
            Targeted botanical phytotherapy, dermatological-grade lipid restoration, 
            and precision follicular stimulation tailored to complex hair challenges.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#consultation"
              className="bg-[#2B0E2B] text-white px-6 py-3.5 rounded text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-[#3D143D] transition-colors"
            >
              Book Clinical Assessment <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-stone-500 italic">
              Virtual or In-Person Clinic • Lagos
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">98.4%</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Follicular Retention Rate
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">147+</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Patients Treated Monthly
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">100%</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Botanical Active Extracts
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
              alt="Trichology Consultation"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded border border-stone-200 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2B0E2B]">Dr. Amena Thorpe</h4>
                  <p className="text-[11px] text-stone-500">Lead Trichology & Follicular Specialist</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-bold text-stone-800">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
