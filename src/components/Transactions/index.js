import Transaction from '../Transaction';
import { PropTypes } from 'prop-types';

const Transactions = ({ transactions = [], onDelete }) => transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />);

Transactions.propTypes = {
   transactions: PropTypes.array
};

// замінили на більш легасі синтаксис у рядку 4
// Transactions.defaultProps = {
//    transactions: []
// }

export default Transactions;