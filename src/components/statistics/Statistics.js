import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

// const color = "#" + Math.floor(Math.random() * 16777216).toString(16);
// console.log (color);

const Statistics = ({ statsData, title }) => {
  // const color = "#" + Math.floor(Math.random() *
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statsData.map(({ id, label, percentage }) => {
          const color = '#' + Math.floor(Math.random() * 16777216).toString(16);
          return (
            <li
              key={id}
              className={styles.listItem}
              style={{ backgroundColor: color }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
