import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PayCraft - Payroll & Payment Services Australia',
  description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.',
  keywords: 'payroll, payroll processing, salary payments, superannuation, STP, payroll outsourcing, Australia',
  authors: [{ name: 'PayCraft' }],
  robots: 'index, follow',
  openGraph: {
    title: 'PayCraft - Payroll & Payment Services Australia',
    description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.',
    url: 'https://paycraftservices.com.au',
    siteName: 'PayCraft',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
