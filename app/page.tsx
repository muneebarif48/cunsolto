import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import StatisticSection from '@/components/StatisticSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProcessSection from '@/components/ProcessSection';
import SubjectsSection from '@/components/SubjectsSection';
import ContactForm from '@/components/ContactForm';
import FinalCtaSection from '@/components/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatisticSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <SubjectsSection />
      <ContactForm />
      <FinalCtaSection />
    </>
  );
}
