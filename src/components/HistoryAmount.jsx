import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/ExpenseTrackerContext";

const HistoryAmount = ({transactionItem}) => {
  const {deleteItem} = useContext(ExpenseTrackerContext)
  const sign = transactionItem.amount < 0 ? '-' : '+';

  return (
    <div className={`${transactionItem.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
        <span>{sign} ${Math.abs(transactionItem.amount)}</span>
        <button 
          onClick={()=> deleteItem(transactionItem.id)}
          className="hidden absolute left-full translate-y-[-70%] 
          p-3 text-red-600 group-hover:block">
          <i className="fa-solid fa-trash"></i>
        </button>
    </div>
  )
}

export default HistoryAmount