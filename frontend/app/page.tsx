import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Evidence from './components/Evidence';
import Products from './components/Products';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#FAF8F5] scroll-smooth font-sans text-stone-900">
      <Header />
      <Hero />
      <Stats />
      <Evidence />
      <Products />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
