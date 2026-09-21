import React from 'react';
import VideoModal from './VideoModal';

export default function ProvideSection() {
  const provideItems = [
    {
      icon: 'flaticon-strategy',
      title: 'Marketing Strategy',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry.',
    },
    {
      icon: 'flaticon-business-report',
      title: 'Decision & Risk Analytic',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry.',
    },
    {
      icon: 'flaticon-bag',
      title: 'Organization & Decision',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry.',
    },
    {
      icon: 'flaticon-bank',
      title: 'Banking & Capital Market',
      desc: 'Lorem Ipsum simply dummy text of the printing typesetting industry.',
    },
  ];

  return (
    <section className="provide">
      <div className="bg-section">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-5">
              <h2>Who We Are</h2>
              <h3>We provide experts to create a great value for your business.</h3>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <p>
                Consulto specially designed for Consulting and Finance industry, Financial
                Advisors, Accountants, Consultants or other Finance and Consulting related
                businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {provideItems.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="provide-item">
                <i className={item.icon}></i>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <VideoModal />
          </div>
        </div>
      </div>
    </section>
  );
}
