'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import companyData from '@/data/company.json';
import servicesData from '@/data/services.json';
import { serviceIcons } from './Icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = pathname === '/services' || pathname.startsWith('/services/');

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <header
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg shadow-gray-200/50'
            : 'bg-transparent'
        }`}
      >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-primary-600/25 group-hover:shadow-xl group-hover:shadow-primary-600/30 transition-all duration-300">
              <span className="text-white font-display font-bold text-xl">P</span>
            </div>
            <span className={`font-display font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {companyData.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {companyData.navigation.header.map((item) => {
              // Special handling for Services with dropdown
              if (item.label === 'Services') {
                return (
                  <div key={item.href} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? isServicesActive
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          : isServicesActive
                            ? 'text-white'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isServicesActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                            isScrolled ? 'bg-primary-600' : 'bg-white'
                          }`}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {/* All Services Link */}
                            <Link
                              href="/services"
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">All Services</p>
                                <p className="text-xs text-gray-500">View all our services</p>
                              </div>
                            </Link>

                            <div className="h-px bg-gray-100 my-2" />

                            {/* Individual Services */}
                            {servicesData.services.map((service) => {
                              const IconComponent = serviceIcons[service.icon] || serviceIcons.payroll;
                              return (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                                    <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                                      {service.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular nav items
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                        isScrolled ? 'bg-primary-600' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25'
                  : 'bg-white text-primary-700 hover:bg-gray-100 hover:shadow-lg'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="container-custom py-6 space-y-2">
              {companyData.navigation.header.map((item, index) => {
                // Special handling for Services with accordion
                if (item.label === 'Services') {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isServicesActive
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-1"
                          >
                            <Link
                              href="/services"
                              className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            >
                              All Services
                            </Link>
                            {servicesData.services.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-4"
              >
                <Link href="/contact" className="btn-primary w-full text-center">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
