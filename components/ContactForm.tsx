'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Failed to submit form. Please check your connection.',
      });
    }
  };

  return (
    <section className="faq-quote py-100">
      <div className="bg-section">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="quote">
              <div className="sec-title text-center">
                <h3>Get Every Update</h3>
              </div>

              {status.message && (
                <div
                  className={`alert ${
                    status.type === 'success'
                      ? 'alert-success'
                      : status.type === 'error'
                      ? 'alert-danger'
                      : 'alert-info'
                  } text-center`}
                  style={{ borderRadius: '5px', marginBottom: '20px' }}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="quote-item">
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    required
                  />
                  <i className="fas fa-user-alt"></i>
                </div>
                <div className="quote-item">
                  <label htmlFor="contact-email">Your Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <i className="far fa-envelope"></i>
                </div>
                <div className="quote-item">
                  <label htmlFor="contact-subject">Your Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Your Subject"
                  />
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div className="quote-item">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                  <i className="far fa-edit"></i>
                </div>
                <div className="quote-item text-center">
                  <button
                    type="submit"
                    className="btn-1"
                    disabled={status.type === 'loading'}
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
