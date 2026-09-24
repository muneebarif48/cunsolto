import React from 'react';

const processSteps = [
  {
    icon: 'fas fa-comments',
    title: '01. Discuss Your Academic Challenge',
    desc: 'Share your assignment brief, dissertation topic, research project or academic concern.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '02. Receive Expert Guidance',
    desc: 'Get recommendations, research direction and structured academic support.',
  },
  {
    icon: 'fas fa-pen',
    title: '03. Develop Your Work',
    desc: 'Apply the guidance, strengthen your research and improve your academic structure.',
  },
  {
    icon: 'fas fa-check-double',
    title: '04. Review & Refine',
    desc: 'Receive feedback and make final improvements before submission.',
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
              <h2>Our Process</h2>
              <h3>Our Academic Support Process</h3>
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
