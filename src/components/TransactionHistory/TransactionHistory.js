import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionsHistory = ({ items }) => {
  const history = items.map(({ id, type, amount, currency }, index) => {
    const stringColor = [`${css.body}`];
    if (index % 2 !== 0) {
      stringColor.push(`${css.odd}`);
    }
    return (
      <tr className={stringColor.join(' ')} key={id}>
        <td className={css.bodyCell}>{type}</td>
        <td className={css.bodyCell}>{amount}</td>
        <td className={css.bodyCell}>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.history}>
      <thead className={css.header}>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody>{history}</tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionsHistory;