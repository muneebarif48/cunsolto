import React from 'react';

interface FancyboxProps {
  variant?: 'default' | 'fancybox-2';
}

export default function Fancybox({ variant = 'default' }: FancyboxProps) {
  const items = [
    {
      icon: 'flaticon-bar-chart',
      title: 'Creative Solution',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry simply dummy text typesetting.',
    },
    {
      icon: 'flaticon-laptop',
      title: 'Diverse Approach',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry simply dummy text typesetting.',
    },
    {
      icon: 'flaticon-mortgage-loan',
      title: 'Detailed Reports',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry simply dummy text typesetting.',
    },
    {
      icon: 'flaticon-businessman',
      title: 'Professional Team',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry simply dummy text typesetting.',
    },
  ];

  if (variant === 'fancybox-2') {
    return (
      <section className="fancybox fancybox-2">
        <div className="container-fluid">
          <div className="row">
            {items.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 p-0">
                <div className="fancybox-item">
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

  return (
    <section className="fancybox py-100-70" id="start">
      <div className="container">
        <div className="row">
          {items.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="fancybox-item">
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
