import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerCompanyLinks, footerQuickLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="logo">
              <Image
                className="img-fluid"
                src="/images/logo/02_logo.png"
                alt="Footer Logo"
                width={150}
                height={40}
              />
              <p>
                Assignment Deck provides academic support, research guidance, dissertation help,
                proofreading and tutoring for UK university students since 2019.
              </p>
              <ul>
                <li>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Dribbble">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="footer-title">
              <h4>Company</h4>
            </div>
            <ul className="links">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="footer-title">
              <h4>Links</h4>
            </div>
            <ul className="links">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            @ 2026 Assignment Deck. Built by{' '}
            <a
              href="https://themeforest.net/user/ar-coder/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              AR-Coder
            </a>
          </p>
          <ul>
            <li>
              <a href="#">Terms &amp; Conditions </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
