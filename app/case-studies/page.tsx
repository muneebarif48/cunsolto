import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import CaseStudyGrid from '@/components/CaseStudyGrid';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our portfolio of successful business development, merger & acquisition, and financial planning projects.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner title="Case Studies" currentPage="Case Studies" />
      <CaseStudyGrid />
    </>
  );
}
