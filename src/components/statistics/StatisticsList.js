import Statistics from '../statistics/Statistics';
import PropTypes from 'prop-types';

const StatisticsList = ({ statsData, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statsData.map(({ id, label, percentage }) => (
          <li>
            <Statistics label={label} percentage={percentage} key={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.defaultProps = {
  title: '',
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
