'use client';

import React from 'react';

export default function Evidence(): React.JSX.Element {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded border border-stone-200 overflow-hidden p-6">
            <div className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mb-2">
              REAL PATIENT PROGRESS • 2024 TO 2026
            </div>
            <div className="bg-stone-100 h-64 rounded overflow-hidden relative my-4">
              <img
                src="/assets/before-after.jpg"
                alt="Hair Growth Progress 2024 to 2026"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-[#2B0E2B] text-white text-[10px] px-2 py-0.5 rounded">
                2-YEAR TRANSFORMATION
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B0E2B]">
              Proven Follicular Regrowth & Retention
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Documented hair restoration results using regular application of Die Perfeksie Infused Hair Oil over two years.
            </p>
          </div>

          <div className="bg-[#2B0E2B] text-white rounded p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-amber-200/70 uppercase">
                OUR MISSION
              </span>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug italic font-light">
                "We take pride in PERFECTING HAIRS AND CRAFTING BEAUTY. Expert haircare solutions and treatments tailored for real results in Lagos."
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-amber-900/40">
              <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden">
                <img
                  src="/assets/logo.png"
                  alt="Die Perfeksie Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">Die Perfeksie Hair Clinic</h4>
                <p className="text-xs text-stone-300">@di_eperfeksie</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Avocado & Jojoba Oil</div>
            <p className="text-[11px] text-stone-500 mt-1">Deep moisture retention</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Black Seed & Rosemary</div>
            <p className="text-[11px] text-stone-500 mt-1">Stimulates hair growth</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Cedarwood & Cloves</div>
            <p className="text-[11px] text-stone-500 mt-1">Reduces scalp dryness</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Amla & Fenugreek Seed</div>
            <p className="text-[11px] text-stone-500 mt-1">Nourishes & strengthens</p>
          </div>
        </div>
      </div>
    </section>
  );
}
