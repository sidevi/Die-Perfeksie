'use client';

import React from 'react';

export default function Products(): React.JSX.Element {
  const products = [
    {
      name: 'Nurture & Moringa Scalp Serum',
      category: 'FOLLICULAR SERUM',
      desc: 'Targeted scalp elixir for density restoration and follicle hydration.',
      price: '₦24,500',
      image: 'https://images.unsplash.com/photo-1608248597261-e4d0947c6b1e?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Featherlight Growth Serum Concentrate',
      category: 'DAILY DROPS',
      desc: 'Lightweight botanical lipid complex that leaves zero greasy residue.',
      price: '₦28,000',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Clarifying Protein Scalp Polish',
      category: 'EXFOLIANT MASQUE',
      desc: 'Removes build-up and dead skin while preserving essential natural oils.',
      price: '₦22,000',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Scalp Detox & Root Essence Oil',
      category: 'ROOT ELIXIR',
      desc: 'Anti-inflammatory formulation designed for dry and itchy scalp relief.',
      price: '₦21,500',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Chebe & Jelly Root Scalp Oil',
      category: 'STRENGTHENING OIL',
      desc: 'Traditional Sahelian botanical extract for length retention & anti-breakage.',
      price: '₦26,000',
      image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Follicle Density Boosting Drops',
      category: 'GROWTH SERUM',
      desc: 'Clinical strength drop treatment targeting thinning crown and edges.',
      price: '₦32,000',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section id="products" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
            FORMULATIONS & RESEARCH
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2B0E2B] mt-2">
            Precision Formulations for Follicular Health
          </h2>
          <p className="text-stone-600 text-xs md:text-sm mt-3">
            Therapeutic, plant-based treatments crafted to repair scalp micro-environments and 
            strengthen Afro-textured hair shafts from root to tip.
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
                <span className="font-serif font-bold text-stone-900 text-base">{p.price}</span>
                <button className="bg-[#2B0E2B] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider hover:bg-[#3D143D] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
