import React from 'react';
import { statsData } from '@/data/stats';

export default function StatisticSection() {
  return (
    <div className="statistic">
      <div className="container">
        <div className="row">
          {statsData.map((stat) => (
            <div key={stat.id} className="col-sm-6 col-lg-3">
              <div className="statistic-item">
                <i className={stat.icon}></i>
                <div className="content">
                  <div className="counter">{stat.value}</div>
                  <div className="counter-name">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
