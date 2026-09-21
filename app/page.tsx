import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import Fancybox from '@/components/Fancybox';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProvideSection from '@/components/ProvideSection';
import StatisticSection from '@/components/StatisticSection';
import CaseStudyCarousel from '@/components/CaseStudyCarousel';
import TeamSection from '@/components/TeamSection';
import ContactForm from '@/components/ContactForm';
import BlogSection from '@/components/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Fancybox />
      <AboutSection />
      <ServicesSection />
      <ProvideSection />
      <StatisticSection />
      <CaseStudyCarousel />
      <TeamSection />
      <ContactForm />
      <BlogSection />
    </>
  );
}
