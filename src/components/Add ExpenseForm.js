import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../context/AppContext";

const AddExpenseForm = (props) => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

        setName('');
        setCost('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm col-lg-4">
                    <label htmlFor='name'>Name</label>
                    <input 
                    required="required" 
                    type='text' 
                    placeholder="Input the name."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control' 
                    id='name'></input>
                </div>

                <div className="col-sm col-lg-4">
                    <label htmlFor='cost'>Cost</label>
                    <input 
                    required="required" 
                    type='number'
                    placeholder="What's the cost?"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)} 
                    className='form-control' 
                    id='cost'></input>
                </div> 

                <div className='row mt-3'>
                <div className='col-sm'>
                    <button 
                    className='btn btn-primary'
                    type='submit'
                    >ADD</button>
                </div>
                </div>
            </div>
        </form>
     );
}
 
export default AddExpenseForm;