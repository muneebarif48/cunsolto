import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive financial advisory, strategy planning, and restructuring services.',
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" currentPage="Services" />
      <ServicesSection variant="services-2" />
      <BlogSection />
    </>
  );
}
