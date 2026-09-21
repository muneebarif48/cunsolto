import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'Blog Grid - Consulto',
  description: 'Get Every Single Updates From Here.',
};

export default function BlogGridPage() {
  return (
    <>
      <PageBanner title="Blog Grid" currentPage="Blog Grid" />
      <BlogSection variant="blog-grid" />
    </>
  );
}
