const AppReducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_ITEM':
            return{
                ...state,
                transaction: state.transaction.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}
// {{transaction:state.transaction}}

// const initialState = {
//     transaction:[
//         {id:1, text: 'Cash', amount: 2000},
//         {id:2, text: 'Book', amount: -50},
//         {id:3, text: 'Pc', amount: 65000},
//         {id:4, text: 'Mouse', amount: -8000}
//     ]
// }

export default AppReducer