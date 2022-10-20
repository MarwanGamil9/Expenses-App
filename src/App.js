import React , { useState } from 'react';
import Expenses from "./compenent/Expenses/Expenses";
import NewExpense from './compenent/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Books',
    amount: 119.99,
    date: new Date(2019, 6, 11),
  },

  { id: 'e2', 
    title: 'New Car',
    amount: 1999.99,
    date: new Date(2020, 4, 18),
  },

  {
    id: 'e3',
    title: 'LapTop',
    amount: 499.99,
    date: new Date(2021, 9, 22),
  },

  {
    id: 'e4',
    title: 'Iphone 14',
    amount: 1100,
    date: new Date(2022, 10, 15),
  },
];


function App() {

  const [ expenses , setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense , ...prevExpenses];
      });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;