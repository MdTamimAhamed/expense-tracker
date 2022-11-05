import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transaction:[
        {id:1, text: 'Cash', amount: 2000},
        {id:2, text: 'Book', amount: -50},
        {id:3, text: 'Pc', amount: 65000},
        {id:4, text: 'Mouse', amount: -8000}
    ]
}

//create context
export const ExpenseTrackerContext = createContext();

//provider
export const ExpenseTrackerProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteItem(id){
    dispatch({type: 'DELETE_ITEM', payload: id});
}
    return(
        <ExpenseTrackerContext.Provider value={{transaction:state.transaction, deleteItem}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
