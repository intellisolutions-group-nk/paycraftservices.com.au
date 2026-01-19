import Link from 'next/link';
import companyData from '@/data/company.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">
                {companyData.brandName}
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Professional payroll and payment services for Australian businesses.
              We handle your payroll so you can focus on what matters most.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">{companyData.legalName}</p>
              <p className="text-gray-400">ACN: {companyData.acn}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-500 text-sm mb-1">Email</span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {companyData.email}
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-sm mb-1">Address</span>
                <address className="text-gray-400 not-italic leading-relaxed">
                  {companyData.address.street}<br />
                  {companyData.address.suburb} {companyData.address.state} {companyData.address.postcode}<br />
                  {companyData.country}
                </address>
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
              © {currentYear} {companyData.brandName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {companyData.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
