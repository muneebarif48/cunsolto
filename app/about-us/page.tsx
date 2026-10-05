import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'About Assignment Deck | Academic Support for UK Students',
  },
  description:
    'Assignment Deck helps UK university students build research, writing and critical thinking skills through expert academic guidance. Learn our story.',
};

const services = [
  {
    icon: 'fas fa-pencil-alt',
    title: 'Homework Help',
    description: 'Understand requirements and plan the work.',
  },
  {
    icon: 'fas fa-search',
    title: 'Research Support',
    description: 'Find credible sources and build stronger arguments.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Case Study Guidance',
    description: 'Apply theory and frameworks with confidence.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Dissertation Support',
    description: 'Plan chapters, methodology and literature reviews.',
  },
  {
    icon: 'fas fa-desktop',
    title: 'Presentation Support',
    description: 'Structure slides and communicate ideas clearly.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Business Plan Guidance',
    description: 'Shape market research, strategy and financial sections.',
  },
  {
    icon: 'fas fa-feather-alt',
    title: 'Essay Writing Help',
    description: 'Improve argument, structure and academic style.',
  },
];

const steps = [
  {
    icon: 'fas fa-clipboard-list',
    title: '1. Understand',
    description: 'We start with your brief, your marking criteria and where you feel stuck.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '2. Guide',
    description: 'Our academic team gives structured direction, examples and feedback.',
  },
  {
    icon: 'fas fa-pen',
    title: '3. Improve',
    description: 'You apply the guidance and strengthen your work.',
  },
  {
    icon: 'fas fa-check-double',
    title: '4. Grow',
    description: 'You take the skills into your next assignment, and the one after that.',
  },
];

const values = [
  {
    icon: 'fas fa-book-open',
    title: 'Learning over shortcuts',
    description: 'We focus on understanding, not quick fixes.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Honest guidance',
    description: "Clear feedback, even when it's not what you want to hear.",
  },
  {
    icon: 'fas fa-lock',
    title: 'Confidentiality',
    description: 'Your details and your work stay private.',
  },
  {
    icon: 'fas fa-user-check',
    title: 'Human expertise',
    description: 'Real academics, not automated answers.',
  },
  {
    icon: 'fas fa-clock',
    title: 'Respect for your time',
    description: 'Clear timelines and quick, reliable communication.',
  },
];

const subjects = [
  'Business',
  'Finance',
  'Marketing',
  'Computer Science',
  'Engineering',
  'Economics',
  'Psychology',
  'Nursing',
  'Education',
  'Law',
];

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Assignment Deck: Academic Support That Builds Real Skills"
        currentPage="About Us"
        wide
      />

      <section className="py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <p>
                University asks a lot of students. Deadlines stack up, topics get complex, and
                feedback often arrives too late to help.
              </p>
              <p>
                Assignment Deck exists to close that gap. We give UK university students structured
                academic guidance that helps them understand their work, improve it and grow more
                confident with every project.
              </p>
              <Link href="/contact" className="btn-1" style={{ marginTop: '10px' }}>
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about about-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-box">
                <div className="about-img">
                  <Image
                    className="img-fluid"
                    src="/images/about/03_about.jpg"
                    alt="Assignment Deck academic guidance session"
                    width={540}
                    height={400}
                  />
                </div>
                <div className="statistic-item">
                  <i className="flaticon-summit"></i>
                  <div className="content">
                    <div className="counter">2019</div>
                    <div className="counter-name">Supporting UK Students</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-box">
                <div className="sec-title">
                  <h2>Our Story</h2>
                  <h3>Most students don&apos;t struggle because they lack ability.</h3>
                </div>
                <p>
                  They struggle because nobody showed them how to research, write, structure an
                  argument or plan a large project.
                </p>
                <p>
                  Since 2019, we have worked with undergraduate and postgraduate students across the
                  UK to change that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="sec-title text-center">
                <h2>Our Mission</h2>
                <h3>
                  We help students turn every assignment into a chance to build skills that last
                  beyond university.
                </h3>
              </div>
              <p className="text-center">
                Research, critical thinking, academic writing and clear communication are the same
                skills employers look for. We help students develop them while they work through
                real academic challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services services-2 py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="sec-title sec-title-2 text-center">
                <h2>What We Do</h2>
                <h3>We offer academic support across the stages where students need it most</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((item) => (
              <div key={item.title} className="col-md-6 col-lg-4">
                <div className="services-item">
                  <i className={item.icon}></i>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="provide process py-100-70">
        <div className="bg-section">
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-8">
                <h2>How We Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {steps.map((step) => (
              <div key={step.title} className="col-md-6 col-lg-3">
                <div className="provide-item">
                  <i className={step.icon}></i>
                  <div className="content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services py-100-70">
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-8">
                <h2>What We Stand For</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {values.map((item) => (
              <div key={item.title} className="col-md-6 col-lg-4">
                <div className="services-item">
                  <i className={item.icon}></i>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="subjects py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="sec-title sec-title-2 text-center">
                <h2>Who We Support</h2>
              </div>
              <p className="text-center">
                We work with UK undergraduate and postgraduate students in Business, Finance,
                Marketing, Computer Science, Engineering, Economics, Psychology, Nursing, Education,
                Law and more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="widget text-center">
                <div className="widget-body">
                  <div className="tags">
                    <ul>
                      {subjects.map((subject) => (
                        <li key={subject}>
                          <a href="#">{subject}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="provide final-cta py-100">
        <div className="bg-section">
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="sec-title text-center">
                <h2>Ready to Work Smarter?</h2>
                <h3>Assignments end. The skills you build stay with you.</h3>
              </div>
              <p className="text-center" style={{ color: '#F9F9F9', marginBottom: '30px' }}>
                Tell us what you&apos;re working on and we&apos;ll show you how to approach it with
                clarity and confidence.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="buttons"
                style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <Link href="/contact" className="btn-1">
                  Get Academic Support
                </Link>
                <Link href="/contact" className="btn-1 btn-2">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
