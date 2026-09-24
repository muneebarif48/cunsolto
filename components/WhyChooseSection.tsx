import React from 'react';

const whyChooseItems = [
  {
    icon: 'fas fa-brain',
    title: 'Academic Guidance Beyond AI',
    desc: 'AI can generate content. Strong academic work requires understanding, research and critical thinking.',
  },
  {
    icon: 'fas fa-user-check',
    title: 'Student-Focused Support',
    desc: 'Every student faces different academic challenges. Our guidance is tailored to individual needs and learning goals.',
  },
  {
    icon: 'fas fa-search',
    title: 'Research-Driven Approach',
    desc: 'We encourage stronger research habits, source evaluation and evidence-based academic writing.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Multiple Subject Coverage',
    desc: 'Support is available across a wide range of university-level subjects and disciplines.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Constructive Feedback',
    desc: 'Understand what needs improvement and how to strengthen your work before submission.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Professional & Confidential',
    desc: 'Students can seek guidance with confidence in a professional and supportive environment.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="services why-choose py-100-70">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-8">
              <h2>Why Choose Us</h2>
              <h3>Why Students Choose Assignment Deck</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {whyChooseItems.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="services-item">
                <i className={item.icon}></i>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
