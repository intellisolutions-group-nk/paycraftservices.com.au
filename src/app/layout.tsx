import type { Metadata, Viewport } from 'next';
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

const siteUrl = 'https://paycraftservices.com.au';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PayCraft - Professional Payroll & Payment Services Australia',
    template: '%s | PayCraft Australia',
  },
  description: 'Professional payroll processing, salary payments, superannuation, STP compliance, and payroll outsourcing services for Australian businesses. Trusted payroll solutions in NSW.',
  keywords: [
    'payroll services Australia',
    'payroll processing',
    'salary payments',
    'superannuation processing',
    'STP compliance',
    'Single Touch Payroll',
    'payroll outsourcing',
    'payroll compliance',
    'Australian payroll',
    'NSW payroll services',
    'PAYG withholding',
    'employee payments',
    'payroll management',
    'SuperStream',
  ],
  authors: [{ name: 'PayCraft', url: siteUrl }],
  creator: 'Pay Craft Service Pty Ltd',
  publisher: 'Pay Craft Service Pty Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'PayCraft - Professional Payroll & Payment Services Australia',
    description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses. Trusted payroll solutions.',
    url: siteUrl,
    siteName: 'PayCraft',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PayCraft - Australian Payroll Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayCraft - Professional Payroll Services Australia',
    description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Business Services',
  classification: 'Payroll Services',
};

// Organization Schema for the entire site
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PayCraft',
  legalName: 'Pay Craft Service Pty Ltd',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 15, 2 Patricia Street',
    addressLocality: 'Mays Hill',
    addressRegion: 'NSW',
    postalCode: '2145',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@paycraftservices.com.au',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'English',
  },
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  serviceArea: {
    '@type': 'Country',
    name: 'Australia',
  },
};

// WebSite Schema for search box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PayCraft',
  url: siteUrl,
  description: 'Professional payroll and payment services for Australian businesses',
  publisher: {
    '@type': 'Organization',
    name: 'PayCraft',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
