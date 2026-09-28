'use client';

import React from 'react';
import { User, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Header(): React.JSX.Element {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#2B0E2B] text-white text-[11px] py-2 text-center font-medium tracking-wider uppercase">
        SPECIALLY FORMULATED FOR TRICHOLOGY & FOLLICULAR RESTORATION
      </div>

      {/* Main Header */}
      <header className="bg-[#FAF8F5] border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#hero" className="flex items-center space-x-3">
            <img
              src="/assets/logo.jpg"
              alt="Die Perfeksie Hair Clinic Logo"
              className="w-9 h-9 rounded-full object-cover border border-[#2B0E2B]"
            />
            <span className="font-serif text-lg font-bold tracking-tight text-[#2B0E2B]">
              Die Perfeksie
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-stone-700">
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.link/cspck8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-[11px] font-bold px-3 py-2 rounded flex items-center gap-1.5 uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#consultation"
              className="bg-[#2B0E2B] text-white text-[11px] font-bold px-3 py-2 rounded uppercase tracking-wider hover:bg-[#3D143D] transition-colors"
            >
              BOOK CLINIC APP
            </a>
            <button className="p-1.5 text-stone-700 hover:text-[#2B0E2B]" aria-label="User Account">
              <User className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-stone-700 hover:text-[#2B0E2B] relative" aria-label="Shopping Cart">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
