import React from 'react';

const whyChooseItems = [
  {
    icon: 'fas fa-search',
    title: 'Research Skills Development',
    desc: 'We encourage stronger research habits, source evaluation and evidence-based academic writing.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Academic Feedback',
    desc: 'Understand what needs improvement and how to strengthen your work before submission.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Critical Thinking Support',
    desc: 'AI can generate content. Strong academic work requires understanding, research and critical thinking.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Academic Structure Guidance',
    desc: 'Support is available across a wide range of university-level subjects and disciplines.',
  },
  {
    icon: 'fas fa-check-double',
    title: 'Proofreading & Review',
    desc: 'Receive a final check on structure, clarity and academic quality before you submit.',
  },
  {
    icon: 'fas fa-user-check',
    title: 'Student Learning & Development',
    desc: 'Every student faces different academic challenges. Our guidance is tailored to individual needs and learning goals.',
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
              <h3>Human Academic Support Beyond AI</h3>
              <p>
                Many students use AI tools to generate information. The challenge is understanding
                the topic, evaluating sources and developing academically sound arguments. Human
                guidance and tutoring remain important for developing academic understanding and
                independent learning skills.
              </p>
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
