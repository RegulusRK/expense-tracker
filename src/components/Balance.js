import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  const [animatedTotal, setAnimatedTotal] = useState(total.toFixed(2));
  const prevTotal = useRef(total);

  useEffect(() => {
    const start = prevTotal.current;
    const end = total;
    const duration = 800; // duração da animação em ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = start + (end - start) * progress;

      setAnimatedTotal(currentValue.toFixed(2));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevTotal.current = end;
      }
    };

    requestAnimationFrame(animate);
  }, [total]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${animatedTotal}</h1>
    </>
  );
};
