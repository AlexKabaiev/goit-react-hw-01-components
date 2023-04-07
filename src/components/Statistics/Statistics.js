import css from './Statistics.module.css';
import propTypes from 'prop-types';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

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
                style={{ backgroundColor: createColor() }}
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

export default Statistics;

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};