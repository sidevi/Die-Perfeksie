import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Die Perfeksie Hair Clinic • High-Fashion Trichology & Botanical Apothecary',
  description: 'Evidence-based clinical trichology, bespoke botanical alchemy, and cellular scalp restoration in Yaba, Lagos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#f8f8fb] font-sans text-gray-900 antialiased selection:bg-[#380e3b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
