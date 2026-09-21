import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'Our Blog - Consulto',
  description: 'Get Every Single Updates From Here.',
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Our Blog" currentPage="Our Blog" />
      <BlogSection variant="default" />
    </>
  );
}
