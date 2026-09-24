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
      headline: 'Academic Support & Research Guidance for University Students',
      subhead: 'Learn Better. Research Smarter. Submit with Confidence.',
      text: 'Assignment Deck helps students strengthen their academic work through expert guidance, research support, tutoring, proofreading and structured feedback.',
      btn1Text: 'Get Academic Support',
      btn1Link: '/services',
      btn2Text: 'Book a Free Consultation',
      btn2Link: '/contact',
    },
  ];

  return (
    <header className="header" id="page">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={slides.length > 1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={slides.length > 1}
        pagination={slides.length > 1 ? { clickable: true } : false}
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
                        <h1 className="handline">{slide.headline}</h1>
                        <p className="about-site" style={{ fontWeight: 700, marginBottom: '10px' }}>
                          {slide.subhead}
                        </p>
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
