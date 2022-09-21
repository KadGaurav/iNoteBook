import './Expenses.css';
import Cards from '../UI/Cards';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li>
            <Cards className='expenses' >
                <ExpensesFilter defaultYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses = {filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Cards>
        </li>
    )
}

export default Expenses;