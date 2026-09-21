'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { caseStudiesData } from '@/data/caseStudies';

import 'swiper/css';
import 'swiper/css/navigation';

export default function CaseStudyCarousel() {
  return (
    <section className="case-study py-100">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-5">
              <h2>Case Study</h2>
              <h3>Let&apos;s Have a Look All Our Latest Projects.</h3>
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

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          className="owl-case-study"
        >
          {caseStudiesData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="case-item">
                <Image
                  className="img-fluid gallery-item-img"
                  src={item.image}
                  alt={item.title}
                  width={370}
                  height={260}
                />
                <div className="text-box d-flex align-content-between flex-wrap">
                  <ul className="tags">
                    {item.categoryTags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <li>
                          <a href="#">{tag}</a>
                        </li>
                        {idx < item.categoryTags.length - 1 && <li>,</li>}
                      </React.Fragment>
                    ))}
                  </ul>
                  <div className="content-text">
                    <h4>
                      <Link href={item.href}>{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                    <Link href={item.href} className="more">
                      <span className="fas fa-arrow-right"></span> read more
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
