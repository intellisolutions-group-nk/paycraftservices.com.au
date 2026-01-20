interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper functions to generate common schema types

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  provider: {
    name: string;
    url: string;
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    serviceType: 'Payroll Services',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://paycraftservices.com.au/#business',
    name: 'PayCraft',
    legalName: 'Pay Craft Service Pty Ltd',
    description: 'Professional payroll processing, salary payments, superannuation, and compliance services for Australian businesses.',
    url: 'https://paycraftservices.com.au',
    logo: 'https://paycraftservices.com.au/PayCraftLogo.png',
    image: 'https://paycraftservices.com.au/PayCraftLogo.png',
    email: 'info@paycraftservices.com.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 15, 2 Patricia Street',
      addressLocality: 'Mays Hill',
      addressRegion: 'NSW',
      postalCode: '2145',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8167,
      longitude: 150.9833,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Bank Transfer, Direct Debit',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Payroll Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Payroll Processing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Salary & Wage Payments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Superannuation Processing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'STP Support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Payroll Outsourcing',
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PayCraft',
      url: 'https://paycraftservices.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PayCraft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://paycraftservices.com.au/PayCraftLogo.png',
      },
    },
  };
}
