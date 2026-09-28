'use client';

import React from 'react';

export default function Products(): React.JSX.Element {
  const products = [
    {
      name: 'Infused Hair Oil (100ml)',
      category: 'HAIR & SCALP OIL',
      desc: 'Formulated to reduce breakage, induce growth, prevent dandruff, and give natural shine to hair and scalp.',
      price: 'Contact for Price',
      image: '/assets/2.jpg'
    },
    {
      name: 'Beard Oil for the Modern Gentleman (30ml)',
      category: 'BEARD CARE',
      desc: 'Helps reduce dryness and keeps your beard healthy, smooth, and well-groomed. Contains Avocado, Jojoba, Rosemary, and Amla.',
      price: 'Contact for Price',
      image: '/assets/4.jpg'
    },
    {
      name: 'Infused Hair Oil (70ml / 50ml / 30ml)',
      category: 'TRAVEL SIZES',
      desc: 'Compact sizes for everyday application. Apply to sectioned hair and massage thoroughly into scalp.',
      price: 'Contact for Price',
      image: '/assets/5.jpg'
    }
  ];

  return (
    <section id="products" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
            OUR FORMULATIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2B0E2B] mt-2">
            Premium Hair & Beard Care Products
          </h2>
          <p className="text-stone-600 text-xs md:text-sm mt-3">
            Therapeutic, plant-based treatments crafted to nourish scalp environments and 
            strengthen hair shafts from root to tip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white rounded border border-stone-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-64 bg-stone-100 overflow-hidden relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-bold tracking-wider text-stone-700 px-2 py-1 rounded uppercase">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-[#2B0E2B]">{p.name}</h3>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-100">
                <span className="font-serif font-bold text-stone-900 text-sm">{p.price}</span>
                <a
                  href="https://wa.link/cspck8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2B0E2B] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#3D143D] transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
