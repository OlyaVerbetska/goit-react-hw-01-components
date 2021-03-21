import React from "react";
import Statistics from "../statistics/Statistics";

const StatisticsList = ({ statsData }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statsData.map(({ id, label, percentage }) => (
          <li key={id}>
            <Statistics label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatisticsList;
