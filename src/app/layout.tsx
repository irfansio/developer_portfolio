import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { developerProfile } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#0b0f17',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mohammedirfan.dev'),
  title: `${developerProfile.name} | ${developerProfile.title} - Scalable Systems & 3D Web`,
  description:
    'Full-Stack Software Engineer with 3+ years of experience specializing in the MERN stack, Next.js, real-time enterprise platforms, Three.js 3D experiences, and AWS cloud architectures.',
  keywords: [
    'Mohammed Irfan',
    'Full-Stack Software Engineer',
    'Next.js Developer',
    'MERN Stack',
    'Three.js Portfolio',
    'Real-time Dashboards',
    'WebSocket Systems',
    'Safetik Solutions',
    'Ebhoom',
    'OCEMS KSPCB Environmental Monitoring',
    'TypeScript Engineer',
  ],
  authors: [{ name: developerProfile.name, url: developerProfile.github }],
  creator: developerProfile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammedirfan.dev',
    title: `${developerProfile.name} | ${developerProfile.title}`,
    description: developerProfile.summary,
    siteName: `${developerProfile.name} Portfolio`,
    images: [
      {
        url: '/projects/safetik-map-dashboard.png',
        width: 1200,
        height: 630,
        alt: `${developerProfile.name} - Full-Stack Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${developerProfile.name} | ${developerProfile.title}`,
    description: developerProfile.summary,
    images: ['/projects/safetik-map-dashboard.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: developerProfile.name,
    jobTitle: developerProfile.title,
    email: developerProfile.email,
    telephone: developerProfile.phone,
    url: developerProfile.github,
    sameAs: [developerProfile.github],
    knowsAbout: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'Three.js',
      'Tailwind CSS',
      'WebSockets',
      'Docker',
      'AWS',
      'Real-Time Telemetry Systems',
    ],
    description: developerProfile.summary,
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0b0f17] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
