import React from 'react';

const processSteps = [
  {
    icon: 'fas fa-comments',
    title: '1. Share Your Academic Challenge',
    desc: 'Tell us about your assignment, research project or academic goals.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '2. Receive Structured Guidance',
    desc: 'Get recommendations, research direction and academic support tailored to your needs.',
  },
  {
    icon: 'fas fa-pen',
    title: '3. Improve Your Work',
    desc: 'Apply the guidance, strengthen your research and improve your academic structure.',
  },
  {
    icon: 'fas fa-check-double',
    title: '4. Submit With Confidence',
    desc: 'Move forward with greater clarity, understanding and confidence in your academic work.',
  },
];

export default function ProcessSection() {
  return (
    <section className="provide process py-100-70">
      <div className="bg-section">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-8">
              <h2>Our Approach</h2>
              <h3>How Our Academic Support Process Works</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {processSteps.map((step, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="provide-item">
                <i className={step.icon}></i>
                <div className="content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
