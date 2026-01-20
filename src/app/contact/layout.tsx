import type { Metadata } from 'next';

const baseUrl = 'https://paycraftservices.com.au';

export const metadata: Metadata = {
  title: 'Contact PayCraft - Get in Touch for Payroll Services',
  description: 'Contact PayCraft for professional payroll services in Australia. Get in touch to discuss your payroll processing, salary payments, superannuation, and compliance needs.',
  keywords: [
    'contact PayCraft',
    'payroll services contact',
    'Australian payroll enquiry',
    'payroll quote',
    'payroll services NSW',
    'get payroll help',
  ],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact PayCraft - Get in Touch for Payroll Services',
    description: 'Contact PayCraft for professional payroll services in Australia. We are here to help with your payroll needs.',
    url: `${baseUrl}/contact`,
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
