import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import BudgetEdit from "./BudgetEdit";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(AppContext)

    const handleEditClick = () => {
        setIsEditing(true)
    }

   const handleSaveClick = (value) => {
       dispatch({
           type: 'SET_BUDGET',
           payload: value
       });
       setIsEditing(false)
   }
    return ( 
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
             {isEditing? (<BudgetEdit handleSaveClick={handleSaveClick} budget={budget}/>)
              : <ViewBudget  handleEditCLick={handleEditClick} budget={budget} />}
         </div>
     );
}
 
export default Budget;