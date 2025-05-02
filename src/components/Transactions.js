import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaTimes } from 'react-icons/fa';

export const Transactions = ({ transaction }) => {

  const handleDelete = (id) => {
    const el = document.getElementById(`tx-${id}`);
    if (el) {
      el.classList.add('removing');
      setTimeout(() => {
        deleteTransaction(id);
      }, 400); 
    }
  };
  

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li
  id={`tx-${transaction.id}`}
  className={`list-item ${transaction.amount < 0 ? 'minus' : 'plus'}`}>

          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => handleDelete(transaction.id)} className="delete-btn"><FaTimes /></button>
    </li>
  )
}
