'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AnimatedSection from '@/components/AnimatedSection';
import Modal from '@/components/Modal';
import { EnvelopeIcon, MapPinIcon, BuildingIcon } from '@/components/Icons';
import companyData from '@/data/company.json';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string(),
  company: yup.string(),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsModalOpen(true);
    reset();
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: companyData.email,
      href: `mailto:${companyData.email}`,
    },
    {
      icon: MapPinIcon,
      label: 'Address',
      value: companyData.address.full,
      href: null,
    },
    {
      icon: BuildingIcon,
      label: 'Business',
      value: `${companyData.legalName} (ACN: ${companyData.acn})`,
      href: null,
    },
  ];

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
              Get In Touch
            </span>
            <h1 className="text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about our payroll services? We are here to help.
              Reach out to us and we will get back to you as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="card">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="error-message">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="label">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="error-message">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="input-field"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="label">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register('company')}
                        className="input-field"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                      placeholder="Tell us about your payroll needs..."
                    />
                    {errors.message && (
                      <p className="error-message">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Get in touch with us to discuss your payroll requirements.
                    We are here to help your business succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {companyData.address.suburb}, {companyData.address.state}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {companyData.country}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
        message="Thank you for contacting us. We have received your message and will get back to you as soon as possible."
      />
    </>
  );
}
