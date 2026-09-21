import React from 'react';
import Link from 'next/link';

interface PageBannerProps {
  title: string;
  currentPage: string;
}

export default function PageBanner({ title, currentPage }: PageBannerProps) {
  return (
    <section className="breadcrumb-header" id="page">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner">
              <h1>{title}</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="fas fa-angle-right"></i>
                </li>
                <li>{currentPage}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
