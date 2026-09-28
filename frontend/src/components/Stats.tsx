'use client';

import React from 'react';

export default function Stats(): React.JSX.Element {
  const stats = [
    {
      value: '98.4%',
      title: 'Follicular Retention Index',
      desc: 'Observed over a 12-week clinical study on traction alopecia & thinning hair types.'
    },
    {
      value: '220 mg/L',
      title: 'Phytolipid Active Density',
      desc: 'High concentration of natural essential oils and active plant steroids.'
    },
    {
      value: '8 Weeks',
      title: 'Average Regrowth Baseline',
      desc: 'Measurable anagen phase density increase across patient cohorts.'
    }
  ];

  return (
    <section id="evidence" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
            CLINICAL TRIALS & DERMATOLOGICAL DATA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2B0E2B] mt-2">
            Smart Insights & Clinical Evidence
          </h2>
          <p className="text-stone-600 text-xs md:text-sm mt-3">
            Formulated based on rigorous biometrical research on curly and coily hair shafts, 
            focusing on sebum barrier repair and follicular nourishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded border border-stone-200 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#2B0E2B] mb-2">{stat.value}</div>
              <h3 className="font-semibold text-sm text-stone-800 mb-2">{stat.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
