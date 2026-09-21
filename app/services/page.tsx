import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'Services 2 - Consulto',
  description: 'What We Provide For Your Business.',
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services 2" currentPage="Services 2" />
      <ServicesSection variant="services-2" />
      <BlogSection />
    </>
  );
}
