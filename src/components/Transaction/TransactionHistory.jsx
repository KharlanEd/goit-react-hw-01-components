import  css  from 'components/Transaction/Transaction.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (<table className={css.transaction_history}>
         <thead>
    <tr>
      <th className={css.table_th}>Type</th>
      <th  className={css.table_th}>Amount</th>
      <th className={css.table_th}>Currency</th>
    </tr>
        </thead>
        <tbody className={css.table_tbody}>
            {items.map(({ id, type, amount, currency }) =>
            ( <tr key={id}>
                 <td className={css.table_td}>{type}</td>
                 <td className={css.table_td}>{amount}</td>
                 <td className={css.table_td}>{currency}</td>
    </tr>)
            )}
         </tbody>
    </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired 
        })
    ).isRequired
}