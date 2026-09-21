import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';

interface ServicesSectionProps {
  variant?: 'default' | 'services-2';
}

export default function ServicesSection({ variant = 'default' }: ServicesSectionProps) {
  if (variant === 'services-2') {
    return (
      <section className="services services-2 py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="sec-title sec-title-2 text-center">
                <h2>Our Services</h2>
                <h3>We creating solutions for your organization.</h3>
                <p>
                  Consulto specially designed for Consulting and Finance industry, Financial
                  Advisors, Accountants, Consultants or other Finance and Consulting related
                  businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {servicesData.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="services-item">
                  <i className={item.icon}></i>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <Link href={item.href} className="more">
                    <span className="fas fa-arrow-right"></span> read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services py-100-70">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-5">
              <h2>Services</h2>
              <h3>What We Provide For Your Business.</h3>
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
          {servicesData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="services-item">
                <i className={item.icon}></i>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <Link href={item.href} className="more">
                  <span className="fas fa-arrow-right"></span> read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
