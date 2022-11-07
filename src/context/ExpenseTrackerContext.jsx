import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transaction:[]
}

//create context
export const ExpenseTrackerContext = createContext();

//provider
export const ExpenseTrackerProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Delete Action
    function deleteItem(id){
        dispatch(
            {type: 'DELETE_ITEM', payload: id}
        );
    }

    //Add Transaction Action
    function addTransaction(transaction){
        dispatch(
            {type: 'ADD_TRANSACTION', payload: transaction}
        );
    }
    
    return(
        <ExpenseTrackerContext.Provider value={{
        transaction:state.transaction, 
        deleteItem, 
        addTransaction}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
