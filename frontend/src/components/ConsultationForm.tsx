'use client';

import React, { useState } from 'react';

export default function ConsultationForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hairConcern: 'Scalp Thinning / Alopecia',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consultation request submitted! Our clinic team will reach out shortly.');
  };

  return (
    <section id="consultation" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
            CLINICAL APPOINTMENTS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2B0E2B]">
            In-Person Lagos Consultation
          </h2>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
            Schedule a comprehensive scalp trichoscopy and personalized regimen evaluation 
            with our resident clinical specialists in Victoria Island, Lagos.
          </p>

          <div className="bg-white p-6 rounded border border-stone-200 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#2B0E2B]">Clinic Location & Hours</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Greenfield Terrace, Victoria Island, Lagos<br />
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
            <div className="pt-2 border-t border-stone-100 text-[11px] text-[#2B0E2B] font-semibold">
              Tele-consultations available for international patients.
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 rounded border border-stone-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:outline-none focus:border-[#2B0E2B]"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:outline-none focus:border-[#2B0E2B]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:outline-none focus:border-[#2B0E2B]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Primary Hair Concern</label>
                <select
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:outline-none focus:border-[#2B0E2B]"
                  value={formData.hairConcern}
                  onChange={(e) => setFormData({ ...formData, hairConcern: e.target.value })}
                >
                  <option>Scalp Thinning / Alopecia</option>
                  <option>Breakage & Dryness</option>
                  <option>Scalp Inflammation / Dandruff</option>
                  <option>General Growth & Regimen</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Preferred Date</label>
              <input
                type="date"
                required
                className="w-full text-xs p-3 border border-stone-300 rounded focus:outline-none focus:border-[#2B0E2B]"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B0E2B] text-white py-3.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#3D143D] transition-colors mt-2"
            >
              Confirm Request & Schedule Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
