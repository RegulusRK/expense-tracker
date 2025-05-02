import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './styles/main.css';


import { GlobalProvider } from './context/GlobalState';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('dark', darkMode);
  }, [darkMode]);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Alternar tema"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
