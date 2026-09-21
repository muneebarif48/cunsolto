import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
  title: 'Our Team - Consulto',
  description: 'Discover Our Team And Experts.',
};

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" currentPage="Our Team" />
      <TeamSection />
    </>
  );
}
