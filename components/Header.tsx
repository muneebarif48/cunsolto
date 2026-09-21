'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavLinks } from '@/data/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('active-dark-mode');
      } else {
        document.body.classList.remove('active-dark-mode');
      }
      return next;
    });
  };

  const toggleSubmenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* :: Top Navbar */}
      <div className="top-nav-bar">
        <div className="container">
          <div className="top-nav-bar-box d-flex align-items-center justify-content-between">
            <ul className="info">
              <li>
                <span>Email:</span> AR-Coder@arcoder.com
              </li>
              <li>
                <span>Phone:</span> +(002) 0121-2843-661
              </li>
              <li>
                <span>Email:</span> Shibin El-Kom , El-Menoufia, Egypt
              </li>
            </ul>
            <ul className="icon-follow">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-rss"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* :: Navbar */}
      <nav className={`nav-bar ${isSticky ? 'active' : ''}`}>
        <div className="container">
          <div className="box-content d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/" className="logo-nav">
                <Image
                  className="img-fluid"
                  src="/images/logo/01_logo.png"
                  alt="01 Logo"
                  width={150}
                  height={40}
                  priority
                />
                <Image
                  className="img-fluid dark-mode-logo"
                  src="/images/logo/03_logo.png"
                  alt="03 Logo"
                  width={150}
                  height={40}
                  priority
                />
              </Link>
              <a
                href="#open-nav-bar-menu"
                className={`open-nav-bar ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>

            <div
              className={`nav-bar-link ${isMobileMenuOpen ? 'active' : ''}`}
              id="open-nav-bar-menu"
            >
              <ul className="level-1">
                {mainNavLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href) && link.href !== '#';

                  if (link.children) {
                    const isDropdownActive = link.children.some(
                      (child) => pathname === child.href
                    );
                    const isOpen = activeDropdown === link.label;

                    return (
                      <li key={link.label} className="has-menu">
                        <a
                          href="#"
                          className={`${isDropdownActive ? 'color-active' : ''} ${
                            isOpen ? 'active' : ''
                          }`}
                          onClick={(e) => toggleSubmenu(link.label, e)}
                        >
                          {link.label}
                        </a>
                        <ul className={`level-2 ${isOpen ? 'active' : ''}`}>
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={pathname === child.href ? 'color-active' : ''}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={isActive ? 'color-active' : ''}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="icon">
              <li>
                <a
                  href="#"
                  className="icon-item open-menu"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSideMenuOpen(true);
                  }}
                >
                  <i className="fas fa-th"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* :: Menu Box (Side Slide Panel) */}
      <div className={`menu-box ${isSideMenuOpen ? 'active' : ''}`}>
        <div className="inner-menu">
          <div className="website-info">
            <Link href="/" className="logo">
              <Image
                className="img-fluid"
                src="/images/logo/01_logo.png"
                alt="01 Logo"
                width={150}
                height={40}
              />
              <Image
                className="img-fluid dark-mode-logo"
                src="/images/logo/03_logo.png"
                alt="03 Logo"
                width={150}
                height={40}
              />
            </Link>
            <p>
              Consulto specially designed for Consulting and Finance industry, Financial
              Advisors, Accountants, Consultants or other Finance and Consulting related
              businesses.
            </p>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <div className="contact-box">
              <i className="flaticon-call"></i>
              <div className="box">
                <p>+(002) 0121-2843-661</p>
                <p>+(002) 0106-8710-594</p>
              </div>
            </div>
            <div className="contact-box">
              <i className="flaticon-email"></i>
              <div className="box">
                <p>AR-Coder@arcoder.com</p>
                <p>Support@arcoder.com</p>
              </div>
            </div>
            <div className="contact-box">
              <i className="flaticon-location"></i>
              <div className="box">
                <p>Menouf City , El-Menoufia, Egypt.</p>
                <p>Shibin El-Kom , El-Menoufia, Egypt.</p>
              </div>
            </div>
          </div>
          <div className="follow-us">
            <h4>Follow Us</h4>
            <ul className="icon-follow">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="exit-menu-box"
            onClick={() => setIsSideMenuOpen(false)}
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>

      {/* :: Dark Mode Button */}
      <div
        className="dark-mode-btn"
        onClick={toggleDarkMode}
        style={{ cursor: 'pointer' }}
      >
        <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </div>
    </>
  );
}
