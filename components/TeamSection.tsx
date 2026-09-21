import React from 'react';
import Image from 'next/image';
import { teamData } from '@/data/team';

export default function TeamSection() {
  return (
    <section className="team py-100-70">
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-5">
              <h2>Our Team Member</h2>
              <h3>Discover Our Team And Experts.</h3>
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
          {teamData.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4">
              <div className="team-item">
                <div className="img-box">
                  <Image
                    className="img-fluid"
                    src={member.image}
                    alt={member.name}
                    width={370}
                    height={380}
                  />
                </div>
                <div className="text-box text-center">
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>
                  <ul>
                    {member.socials.facebook && (
                      <li>
                        <a href={member.socials.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.twitter && (
                      <li>
                        <a href={member.socials.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.instagram && (
                      <li>
                        <a href={member.socials.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.dribbble && (
                      <li>
                        <a href={member.socials.dribbble}>
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
