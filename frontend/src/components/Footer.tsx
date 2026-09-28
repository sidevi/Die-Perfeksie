'use client';

import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#FAF8F5] text-stone-700 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/assets/logo.jpg"
              alt="Die Perfeksie Hair Clinic Logo"
              className="w-8 h-8 rounded-full object-cover border border-[#2B0E2B]"
            />
            <span className="font-serif text-base font-bold text-[#2B0E2B] tracking-tight">
              Die Perfeksie
            </span>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
            Advanced clinical trichology and therapeutic botanical formulations engineered specifically for afro-textured hair and follicular restoration.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#2B0E2B] mb-3">
            NAVIGATION & ACCESS
          </h5>
          <ul className="space-y-2 text-xs text-stone-600">
            <li><a href="#hero" className="hover:text-[#2B0E2B] transition-colors">Clinical Diagnosis</a></li>
            <li><a href="#evidence" className="hover:text-[#2B0E2B] transition-colors">Research & Evidence</a></li>
            <li><a href="#products" className="hover:text-[#2B0E2B] transition-colors">Formulations</a></li>
            <li><a href="#consultation" className="hover:text-[#2B0E2B] transition-colors">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#2B0E2B] mb-3">
            LAGOS CLINIC LOCATION
          </h5>
          <p className="text-xs text-stone-600 leading-relaxed">
            Die Perfeksie Hair Clinic<br />
            Commercial Avenue, Sabo Yaba,<br />
            Lagos State, Nigeria.<br />
            Tel: +234 810 361 3506<br />
            Mail: care@dieperfeksie.com
          </p>
        </div>

        {/* Newsletter Column */}
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#2B0E2B] mb-3">
            TRICHOLOGY RESEARCH DIGEST
          </h5>
          <p className="text-xs text-stone-500 mb-3">
            Subscribe to receive our clinical trial findings and care guidelines.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-xs px-3 py-2 rounded-l border border-stone-300 text-stone-800 w-full focus:outline-none focus:border-[#2B0E2B]"
            />
            <button className="bg-[#2B0E2B] text-white px-4 text-xs font-bold rounded-r tracking-wider hover:bg-[#3D143D] transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
