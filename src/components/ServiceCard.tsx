'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { serviceIcons, ArrowRightIcon } from './Icons';

interface ServiceCardProps {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  index: number;
}

export default function ServiceCard({
  id,
  title,
  shortDescription,
  icon,
  index,
}: ServiceCardProps) {
  const IconComponent = serviceIcons[icon] || serviceIcons.payroll;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/services/${id}`} className="block group">
        <div className="card card-hover h-full">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {shortDescription}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-primary-600 font-medium">
            <span>Learn more</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
