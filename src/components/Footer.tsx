import Link from 'next/link';
import Image from 'next/image';
import companyData from '@/data/company.json';
import servicesData from '@/data/services.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="PayCraft - Go to homepage">
              <Image
                src="/PayCraftLogoFooter.png"
                alt="PayCraft Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.
              We handle your payroll so you can focus on what matters most.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">{companyData.legalName}</p>
              <p className="text-gray-400">ACN: {companyData.acn}</p>
            </div>
          </div>

          {/* Services Links - Important for SEO */}
          <nav aria-label="Services navigation">
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links navigation">
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyData.navigation.header.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-500 text-sm mb-1">Email</span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={`Email us at ${companyData.email}`}
                >
                  {companyData.email}
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-sm mb-1">Address</span>
                <address className="text-gray-400 not-italic leading-relaxed" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{companyData.address.street}</span><br />
                  <span itemProp="addressLocality">{companyData.address.suburb}</span>{' '}
                  <span itemProp="addressRegion">{companyData.address.state}</span>{' '}
                  <span itemProp="postalCode">{companyData.address.postcode}</span><br />
                  <span itemProp="addressCountry">{companyData.country}</span>
                </address>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {companyData.brandName}. All rights reserved. | Payroll Services Australia
            </p>
            <nav aria-label="Legal navigation" className="flex items-center gap-6">
              {companyData.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
