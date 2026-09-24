import React from 'react';
import Link from 'next/link';

const closingStats = [
  { icon: 'fas fa-user-graduate', value: '1000+', label: 'Students Supported' },
  { icon: 'fas fa-project-diagram', value: '500+', label: 'Projects Guided' },
  { icon: 'fas fa-calendar-check', value: 'Since 2019', label: 'Supporting Students' },
];

export default function FinalCtaSection() {
  return (
    <section className="provide final-cta py-100">
      <div className="bg-section">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="sec-title text-center">
              <h2>Research. Learn. Improve.</h2>
              <h3>Your Academic Success Starts with Better Guidance</h3>
              <p>
                Get the academic support, feedback and guidance you need to approach your studies
                with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="row active-dark-mode justify-content-center">
          {closingStats.map((stat, idx) => (
            <div key={idx} className="col-sm-6 col-lg-3">
              <div className="statistic-item">
                <i className={stat.icon}></i>
                <div className="content">
                  <div className="counter">{stat.value}</div>
                  <div className="counter-name">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div
              className="buttons"
              style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link href="/contact" className="btn-1">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="btn-1 btn-2">
                Contact Our Team Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
