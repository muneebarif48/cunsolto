'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const slides = [
    {
      bg: '/images/header/01_header.jpg',
      headline: 'Quality is the best business plan',
      text: 'Consulto specially designed for Consulting and Finance industry, Financial Advisors, Accountants, Consultants or other Finance and Consulting related businesses.',
      btn1Text: 'Get Started',
      btn1Link: '#start',
      btn2Text: 'Our Services',
      btn2Link: '/services',
    },
    {
      bg: '/images/header/02_header.jpg',
      headline: 'Consulto Helps You To Save Your Money',
      text: 'Consulto specially designed for Consulting and Finance industry, Financial Advisors, Accountants, Consultants or other Finance and Consulting related businesses.',
      btn1Text: 'See More',
      btn1Link: '/about',
      btn2Text: undefined,
      btn2Link: undefined,
    },
    {
      bg: '/images/header/03_header.jpg',
      headline: 'Best Creative Team With Smart Ideas',
      text: 'Consulto specially designed for Consulting and Finance industry, Financial Advisors, Accountants, Consultants or other Finance and Consulting related businesses.',
      btn1Text: 'Our Services',
      btn1Link: '/services',
      btn2Text: undefined,
      btn2Link: undefined,
    },
  ];

  return (
    <header className="header" id="page">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="header-owl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="sec-hero display-table"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="banner">
                        <h1 className="headline">{slide.headline}</h1>
                        <p className="about-site">{slide.text}</p>
                        <div className="buttons">
                          {slide.btn1Link.startsWith('#') ? (
                            <a href={slide.btn1Link} className="btn-1 move-section">
                              {slide.btn1Text}
                            </a>
                          ) : (
                            <Link href={slide.btn1Link} className="btn-1 btn-3">
                              {slide.btn1Text}
                            </Link>
                          )}
                          {slide.btn2Text && slide.btn2Link && (
                            <Link href={slide.btn2Link} className="btn-1 btn-2">
                              {slide.btn2Text}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
