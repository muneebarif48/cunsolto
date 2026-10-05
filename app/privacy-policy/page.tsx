import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy | Assignment Deck',
  },
  description:
    'Learn how Assignment Deck collects, uses and protects your personal data, and the rights you have under UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" currentPage="Privacy Policy" />
      <section className="single-services py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="single-services-box">
                <p>
                  <strong>Effective date:</strong> 2026
                </p>
                <p>
                  Your privacy matters to us. This policy explains what personal data Assignment Deck
                  collects, why we collect it, how we keep it safe and what rights you have. We follow
                  the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act
                  2018.
                </p>

                <h2>1. Who We Are</h2>
                <p>
                  Assignment Deck is the data controller for your personal data. Address: Regent
                  Street, London, United Kingdom. Email:{' '}
                  <a href="mailto:contact@assignmentdeck.com">contact@assignmentdeck.com</a>. Phone:{' '}
                  <a href="tel:+447456047603">+44 7456 047603</a>.
                </p>

                <h2>2. Data We Collect</h2>
                <p>
                  We do not ask for your university login details, student ID or passwords for any
                  university system.
                </p>

                <h2>3. How We Use Your Data</h2>
                <p>
                  We use your personal information to provide the services you order, process payments
                  and refunds, answer questions and support requests, improve our website and
                  services, send updates and offers where you have opted in, keep necessary records
                  for tax and accounting purposes, and prevent fraud, misuse, or unauthorized
                  activity.
                </p>

                <h2>4. Confidentiality and Sharing</h2>
                <p>We never sell your personal data. We never share your details with your university.</p>
                <p>We share data only with trusted providers who help us run our services, such as:</p>
                <ul>
                  <li>Payment processors ([Payment Provider])</li>
                  <li>Website hosting and IT providers</li>
                  <li>Email and communication tools</li>
                  <li>Analytics providers (for example, Google Analytics)</li>
                  <li>
                    Academic team members working on your request, who receive only what they need
                  </li>
                </ul>
                <p>
                  All providers must keep your data secure and use it only on our instructions. We may
                  also disclose data if the law requires it.
                </p>

                <h2>5. International Transfers</h2>
                <p>
                  Some providers may store data outside the UK. When this happens, we make sure
                  appropriate safeguards are in place, such as UK adequacy regulations or approved
                  contract clauses.
                </p>

                <h2>6. How Long We Keep Data</h2>
                <ul>
                  <li>Account and order data: for as long as your account is active, plus [X years]</li>
                  <li>
                    Uploaded files and delivered material: deleted within [X days] after order
                    completion, unless you ask us to keep them
                  </li>
                  <li>Payment and tax records: 6 years, as required by UK law</li>
                  <li>Marketing data: until you unsubscribe</li>
                </ul>

                <h2>7. How We Protect Your Data</h2>
                <p>
                  We use SSL encryption, secure payment processing, access controls and regular
                  security reviews. Only authorised team members can access your information, and only
                  when they need it.
                </p>

                <h2>8. Cookies</h2>
                <p>
                  We use cookies to keep the website working, remember your preferences and understand
                  how visitors use our site.
                </p>
                <ul>
                  <li>
                    <strong>Essential cookies:</strong> needed for the site to work
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> help us improve the site (used only with your
                    consent)
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> help us show relevant ads (used only with your
                    consent)
                  </li>
                </ul>
                <p>
                  You can change your cookie choices at any time through our cookie banner or your
                  browser settings.
                </p>

                <h2>9. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Restrict or object to how we use your data</li>
                  <li>Receive your data in a portable format</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  To use any of these rights, email{' '}
                  <a href="mailto:contact@assignmentdeck.com">contact@assignmentdeck.com</a>. We will
                  reply within one month.
                </p>

                <h2>10. Complaints</h2>
                <p>If you are unhappy with how we handle your data, please contact us first.</p>

                <h2>11. Children&apos;s Privacy</h2>
                <p>
                  Our services are intended for users aged 18 and over. We do not knowingly collect
                  data from children without parental consent.
                </p>

                <h2>12. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. The latest version will always be on
                  this page with the updated effective date.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                  For any privacy questions, email{' '}
                  <a href="mailto:contact@assignmentdeck.com">contact@assignmentdeck.com</a>, call{' '}
                  <a href="tel:+447456047603">+44 7456 047603</a>, or write to us at Regent Street,
                  London, United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
