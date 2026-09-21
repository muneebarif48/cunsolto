'use client';

import React from 'react';

export default function BackToTop() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-up">
      <a href="#page" className="move-section" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fas fa-long-arrow-alt-up"></i>
      </a>
    </div>
  );
}
