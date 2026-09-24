import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';

import '@/public/css/bootstrap.min.css';
import '@/public/fonts/fontawesome/css/all.min.css';
import '@/public/fonts/flaticon/css/flaticon.css';
import '@/public/css/style.css';
import '@/public/css/responsive.css';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Academic Support & Research Guidance for UK Students | Assignment Deck',
    template: '%s - Assignment Deck',
  },
  description:
    'Get expert academic support, research guidance, dissertation help, proofreading and tutoring. Supporting UK students since 2019. Book a consultation.',
  keywords: [
    'academic support',
    'research guidance',
    'dissertation help',
    'tutoring',
    'proofreading',
    'essay writing help',
    'UK university students',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
