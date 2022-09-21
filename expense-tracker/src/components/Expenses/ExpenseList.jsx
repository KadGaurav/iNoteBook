import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expense !!</h2>
    }
    
    return (
        <ul className="expenses-list">
            {/* loop thru all expense items(props) using map   */}
            {props.items.map((expense) => (
                <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    )

}

export default ExpenseList;