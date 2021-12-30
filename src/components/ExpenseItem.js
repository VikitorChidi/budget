import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = (e) =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return ( 
        <li className='list-group-item d-flex justify-content-between align-item-center'>
        {props.name}
        <div>
            <span className=' badge bg-light text-dark mr-3'>
                 ₦{props.cost}
            </span>
            <TiDelete size='1.5em' onClick={handleDeleteExpense} />
        </div>
    </li>
     );
}
 
export default ExpenseItem;