import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = (props) => {
    const { expenses } = useContext(AppContext);
    return ( 
        <ul className="list-group mt-3 mb-3">
        {expenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}/>
        ))}
    </ul>
     );
}
 
export default ExpenseList;