import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export default function NotFound() {
  return (
    <>
      <PageBanner title="Error 404" currentPage="Error 404" />
      <section className="page-404-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2>
                4<span>0</span>4
              </h2>
              <p>
                Consulto Specially Designed For Consulting And Finance Industry, Financial
                Advisors, Accountants, Consultants Or Other Finance And Consulting Related
                Businesses.
              </p>
              <Link href="/" className="btn-1">
                Go Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
