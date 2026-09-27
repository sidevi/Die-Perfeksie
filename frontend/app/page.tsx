import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Evidence from '@/components/Evidence';
import Products from '@/components/Products';
import Regimen from '@/components/Regimen';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#faf8f5] scroll-smooth">
      <Header />
      <Navbar />

      <section id="hero">
        <Hero />
        <Stats />
      </section>

      <section id="evidence">
        <Evidence />
      </section>

      <section id="products">
        <Products />
        <Regimen />
      </section>

      <section id="consultation">
        <ConsultationForm />
      </section>

      <Footer />
    </main>
  );
}
