import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transactions } from './Transactions';

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);


  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
