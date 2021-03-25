import Transaction from '../Transaction/Transaction';
import styles from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.transactionType}>Type</th>
          <th className={styles.transactionType}>Amount</th>
          <th className={styles.transactionType}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <Transaction
            type={type}
            amount={amount}
            currency={currency}
            key={id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
