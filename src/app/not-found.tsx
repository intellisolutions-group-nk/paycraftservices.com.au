import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found - PayCraft',
  description: 'The page you are looking for does not exist or has been moved. Return to PayCraft homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center gradient-bg">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-9xl font-display font-bold text-white/20 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
