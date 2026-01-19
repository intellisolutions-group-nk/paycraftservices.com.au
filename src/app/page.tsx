import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import { CheckIcon, ShieldIcon, ClockIcon, UsersIcon, ChartIcon, CogIcon, ArrowRightIcon } from '@/components/Icons';
import servicesData from '@/data/services.json';
import companyData from '@/data/company.json';

export default function HomePage() {
  const features = [
    {
      icon: ClockIcon,
      title: 'Timely Processing',
      description: 'On-time payroll processing every pay cycle, ensuring your employees are paid accurately and promptly.',
    },
    {
      icon: ShieldIcon,
      title: 'Secure & Compliant',
      description: 'Your data is protected with robust security measures while ensuring full regulatory compliance.',
    },
    {
      icon: UsersIcon,
      title: 'Dedicated Support',
      description: 'Our team of payroll specialists is here to support your business every step of the way.',
    },
    {
      icon: ChartIcon,
      title: 'Accurate Reporting',
      description: 'Comprehensive payroll reports and analytics to help you make informed business decisions.',
    },
  ];

  const benefits = [
    'End-to-end payroll management',
    'Single Touch Payroll (STP) compliant',
    'Superannuation processing',
    'Tax calculations and reporting',
    'Employee payslip generation',
    'Compliance with Australian regulations',
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your business needs and payroll requirements to understand how we can best support you.',
    },
    {
      step: '02',
      title: 'Setup & Onboarding',
      description: 'Our team sets up your payroll system, imports employee data, and configures all necessary settings.',
    },
    {
      step: '03',
      title: 'Ongoing Processing',
      description: 'We handle your regular payroll processing, ensuring accurate calculations and timely payments.',
    },
    {
      step: '04',
      title: 'Reporting & Compliance',
      description: 'Receive detailed reports and rest easy knowing all compliance obligations are met.',
    },
  ];

  const testimonials = [
    {
      quote: 'Switching to PayCraft was one of the best decisions for our business. The accuracy and reliability of their payroll processing has saved us countless hours.',
      author: 'Sarah Mitchell',
      role: 'Business Owner',
    },
    {
      quote: 'The team at PayCraft truly understands Australian payroll requirements. Their STP reporting is seamless and we never worry about compliance anymore.',
      author: 'James Crawford',
      role: 'Operations Manager',
    },
    {
      quote: 'Professional, responsive, and thorough. PayCraft handles our superannuation and payroll with precision. Highly recommended for any business.',
      author: 'Emma Fitzgerald',
      role: 'Finance Director',
    },
  ];

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer: 'We work with Australian businesses of all sizes, from small enterprises to larger organisations. Our services are tailored to meet your specific payroll needs.',
    },
    {
      question: 'How does Single Touch Payroll (STP) work?',
      answer: 'STP is a reporting requirement where employers report payroll information to the ATO each time they pay their employees. We handle all STP submissions on your behalf.',
    },
    {
      question: 'What payroll frequencies do you support?',
      answer: 'We support all standard payroll frequencies including weekly, fortnightly, and monthly pay cycles. We can also accommodate custom pay schedules.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement industry-standard security measures including data encryption, secure access controls, and regular security audits to protect your sensitive information.',
    },
    {
      question: 'Can you handle superannuation contributions?',
      answer: 'Yes, we manage superannuation contributions including calculations, SuperStream compliant payments to funds, and quarterly reporting requirements.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-secondary-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <AnimatedSection delay={0.1}>
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                  Payroll Services for Australian Businesses
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h1 className="text-white mb-6 text-balance">
                  Simplify Your{' '}
                  <span className="text-secondary-300">Payroll</span>{' '}
                  Management
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                  Professional payroll processing, salary payments, and compliance services
                  tailored for Australian businesses. Let us handle your payroll so you can
                  focus on growth.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 hover:shadow-white/25">
                    Get Started
                  </Link>
                  <Link href="/services" className="btn-outline">
                    Our Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Visual Element */}
            <AnimatedSection delay={0.5} direction="left" className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <CogIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Payroll Processing</p>
                        <p className="text-white/60 text-sm">Automated & Accurate</p>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-white/60 text-sm mb-1">Compliance</p>
                        <p className="text-white font-semibold">STP Ready</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-white/60 text-sm mb-1">Processing</p>
                        <p className="text-white font-semibold">On-Time</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {['Salary Payments', 'Superannuation', 'Tax Compliance'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary-500/30 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-secondary-300" />
                          </div>
                          <span className="text-white/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500/20 rounded-2xl backdrop-blur-lg border border-white/10 flex items-center justify-center">
                  <ShieldIcon className="w-10 h-10 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-gray-900 mb-6">
              Comprehensive Payroll Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From payroll processing to compliance, we offer a complete range of services
              to streamline your business operations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-gray-900 mb-6">
              Getting Started Is Easy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our streamlined process ensures a smooth transition to professional payroll management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 text-white font-display font-bold text-xl shadow-lg shadow-primary-600/25">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-gray-900 mb-6">
                  Your Trusted Payroll Partner
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We understand the complexities of Australian payroll requirements.
                  Our team ensures your business stays compliant while you focus on what you do best.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-8">
                <Link href="/about" className="btn-secondary">
                  Learn More About Us
                </Link>
              </AnimatedSection>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className={index % 2 === 1 ? 'sm:mt-8' : ''}
                >
                  <div className="card h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hear from businesses that have streamlined their payroll with our services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
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
              FAQ
            </span>
            <h2 className="text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find answers to common questions about our payroll services.
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

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Ready to Streamline Your Payroll?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Get in touch with us today to discuss how we can help manage your
              payroll needs efficiently and compliantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Contact Us
              </Link>
              <a
                href={`mailto:${companyData.email}`}
                className="btn-outline"
              >
                {companyData.email}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
