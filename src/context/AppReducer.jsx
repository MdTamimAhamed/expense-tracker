const AppReducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_ITEM':
            return{
                ...state,
                transaction: state.transaction.filter(item => item.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction:[action.payload, ...state.transaction]
            }
        default:
            return state;
    }
}
export default AppReducer