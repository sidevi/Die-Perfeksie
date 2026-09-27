'use client';

import React from 'react';
import { User, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Header(): React.JSX.Element {
  return (
    <>
      <div className="bg-[#2B0E2B] text-white text-xs py-2 text-center font-medium tracking-wide">
        SPECIALLY FORMULATED FOR TRICHOLOGY & FOLLICULAR RESTORATION
      </div>
      <header className="bg-[#FAF8F5] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-3">
            <img
              src="/assets/logo.png"
              alt="Die Perfeksie Hair Clinic"
              className="w-10 h-10 rounded-full object-cover border border-[#2B0E2B]"
            />
            <span className="font-serif text-lg font-bold tracking-tight text-[#2B0E2B]">
              Die Perfeksie
            </span>
          </a>

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
            <a
              href="https://wa.link/cspck8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded flex items-center gap-1.5 uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
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
