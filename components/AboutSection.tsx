import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AboutSectionProps {
  variant?: 'default' | 'about-2';
}

export default function AboutSection({ variant = 'default' }: AboutSectionProps) {
  if (variant === 'about-2') {
    return (
      <section className="about about-2 py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-box">
                <div className="about-img">
                  <Image
                    className="img-fluid"
                    src="/images/about/03_about.jpg"
                    alt="Consulto corporate office and team meeting"
                    width={540}
                    height={400}
                  />
                </div>
                <div className="statistic-item">
                  <i className="flaticon-summit"></i>
                  <div className="content">
                    <div className="counter">40</div>
                    <div className="counter-name">Years Of Experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-box">
                <div className="sec-title">
                  <h2>About Us</h2>
                  <h3>Mission of our company to give best service to customer.</h3>
                  <p>
                    Consulto specially designed for Consulting and Finance industry, Financial
                    Advisors, Accountants, Consultants or other Finance and Consulting related
                    businesses.
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tmpor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna
                  aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <Link href="/about" className="btn-1 btn-3">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-box">
              <div className="sec-title">
                <h2>About Us</h2>
                <h3>Mission of our company to give best service to customer.</h3>
                <p>
                  Consulto specially designed for Consulting and Finance industry, Financial
                  Advisors, Accountants, Consultants or other Finance and Consulting related
                  businesses.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fas fa-arrow-right"></i> Dedicated 24/7 customer support
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Engage - marketing automation
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Acquire - live chat enables sales
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Learn from customer feedback
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Growth - scale your financial strategy
                </li>
              </ul>
              <Link href="/about" className="btn-1 btn-3">
                See More
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row img-box">
              <div className="col">
                <div className="one">
                  <Image
                    className="img-fluid"
                    src="/images/about/01_about.jpg"
                    alt="Consulto financial advisor working with client"
                    width={250}
                    height={350}
                  />
                </div>
              </div>
              <div className="col">
                <div className="two">
                  <Image
                    className="img-fluid"
                    src="/images/about/02_about.jpg"
                    alt="Consulto business strategy consultation session"
                    width={250}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
