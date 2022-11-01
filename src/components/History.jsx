import React, {useContext} from "react"
import { ExpenseTrackerContext } from "../context/ExpenseTrackerContext"
import HistoryAmount from "./HistoryAmount";

const History = () => {
  const {transaction} = useContext(ExpenseTrackerContext);

  return (
    <>
        <div className=' mt-5 p-5'>
            <h1  className='font-bold'>Transaction History</h1>
            <div>
              {transaction.map(item => (
                <div className={`h-10 flex justify-between items-center mb-3 border 
                                border-l-4 rounded ${item.amount < 0 ? 'border-l-red-600' : 'border-l-green-600'}`}>
                  <p className="pl-2">{item.text}</p>
                  <span className="pr-2"><HistoryAmount key = {item.id} transactionItem = {item}/></span>
                </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default History