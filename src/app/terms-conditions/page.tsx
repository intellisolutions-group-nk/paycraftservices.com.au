import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { DocumentIcon, CheckIcon } from '@/components/Icons';
import companyData from '@/data/company.json';

export const metadata: Metadata = {
  title: 'Terms & Conditions - PayCraft',
  description: 'Read the terms and conditions for using PayCraft payroll services.',
};

export default function TermsConditionsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: '01',
      content: `By accessing or using the services provided by ${companyData.legalName} ("${companyData.brandName}", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`,
      list: [],
    },
    {
      id: 'services',
      title: 'Services',
      icon: '02',
      content: 'We provide payroll processing and related services to businesses in Australia. The specific services provided to you will be outlined in a separate service agreement. Our services include but are not limited to:',
      list: [
        'Payroll processing and calculations',
        'Salary and wage payments',
        'Superannuation processing',
        'Payroll compliance and reporting',
        'Single Touch Payroll (STP) support',
        'Payroll outsourcing',
      ],
    },
    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      icon: '03',
      content: 'As a client of our services, you agree to:',
      list: [
        'Provide accurate and complete information necessary for payroll processing',
        'Notify us promptly of any changes to employee information or payroll requirements',
        'Ensure timely approval of payroll before processing deadlines',
        'Maintain sufficient funds for payroll disbursement',
        'Comply with all applicable employment and taxation laws',
        'Keep your login credentials secure and confidential',
      ],
    },
    {
      id: 'our-obligations',
      title: 'Our Obligations',
      icon: '04',
      content: 'We commit to providing you with reliable and professional payroll services. We will:',
      list: [
        'Process your payroll accurately based on the information you provide',
        'Maintain the confidentiality of your business and employee data',
        'Comply with relevant privacy and data protection laws',
        'Provide support and assistance during business hours',
        'Keep you informed of any changes that may affect our services',
      ],
    },
    {
      id: 'fees',
      title: 'Fees and Payment',
      icon: '05',
      content: 'Fees for our services will be outlined in your service agreement. Payment terms are as agreed upon in your service agreement. We reserve the right to modify our fees with reasonable notice. All fees are quoted in Australian dollars unless otherwise specified.',
      list: [],
    },
    {
      id: 'accuracy',
      title: 'Accuracy of Information',
      icon: '06',
      content: 'While we take all reasonable care to ensure the accuracy of payroll processing, we rely on the information you provide. We are not responsible for errors resulting from incorrect, incomplete, or late information provided by you. You are responsible for reviewing payroll reports and notifying us of any discrepancies before payment processing.',
      list: [],
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: '07',
      content: 'To the maximum extent permitted by law:',
      list: [
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our liability is limited to the fees paid for the specific service giving rise to the claim',
        'We are not responsible for delays or failures caused by circumstances beyond our reasonable control',
        'We are not liable for losses arising from your failure to provide accurate information or timely approvals',
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: '08',
      content: 'We will maintain the confidentiality of all information you provide to us. We will not disclose your information to third parties except as required by law, necessary for providing our services, or with your consent. All team members are bound by confidentiality agreements.',
      list: [],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: '09',
      content: `All content on our website, including text, graphics, logos, and software, is the property of ${companyData.legalName} and is protected by Australian intellectual property laws. You may not reproduce, distribute, or use our intellectual property without prior written consent.`,
      list: [],
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: '10',
      content: 'Either party may terminate the service agreement with written notice as specified in your service agreement. Upon termination, you remain responsible for fees owed for services provided up to the termination date. We will assist with the transition of payroll data to your new provider.',
      list: [],
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: '11',
      content: 'These Terms and Conditions are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales. We encourage resolution of disputes through negotiation in the first instance.',
      list: [],
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: '12',
      content: 'We reserve the right to update these Terms and Conditions at any time. We will notify you of any material changes. Continued use of our services after changes constitutes acceptance of the updated terms. Material changes will be communicated with reasonable notice.',
      list: [],
    },
  ];

  const highlights = [
    { title: 'Fair Terms', description: 'Balanced obligations for both parties' },
    { title: 'Clear Pricing', description: 'Transparent fee structure in your agreement' },
    { title: 'Data Protection', description: 'Your information is kept confidential' },
    { title: 'Easy Exit', description: 'Straightforward termination process' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-secondary-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
              <DocumentIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Please read these terms carefully before using our services.
              They outline the rights and responsibilities of both parties.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm">
              <span>Last updated: January 2026</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-4">
                  <h4 className="font-display font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                  These Terms and Conditions govern your use of the services provided
                  by {companyData.legalName} (ACN: {companyData.acn}), trading as {companyData.brandName}.
                  By using our services, you acknowledge that you have read, understood,
                  and agree to be bound by these terms.
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
              <AnimatedSection key={section.id} delay={index * 0.03}>
                <div
                  id={section.id}
                  className="card scroll-mt-32"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    13
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-semibold text-white mb-4">
                      Questions About These Terms?
                    </h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                      If you have any questions about these Terms and Conditions or need clarification on any points, please contact us.
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
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your payroll needs and receive a tailored service agreement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="btn-secondary">
                Privacy Policy
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
