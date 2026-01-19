import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import {
  ShieldIcon,
  LockIcon,
  DocumentIcon,
  ServerIcon,
  EyeSlashIcon,
  CheckIcon,
  ClockIcon,
  UsersIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Security & Compliance - PayCraft',
  description: 'Learn about our commitment to data security, privacy protection, and regulatory compliance for payroll services in Australia.',
};

export default function SecurityCompliancePage() {
  const securityFeatures = [
    {
      icon: LockIcon,
      title: 'Data Encryption',
      description: 'All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols to prevent unauthorised access.',
    },
    {
      icon: ServerIcon,
      title: 'Secure Infrastructure',
      description: 'Our systems are hosted on secure infrastructure with multiple layers of protection, redundancy, and disaster recovery capabilities.',
    },
    {
      icon: EyeSlashIcon,
      title: 'Privacy Protection',
      description: 'We implement strict access controls and privacy measures to protect your employee and business data from unauthorised disclosure.',
    },
    {
      icon: DocumentIcon,
      title: 'Audit Trails',
      description: 'Comprehensive logging and audit trails ensure full traceability of all payroll activities for accountability and compliance.',
    },
  ];

  const securityPractices = [
    {
      title: 'Access Management',
      description: 'Role-based access controls ensure that only authorised personnel can access sensitive payroll information. We implement the principle of least privilege across all systems.',
      items: [
        'Multi-factor authentication for all users',
        'Role-based access control (RBAC)',
        'Regular access reviews and audits',
        'Immediate access revocation upon termination',
        'Secure password policies and management',
      ],
    },
    {
      title: 'Data Handling',
      description: 'Your payroll data is handled with the utmost care throughout its lifecycle, from collection to storage to eventual secure disposal.',
      items: [
        'Encrypted data transmission (TLS/SSL)',
        'Encrypted data storage at rest',
        'Secure data backup procedures',
        'Data retention in compliance with regulations',
        'Secure data disposal when no longer required',
      ],
    },
    {
      title: 'System Security',
      description: 'Our technical infrastructure is designed with security as a foundational principle, with multiple layers of protection against threats.',
      items: [
        'Regular security patches and updates',
        'Intrusion detection and prevention',
        'Network segmentation and firewalls',
        'Continuous system monitoring',
        'Vulnerability assessments and testing',
      ],
    },
    {
      title: 'Business Continuity',
      description: 'We maintain robust business continuity and disaster recovery capabilities to ensure your payroll operations remain uninterrupted.',
      items: [
        'Regular data backups with off-site storage',
        'Disaster recovery planning and testing',
        'Redundant systems and infrastructure',
        'Incident response procedures',
        'Service level commitments',
      ],
    },
  ];

  const complianceAreas = [
    {
      title: 'Fair Work Compliance',
      description: 'We ensure all payroll calculations comply with Fair Work Australia requirements, including minimum wages, penalty rates, and leave entitlements. Our team stays current with all award updates and legislative changes.',
      points: [
        'National Employment Standards (NES) adherence',
        'Modern Award rate compliance',
        'Enterprise Agreement interpretation',
        'Leave entitlement calculations',
        'Penalty and overtime rate accuracy',
        'Termination and redundancy compliance',
      ],
    },
    {
      title: 'Tax Compliance',
      description: 'Our systems maintain accurate tax calculations and reporting in accordance with Australian Taxation Office requirements. We implement tax table updates promptly and ensure all withholdings are calculated correctly.',
      points: [
        'PAYG withholding calculations',
        'Tax table updates implemented promptly',
        'HELP/HECS-HELP/VSL deductions',
        'Tax file number declarations',
        'Reportable fringe benefits',
        'Working holiday maker tax rates',
      ],
    },
    {
      title: 'Superannuation Compliance',
      description: 'We handle superannuation contributions and reporting in full compliance with the Superannuation Guarantee requirements, ensuring contributions are paid correctly and on time.',
      points: [
        'Superannuation Guarantee calculations',
        'SuperStream compliant submissions',
        'Choice of fund administration',
        'Contribution payment deadlines',
        'Salary sacrifice arrangements',
        'Maximum contribution base application',
      ],
    },
    {
      title: 'Single Touch Payroll (STP)',
      description: 'Full compliance with Single Touch Payroll Phase 2 requirements for real-time reporting to the ATO. We ensure all pay events are reported accurately and on time.',
      points: [
        'STP Phase 2 compliance',
        'Real-time reporting each pay run',
        'Disaggregated income reporting',
        'Year-end finalisation',
        'Update event submissions',
        'Error correction and resubmission',
      ],
    },
  ];

  const dataProtection = [
    'Strict access control policies limiting data access to authorised personnel only',
    'Regular security assessments and penetration testing',
    'Employee data privacy protection in accordance with Privacy Act requirements',
    'Secure data transmission using encrypted channels',
    'Comprehensive data backup and recovery procedures',
    'Documented incident response protocols and procedures',
    'Staff security awareness training and education',
    'Confidentiality agreements with all team members',
  ];

  const commitments = [
    {
      icon: ShieldIcon,
      title: 'Data Protection',
      description: 'We treat your data as if it were our own, implementing comprehensive safeguards to protect against loss, theft, and unauthorised access.',
    },
    {
      icon: ClockIcon,
      title: 'Timely Updates',
      description: 'We stay ahead of regulatory changes, implementing updates to tax tables, award rates, and compliance requirements as soon as they are announced.',
    },
    {
      icon: DocumentIcon,
      title: 'Transparency',
      description: 'We maintain clear documentation of our security practices and compliance procedures, and are happy to discuss them with you at any time.',
    },
    {
      icon: UsersIcon,
      title: 'Accountability',
      description: 'Our team takes personal responsibility for maintaining security and compliance standards, with clear ownership of all processes.',
    },
  ];

  const faqs = [
    {
      question: 'How do you protect our payroll data?',
      answer: 'We implement multiple layers of security including encryption for data in transit and at rest, strict access controls with multi-factor authentication, regular security assessments, and comprehensive audit logging. Our infrastructure is designed with security as a foundational principle.',
    },
    {
      question: 'How do you stay compliant with changing regulations?',
      answer: 'Our team continuously monitors updates from the ATO, Fair Work Commission, and other regulatory bodies. We implement changes proactively, often before they become mandatory, ensuring your payroll remains compliant at all times.',
    },
    {
      question: 'What happens if there is a security incident?',
      answer: 'We have documented incident response procedures in place. In the unlikely event of a security incident, we would immediately investigate, contain, and remediate the issue, while keeping you informed throughout the process in accordance with our notification obligations.',
    },
    {
      question: 'How long do you retain payroll records?',
      answer: 'We retain payroll records for the legally required period of 7 years in accordance with Australian taxation and employment law requirements. Records are stored securely and can be accessed when needed for audits or enquiries.',
    },
    {
      question: 'Can you help if we are audited by the ATO or Fair Work?',
      answer: 'Yes, we maintain comprehensive records and documentation to support any audits or enquiries. We can provide all necessary payroll records, calculations, and supporting documentation, and can assist with responding to audit requests.',
    },
    {
      question: 'Who has access to our payroll data?',
      answer: 'Access to your data is strictly limited to authorised team members who require it to provide your payroll services. We implement role-based access controls and regularly review access permissions to ensure the principle of least privilege is maintained.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-white rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border border-white/20">
              <ShieldIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your data security and regulatory compliance are our top priorities.
              We implement robust measures to protect your business and employee information
              while ensuring full compliance with Australian regulations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </span>
            <h2 className="text-gray-900 mb-6">
              Security You Can Trust
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We understand the sensitive nature of payroll data and take our responsibility
              to protect it seriously. Our commitment to security and compliance is woven
              into everything we do.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card card-hover h-full text-center">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Data Security
            </span>
            <h2 className="text-gray-900 mb-6">
              Protecting Your Information
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We employ comprehensive security measures to safeguard your payroll
              data and maintain the trust you place in us.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card card-hover h-full text-center">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              How We Protect You
            </span>
            <h2 className="text-gray-900 mb-6">
              Our Security Practices
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A comprehensive approach to security across all aspects of our operations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card h-full">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {practice.description}
                  </p>
                  <ul className="space-y-3">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-3 h-3 text-primary-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Data Protection
              </span>
              <h2 className="text-gray-900 mb-6">
                Your Privacy Matters
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We understand the sensitive nature of payroll data. Our comprehensive
                data protection framework ensures your information remains secure
                and confidential at all times, in full compliance with the Privacy Act
                and Australian Privacy Principles.
              </p>

              <ul className="space-y-4">
                {dataProtection.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="max-w-md mx-auto">
                <div className="relative z-0">
                  <div className="aspect-square rounded-3xl gradient-bg p-8 flex items-center justify-center relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full border border-white/20">
                      <div className="text-center mb-8">
                        <LockIcon className="w-16 h-16 text-white mx-auto mb-4" />
                        <h3 className="text-white text-xl font-display font-semibold">
                          Secure by Design
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {['Encryption', 'Access Control', 'Monitoring', 'Backup', 'Compliance'].map((item, i) => (
                          <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                            <span className="text-white/80">{item}</span>
                            <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
                              <CheckIcon className="w-3 h-3 text-green-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-100 rounded-2xl z-0" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-100 rounded-2xl z-0" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Regulatory Compliance
            </span>
            <h2 className="text-gray-900 mb-6">
              Meeting Australian Standards
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We maintain strict compliance with all relevant Australian payroll
              regulations and reporting requirements, staying ahead of changes
              to ensure your business is always compliant.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card h-full">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-2.5 h-2.5 text-primary-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-gray-900 mb-6">
              Security & Compliance FAQ
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Answers to frequently asked questions about our security measures
              and compliance practices.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="card">
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Questions About Our Security?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We are happy to discuss our security measures and compliance
              practices in more detail. Our team is available to answer any
              questions you may have about how we protect your data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link href="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
