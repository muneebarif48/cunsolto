import React from 'react';

const subjects = [
  'Business & Management',
  'Marketing',
  'Finance',
  'Accounting',
  'Computer Science',
  'Psychology',
  'Nursing',
  'Law',
  'Human Resources',
  'Economics',
  'Education',
  'Project Management',
];

export default function SubjectsSection() {
  return (
    <section className="subjects py-100-70">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="sec-title sec-title-2 text-center">
              <h2>Subjects We Support</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="widget text-center">
              <div className="widget-body">
                <div className="tags">
                  <ul>
                    {subjects.map((subject, idx) => (
                      <li key={idx}>
                        <a href="#">{subject}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p style={{ marginTop: '15px', fontWeight: 600, color: '#A5A5A5' }}>
                  And many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
