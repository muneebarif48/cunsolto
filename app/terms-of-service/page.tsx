import React from 'react';
import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service | Assignment Deck',
  },
  description:
    "Read the terms that apply when you use Assignment Deck's academic support services, including orders, payments, refunds and acceptable use.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageBanner title="Terms of Service" currentPage="Terms of Service" />
      <section className="single-services py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="single-services-box">
                <p>
                  <strong>Effective date:</strong> 2026
                </p>
                <p>
                  These Terms of Service (&quot;Terms&quot;) explain the rules for using
                  assignmentdeck.com and the services offered by Assignment Deck (&quot;we&quot;,
                  &quot;us&quot;, &quot;our&quot;). By using our website or placing an order, you
                  agree to these Terms. If you do not agree, please do not use our services.
                </p>

                <h2>1. About Us</h2>
                <p>
                  Assignment Deck is based at Regent Street, London, United Kingdom. You can contact
                  us at <a href="mailto:contact@assignmentdeck.com">contact@assignmentdeck.com</a> or{' '}
                  <a href="tel:+447456047603">+44 7456 047603</a>.
                </p>

                <h2>2. Our Services</h2>
                <p>
                  We provide academic support services, including tutoring, research guidance,
                  feedback, proofreading, and model or reference material. Our services are designed
                  to help you learn, understand your subject and improve your own academic work.
                </p>
                <p>All material we provide is for guidance, study and reference purposes only.</p>

                <h2>3. Eligibility</h2>
                <p>
                  You must be at least 18 years old, or have permission from a parent or guardian, to
                  use our services. You are responsible for making sure the information you give us
                  is accurate and complete.
                </p>

                <h2>4. Orders and Requirements</h2>
                <ul>
                  <li>An order is confirmed only after we accept it and receive payment.</li>
                  <li>
                    You must share clear instructions, deadlines and any relevant files when you
                    place an order.
                  </li>
                  <li>
                    If your instructions change after confirmation, the price or delivery time may
                    change too.
                  </li>
                  <li>
                    We may decline any order at our discretion. If we do, we will refund any payment
                    in full.
                  </li>
                </ul>

                <h2>6. Pricing and Payment</h2>
                <ul>
                  <li>
                    Prices are shown in GBP (£) and include any applicable taxes unless stated
                    otherwise.
                  </li>
                  <li>Payments are processed securely by Stripe, Paypal, etc.</li>
                  <li>
                    Prices may change, but a change will never affect an order we have already
                    confirmed.
                  </li>
                </ul>

                <h2>7. Delivery</h2>
                <p>
                  We aim to deliver every order by the agreed deadline. Delays can happen for reasons
                  outside our control. If we expect a delay, we will tell you as early as possible
                  and offer options, including a refund where appropriate.
                </p>

                <h2>8. Revisions</h2>
                <p>
                  If delivered work does not match your original instructions, you can request free
                  revisions within [——] of delivery. Revisions must relate to the original
                  instructions. New requirements count as a new order.
                </p>

                <h2>9. Cancellations and Refunds</h2>
                <ul>
                  <li>
                    <strong>Before work starts:</strong> you can cancel for a full refund.
                  </li>
                  <li>
                    <strong>After work starts:</strong> you may receive a partial refund based on
                    work already completed.
                  </li>
                  <li>
                    <strong>After delivery:</strong> refunds are available only if the work clearly
                    fails to meet your original instructions and a revision has not fixed it.
                  </li>
                  <li>
                    Refund requests must be sent to{' '}
                    <a href="mailto:contact@assignmentdeck.com">contact@assignmentdeck.com</a> within
                    [X days] of delivery.
                  </li>
                  <li>
                    Approved refunds are returned to your original payment method within [X days].
                  </li>
                </ul>
                <p>This section does not affect your statutory rights under UK consumer law.</p>

                <h2>10. Responsible Use of Our Material</h2>
                <p>
                  You agree to use the material we provide responsibly and in line with your
                  institution&apos;s academic rules. Our material is meant to support your learning
                  and to be used as a reference for your own work.
                </p>
                <p>You are responsible for how you use any material you receive from us.</p>

                <h2>11. Intellectual Property</h2>
                <p>
                  All content on our website, including text, design, logos and graphics, belongs to
                  Assignment Deck or its licensors. You may not copy, resell or redistribute it
                  without written permission.
                </p>
                <p>
                  Once your order is paid in full, you may use the material delivered to you for
                  personal study purposes.
                </p>

                <h2>12. Confidentiality</h2>
                <p>
                  We keep your personal details and order information confidential. We do not share
                  them with your university or any third party, except where the law requires it or
                  as described in our Privacy Policy.
                </p>

                <h2>13. Acceptable Use</h2>
                <p>You must not:</p>
                <ul>
                  <li>Use our website for any unlawful purpose</li>
                  <li>Upload harmful files, viruses or malicious code</li>
                  <li>Try to access our systems without permission</li>
                  <li>Abuse, threaten or harass our team members</li>
                  <li>Share, resell or publish material we deliver to you</li>
                </ul>

                <h2>14. Limitation of Liability</h2>
                <p>
                  We work hard to provide high-quality support, but we cannot guarantee any specific
                  grade, mark or academic outcome. Results depend on many factors outside our
                  control.
                </p>
                <p>
                  To the extent permitted by law, our total liability for any claim is limited to the
                  amount you paid for the order in question. Nothing in these Terms limits liability
                  that cannot be limited under UK law.
                </p>

                <h2>15. Third-Party Links</h2>
                <p>
                  Our website may link to other websites. We are not responsible for their content,
                  policies or practices.
                </p>

                <h2>16. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. The latest version will always be on
                  this page, with the effective date at the top. Orders already confirmed follow the
                  Terms in place when you ordered.
                </p>

                <h2>17. Contact Us</h2>
                <p>
                  Questions about these Terms? Email us at{' '}
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
