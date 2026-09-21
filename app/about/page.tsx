import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import Fancybox from '@/components/Fancybox';
import AboutSection from '@/components/AboutSection';
import ProvideSection from '@/components/ProvideSection';
import StatisticSection from '@/components/StatisticSection';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'About Us 2 - Consulto',
  description: 'Mission of our company to give best service to customer.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us 2" currentPage="About Us 2" />
      <Fancybox variant="fancybox-2" />
      <AboutSection variant="about-2" />
      <ProvideSection />
      <StatisticSection />
      <BlogSection />
    </>
  );
}
