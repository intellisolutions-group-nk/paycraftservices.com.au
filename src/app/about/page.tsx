import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import JsonLd, { generateBreadcrumbSchema, generateWebPageSchema } from '@/components/JsonLd';
import {
  CheckIcon,
  UsersIcon,
  ShieldIcon,
  ClockIcon,
  ChartIcon,
  BuildingIcon,
} from '@/components/Icons';
import companyData from '@/data/company.json';

const baseUrl = 'https://paycraftservices.com.au';

export const metadata: Metadata = {
  title: 'About PayCraft - Your Trusted Payroll Partner in Australia',
  description: 'PayCraft (Pay Craft Service Pty Ltd) provides professional payroll and payment services for Australian businesses. Based in NSW, we offer reliable, accurate, and compliant payroll solutions.',
  keywords: [
    'about PayCraft',
    'PayCraft Australia',
    'Pay Craft Service Pty Ltd',
    'Australian payroll company',
    'payroll specialists NSW',
    'trusted payroll partner',
    'payroll services provider',
  ],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About PayCraft - Your Trusted Payroll Partner in Australia',
    description: 'Learn about PayCraft and our commitment to providing professional payroll and payment services for Australian businesses.',
    url: `${baseUrl}/about`,
    type: 'website',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'About', url: `${baseUrl}/about` },
]);

const aboutPageSchema = generateWebPageSchema(
  'About PayCraft',
  'Learn about PayCraft and our commitment to providing professional payroll and payment services for Australian businesses.',
  `${baseUrl}/about`
);

export default function AboutPage() {
  const values = [
    {
      icon: ShieldIcon,
      title: 'Trust & Integrity',
      description: 'We handle your sensitive payroll data with the utmost care and maintain the highest standards of integrity in all our operations.',
    },
    {
      icon: ClockIcon,
      title: 'Reliability',
      description: 'Consistent, on-time payroll processing you can depend on. We understand the importance of timely and accurate payments.',
    },
    {
      icon: UsersIcon,
      title: 'Client Focus',
      description: 'Your business needs are at the centre of everything we do. We work closely with you to deliver tailored solutions.',
    },
    {
      icon: ChartIcon,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, continuously improving to better serve your business.',
    },
  ];

  const whyChooseUs = [
    'Dedicated payroll professionals',
    'Australian-focused expertise',
    'Compliance with all regulations',
    'Secure and confidential',
    'Responsive support',
    'Scalable solutions',
  ];

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={aboutPageSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-secondary-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              Who We Are
            </span>
            <h1 className="text-white mb-6">
              About {companyData.brandName}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Professional payroll and payment services designed for Australian businesses.
              We are committed to making payroll management simple, accurate, and compliant.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-gray-900 mb-6">
                Your Payroll Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {companyData.brandName} was established to provide Australian businesses
                  with reliable, accurate, and compliant payroll services. We understand
                  the challenges that businesses face when managing payroll in-house, and
                  we are here to help.
                </p>
                <p>
                  Our team of payroll professionals brings extensive experience in
                  Australian payroll requirements, ensuring your business stays compliant
                  with all relevant regulations while your employees are paid accurately
                  and on time.
                </p>
                <p>
                  Based in New South Wales, we serve businesses across Australia,
                  offering tailored payroll solutions that scale with your needs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative z-0">
                <div className="aspect-[4/3] rounded-3xl gradient-bg p-8 flex items-center justify-center relative z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full border border-white/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <BuildingIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-display font-semibold text-lg">
                          {companyData.legalName}
                        </h3>
                        <p className="text-white/60 text-sm">ACN: {companyData.acn}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                        <p className="text-white">{companyData.state}, {companyData.country}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Services</p>
                        <p className="text-white">Payroll & Payment Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-2xl z-0" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary-100 rounded-2xl z-0" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our core values guide everything we do and ensure we deliver
              the highest quality service to our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card card-hover h-full text-center">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-gray-900 mb-6">
                The {companyData.brandName} Difference
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When you partner with {companyData.brandName}, you gain access to a team
                dedicated to making your payroll processes seamless and stress-free.
                We take care of the complexities so you can focus on growing your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our focus on Australian payroll requirements means we understand
                the nuances of local regulations, award conditions, and compliance
                obligations that your business needs to meet.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Let us handle your payroll while you focus on what you do best.
              Get in touch to discuss how we can support your business.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Contact Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
