import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import Fancybox from '@/components/Fancybox';
import AboutSection from '@/components/AboutSection';
import ProvideSection from '@/components/ProvideSection';
import StatisticSection from '@/components/StatisticSection';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Consulto, our mission, expert financial advisors, and company history.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" currentPage="About Us" />
      <Fancybox variant="fancybox-2" />
      <AboutSection variant="about-2" />
      <ProvideSection />
      <StatisticSection />
      <BlogSection />
    </>
  );
}
