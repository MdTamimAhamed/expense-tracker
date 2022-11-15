import React, {useContext} from "react"
import { ExpenseTrackerContext } from "../context/ExpenseTrackerContext"

const Balance = () => {

  const {transaction} = useContext(ExpenseTrackerContext);
  const transactionAmount = transaction.map(item =>(item.amount))

  //Total Balance
  const total = transactionAmount.reduce((accmulator, currValue) =>( accmulator += currValue),0).toFixed(3);
  const current = total < 0 ? '0.00' : total;

  return (
    <>
        <div className='p-5'>
            <h1>Current Balance</h1>
            <h1 className='text-3xl font-bold'>$ {current}</h1>
        </div>
    </>
  )
}

export default Balance
