import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import CaseStudyGrid from '@/components/CaseStudyGrid';

export const metadata: Metadata = {
  title: 'Case Studies 2 - Consulto',
  description: 'Let us Have a Look All Our Latest Projects.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner title="Case Studies 2" currentPage="Case Studies 2" />
      <CaseStudyGrid />
    </>
  );
}
