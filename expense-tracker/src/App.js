import './App.css';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    { id:'e1', title:'aaaa', amount:20214, date:new Date(2020,1,1) },
    { id:'e2', title:'aaaaa', amount:20214, date:new Date(2020,1,1) },
    { id:'e3', title:'aaaaa', amount:20214, date:new Date(2020,1,1) },
    { id:'e4', title:'aaaaa', amount:20214, date:new Date(2020,1,1) }
  ]


  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
