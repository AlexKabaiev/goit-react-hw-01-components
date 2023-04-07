import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};

const Statistics = ({ title, stats}) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stats}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.item}
                key={id}
                style={{ backgroundColor: generateRandomColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;