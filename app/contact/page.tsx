import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import StatisticSection from '@/components/StatisticSection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Consulto',
  description: 'Get Every Updates. Send us a message.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" currentPage="Contact Us" />
      <StatisticSection />
      <ContactForm />
    </>
  );
}
