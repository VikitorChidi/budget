import { createContext, useReducer } from "react";
// import { v4 as uuidv4 } from 'uuid';
import { AppReducer } from "../reducer/AppReducer";

export const AppContext = createContext();

// state passd to reducer
const initialState = {
    budget: 0,
    expenses: [
        // { id: uuidv4(), name: '*******', cost: 0 },
    ]
};

export const AppProvider = (props) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)
    return ( 
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;