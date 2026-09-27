'use client';

import React from 'react';
import { User, ShoppingBag } from 'lucide-react';

export default function Header(): React.JSX.Element {
  return (
    <>
      <div className="bg-[#2B0E2B] text-white text-xs py-2 text-center font-medium tracking-wide">
        SPECIALLY FORMULATED FOR TRICHOLOGY & FOLLICULAR RESTORATION
      </div>
      <header className="bg-[#FAF8F5] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full border border-[#2B0E2B] flex items-center justify-center font-serif text-sm font-bold text-[#2B0E2B]">
              DP
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-[#2B0E2B]">
              Die Perfeksie
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-700">
            <a href="#hero" className="hover:text-[#2B0E2B] transition-colors">
              DIAGNOSIS
            </a>
            <a href="#evidence" className="hover:text-[#2B0E2B] transition-colors">
              CLINICAL TRIALS
            </a>
            <a href="#products" className="hover:text-[#2B0E2B] transition-colors">
              FORMULATIONS
            </a>
            <a href="#consultation" className="hover:text-[#2B0E2B] transition-colors">
              CONSULTATION
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-[#2B0E2B] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#3D143D] transition-colors">
              Book Trichologist
            </button>
            <button className="p-2 text-stone-700 hover:text-[#2B0E2B]">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-stone-700 hover:text-[#2B0E2B] relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#2B0E2B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
