'use client';

import React from 'react';

export default function Evidence(): React.JSX.Element {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded border border-stone-200 overflow-hidden p-6">
            <div className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mb-2">
              CLINICAL RESULT • CASE STUDY #042
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-stone-100 h-48 rounded overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1584297091622-af8e5fd2eb12?q=80&w=400&auto=format&fit=crop"
                  alt="Botanical Active Formulation"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                  RAW PHYTO-OIL EXTRACT
                </span>
              </div>
              <div className="bg-stone-100 h-48 rounded overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                  alt="Clinical Patient Outcome"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#2B0E2B] text-white text-[10px] px-2 py-0.5 rounded">
                  PATIENT PROGRESS
                </span>
              </div>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B0E2B]">
              Botanical Infusion vs. Synthetic Restoration
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Longitudinal analysis showing reduced scalp inflammation and restored moisture lock in 
              4C curl patterns treated with cold-pressed moringa and chebe compounds.
            </p>
          </div>

          <div className="bg-[#2B0E2B] text-white rounded p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-amber-200/70 uppercase">
                TRICHOLOGIST TESTIMONIAL
              </span>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug italic font-light">
                "The structural geometry of Afro-textured follicles requires specialized lipid delivery vectors. Our formulas rebuild moisture barriers from the follicle up without clogging scalp pores."
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-amber-900/40">
              <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                  alt="Dr. Amena Thorpe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">Dr. Amena Thorpe</h4>
                <p className="text-xs text-stone-300">Lead Director of Trichological Research</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Oleic Acid Complex</div>
            <p className="text-[11px] text-stone-500 mt-1">Deep follicle penetration</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Micro-Emulsion Serum</div>
            <p className="text-[11px] text-stone-500 mt-1">Instant shaft hydration</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Lipid Barrier Shield</div>
            <p className="text-[11px] text-stone-500 mt-1">Prevents breakage</p>
          </div>
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="text-xs font-bold text-[#2B0E2B]">Oat Kernel Extract</div>
            <p className="text-[11px] text-stone-500 mt-1">Soothes scalp irritation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
