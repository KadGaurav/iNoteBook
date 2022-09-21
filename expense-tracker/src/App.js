import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  { id:'e1', title:'aaaa', amount:2019, date:new Date(2020,1,1) },
  { id:'e2', title:'aaaaa', amount:2022, date:new Date(2019,1,1) },
  { id:'e3', title:'aaaaa', amount:2021, date:new Date(2022,1,1) },
  { id:'e4', title:'aaaaa', amount:2020, date:new Date(2020,1,1) }
]

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);


  const newAddedExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses)=>{
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense ={newAddedExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
