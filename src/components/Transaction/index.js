import PropTypes from 'prop-types';
import { useContext, useCallback } from 'react';

import { AppContext } from '../../providers/context';
import { Wrapper, TransactionDate, Value, Comment } from './styles';

const Transaction = ({ transaction: { id, value, date, comment }, onDelete }) => {
   const { state } = useContext(AppContext);

   const deleteItem = useCallback(() => onDelete(id), [id]);

   return (
      <Wrapper value={value}>
         <TransactionDate>{date}</TransactionDate>
         <Value>{value.toFixed(2)}, {state.currency}</Value>
         <Comment>{comment}</Comment>
         <button onClick={deleteItem}>Delete</button>
      </Wrapper>
   );
}

Transaction.propTypes = {
   transaction: PropTypes.shape({
      comment: PropTypes.string,
      value: PropTypes.number
   })
};


Transaction.defaultProps = {
   transaction: {
      comment: '',
      value: 0,
   }
}

export default Transaction;