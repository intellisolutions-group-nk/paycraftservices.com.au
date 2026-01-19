'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Success Icon */}
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-center text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  {message}
                </p>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="btn-primary w-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
