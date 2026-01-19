import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { serviceIcons, ArrowRightIcon } from '@/components/Icons';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Our Services - PayCraft',
  description: 'Comprehensive payroll processing, salary payments, superannuation, STP support, and payroll outsourcing services for Australian businesses.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary-400 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              What We Offer
            </span>
            <h1 className="text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive payroll and payment solutions designed to meet the needs
              of Australian businesses of all sizes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gray-900 mb-6">
              Complete Payroll Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From processing to compliance, we offer a full range of payroll services
              to keep your business running smoothly.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon] || serviceIcons.payroll;
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Link href={`/services/${service.id}`} className="block group h-full">
                    <div className="card card-hover h-full flex flex-col">
                      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary-600 font-medium">
                        <span>Learn more</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Every business is unique. Contact us to discuss how we can tailor
              our services to meet your specific payroll requirements.
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
