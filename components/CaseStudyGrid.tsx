'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudiesData } from '@/data/caseStudies';

type FilterType = 'all' | 'business' | 'consulting' | 'finance' | 'investing';

export default function CaseStudyGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredItems =
    activeFilter === 'all'
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.filterCategory === activeFilter);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Business', value: 'business' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Finance', value: 'finance' },
    { label: 'Investing', value: 'investing' },
  ];

  return (
    <section className="case-study case-study-2 py-100-70">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="sec-title sec-title-2 text-center">
              <h2>Case Study</h2>
              <h3>Let&apos;s Have a Look All Our Latest Projects.</h3>
              <p>
                Consulto specially designed for Consulting and Finance industry, Financial
                Advisors, Accountants, Consultants or other Finance and Consulting related
                businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study-list text-center">
          <ul className="list-name-case">
            {filters.map((f) => (
              <li
                key={f.value}
                className={activeFilter === f.value ? 'active mixitup-control-active' : ''}
                onClick={() => setActiveFilter(f.value)}
                style={{ cursor: 'pointer' }}
              >
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="row all-case-study">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-sm-6 col-md-6 col-lg-4 mix ${item.filterCategory}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
