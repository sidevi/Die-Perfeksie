'use client';

import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#1C0A1C] text-stone-300 py-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-serif text-sm font-bold text-white">
              DP
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-tight">
              Die Perfeksie
            </span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Advanced clinical trichology and therapeutic botanical formulations for Afro hair restoration.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Navigation</h5>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#hero" className="hover:text-white transition-colors">Clinical Diagnosis</a></li>
            <li><a href="#evidence" className="hover:text-white transition-colors">Research & Evidence</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Formulations</a></li>
            <li><a href="#consultation" className="hover:text-white transition-colors">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Clinic Address</h5>
          <p className="text-xs text-stone-400 leading-relaxed">
            Die Perfeksie Hair Clinic<br />
            Victoria Island, Lagos, Nigeria<br />
            Email: care@dieperfeksie.com<br />
            Tel: +234 1 234 5678
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Newsletter</h5>
          <p className="text-xs text-stone-400 mb-3">
            Subscribe for clinical research updates and trichology advice.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-stone-900 text-xs px-3 py-2 rounded-l border border-stone-800 text-white w-full focus:outline-none"
            />
            <button className="bg-[#2B0E2B] border border-[#2B0E2B] px-4 text-xs font-bold text-white rounded-r">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-stone-800 text-center text-[11px] text-stone-500">
        © {new Date().getFullYear()} Die Perfeksie Hair Clinic. All rights reserved.
      </div>
    </footer>
  );
}
