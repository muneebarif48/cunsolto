import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProcessSection from '@/components/ProcessSection';
import SubjectsSection from '@/components/SubjectsSection';
import BlogSection from '@/components/BlogSection';
import FinalCtaSection from '@/components/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Academic Support Services for UK University Students | Assignment Deck',
  description:
    'Explore academic support services including assignment work, research guidance, dissertation support, homework help, essay guidance and proofreading for UK students.',
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Academic Support Services Designed for Student Success"
        currentPage="Services"
        subtitle="Academic Guidance, Research Support & Tutoring That Helps You Learn"
        description="At Assignment Deck, we help university students strengthen their academic work through assignments, research guidance, tutoring, proofreading and structured feedback."
      />
      <ServicesSection variant="services-2" />
      <WhyChooseSection />
      <ProcessSection />
      <SubjectsSection />
      <BlogSection />
      <FinalCtaSection />
    </>
  );
}
