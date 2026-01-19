import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { ShieldIcon, CheckIcon } from '@/components/Icons';
import companyData from '@/data/company.json';

export const metadata: Metadata = {
  title: 'Privacy Policy - PayCraft',
  description: 'Read our privacy policy to understand how PayCraft collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collected',
      title: 'Information We Collect',
      icon: '01',
      content: 'We collect information that you provide directly to us when using our services, including:',
      list: [
        'Contact information (name, email address, phone number, business address)',
        'Business information (company name, ABN/ACN)',
        'Employee payroll data as required to provide our services',
        'Financial information necessary for payroll processing',
        'Communication records when you contact us',
      ],
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: '02',
      content: 'We use the information we collect for the following purposes:',
      list: [
        'To provide and maintain our payroll services',
        'To process payroll transactions and generate required reports',
        'To comply with legal and regulatory requirements',
        'To communicate with you about our services',
        'To improve and develop our services',
        'To protect against fraudulent or illegal activity',
      ],
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: '03',
      content: 'We do not sell your personal information. We may share your information in the following circumstances:',
      list: [
        'With government authorities as required by law (e.g., ATO for STP reporting)',
        'With superannuation funds for contribution processing',
        'With service providers who assist us in delivering our services',
        'As required by law or to protect our legal rights',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: '04',
      content: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:',
      list: [
        'Encryption of data in transit and at rest',
        'Access controls and authentication requirements',
        'Regular security assessments and monitoring',
        'Secure data storage and backup procedures',
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: '05',
      content: 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Payroll records are retained in accordance with Australian taxation and employment law requirements, typically for a minimum of 7 years.',
      list: [],
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: '06',
      content: 'Under Australian privacy law, you have rights regarding your personal information:',
      list: [
        'Access to your personal information we hold',
        'Correction of inaccurate or incomplete information',
        'Complaints about how we handle your information',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and Analytics',
      icon: '07',
      content: 'Our website may use cookies and similar technologies to enhance your browsing experience and analyse website usage. You can control cookie settings through your browser preferences.',
      list: [],
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: '08',
      content: 'We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.',
      list: [],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-white rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
              <ShieldIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect,
              use, and protect your personal information.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm">
              <span>Last updated: January 2026</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[84px] z-40 backdrop-blur-lg bg-white/95">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-gray-500 text-sm flex-shrink-0">Jump to:</span>
            {sections.slice(0, 6).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {companyData.legalName} (ACN: {companyData.acn}) is committed to
                  protecting your privacy and handling your personal information
                  responsibly. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our services.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <AnimatedSection key={section.id} delay={index * 0.05}>
                <div
                  id={section.id}
                  className="card scroll-mt-32"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {section.content}
                      </p>
                      {section.list.length > 0 && (
                        <ul className="space-y-2">
                          {section.list.map((item, lIndex) => (
                            <li key={lIndex} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckIcon className="w-3 h-3 text-primary-600" />
                              </div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Contact Section */}
            <AnimatedSection delay={0.4}>
              <div className="card bg-gradient-to-br from-primary-600 to-primary-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    09
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-semibold text-white mb-4">
                      Contact Us
                    </h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                      If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </p>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary-700 font-medium hover:bg-gray-100 transition-colors"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any concerns about how we handle your data, we are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/security-compliance" className="btn-secondary">
                Security & Compliance
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
