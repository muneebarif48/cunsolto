import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogData } from '@/data/blog';

interface BlogSectionProps {
  variant?: 'default' | 'blog-list' | 'blog-grid';
}

export default function BlogSection({ variant = 'default' }: BlogSectionProps) {
  if (variant === 'blog-grid') {
    return (
      <section className="blog py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {blogData.map((post) => (
                  <div key={post.id} className="col-md-12">
                    <div className="blog-item">
                      <div className="img-box">
                        <Link href={post.href} className="open-post">
                          <Image
                            className="img-fluid"
                            src={post.image}
                            alt={post.title}
                            width={1170}
                            height={400}
                          />
                        </Link>
                        <ul>
                          {post.categories.map((cat, idx) => (
                            <React.Fragment key={idx}>
                              <li>
                                <a href="#">{cat}</a>
                              </li>
                              {idx < post.categories.length - 1 && <li>,</li>}
                            </React.Fragment>
                          ))}
                        </ul>
                      </div>
                      <div className="text-box">
                        <span className="blog-date">{post.date}</span>
                        <Link href={post.href} className="title-blog">
                          <h5>{post.title}</h5>
                        </Link>
                        <p>{post.summary}</p>
                        <Link href={post.href} className="link">
                          <span className="fas fa-arrow-right"></span> Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog py-100-70">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-5">
              <h2>Our Blog</h2>
              <h3>Get Every Single Updates From Here.</h3>
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
        <div className="row">
          {blogData.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="img-box">
                  <Link href={post.href} className="open-post">
                    <Image
                      className="img-fluid"
                      src={post.image}
                      alt={post.title}
                      width={370}
                      height={240}
                    />
                  </Link>
                  <ul>
                    {post.categories.map((cat, idx) => (
                      <React.Fragment key={idx}>
                        <li>
                          <a href="#">{cat}</a>
                        </li>
                        {idx < post.categories.length - 1 && <li>,</li>}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
                <div className="text-box">
                  <span className="blog-date">{post.date}</span>
                  <Link href={post.href} className="title-blog">
                    <h5>{post.title}</h5>
                  </Link>
                  <p>{post.summary}</p>
                  <Link href={post.href} className="link">
                    <span className="fas fa-arrow-right"></span> Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
