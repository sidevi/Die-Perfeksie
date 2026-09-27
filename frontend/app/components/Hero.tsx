'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero(): React.JSX.Element {
  return (
    <section id="hero" className="bg-[#FAF8F5] py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block text-xs font-semibold tracking-wider uppercase text-stone-500 border-b border-stone-300 pb-1">
            EXPERT HAIRCARE SOLUTIONS & TREATMENTS IN LAGOS
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#2B0E2B] leading-tight">
            Crafting beauty, <br />
            <span className="italic">perfecting hairs.</span>
          </h1>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xl">
            Deals in wig making, wig revamping, hair cream, hair oil, hair therapy, and more. 
            Targeted botanical phytotherapy and precision follicular stimulation tailored to complex hair challenges.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.link/cspck8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2B0E2B] text-white px-6 py-3.5 rounded text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-[#3D143D] transition-colors"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-stone-500 italic">
              Lagos, Nigeria • WhatsApp: 08103613506
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">140+</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Posts & Treatments
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">100%</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Natural Infused Oils
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#2B0E2B]">2+ Yrs</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">
                Proven Hair Regrowth
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
            <img
              src="/assets/founder.jpg"
              alt="Die Perfeksie Hair Clinic Specialist"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded border border-stone-200 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2B0E2B]">Die Perfeksie Hair Clinic</h4>
                  <p className="text-[11px] text-stone-500">Hair Salon & Follicular Specialist • Lagos</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-bold text-stone-800">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
