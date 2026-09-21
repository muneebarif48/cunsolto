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
    default: 'Consulto - Financial & Business Consulting Services',
    template: '%s - Consulto Consulting',
  },
  description:
    'Consulto provides expert financial advisory, strategic planning, tax efficiency, and business consulting services for corporate and enterprise growth.',
  keywords: [
    'consulting',
    'financial advisor',
    'business strategy',
    'accountant',
    'tax planning',
    'corporate finance',
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
