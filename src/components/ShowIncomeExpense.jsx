import React, {useContext} from "react";
import { ExpenseTrackerContext } from "../context/ExpenseTrackerContext";

const ShowIncomeExpense = () => {

  const {transaction} = useContext(ExpenseTrackerContext);
  const transactionAmount = transaction.map(item =>(item.amount))

  //Total Income
  const income = transactionAmount.filter((item) => (item > 0))
  .reduce((accumulator, currValue) => (accumulator += currValue),0).toFixed(3);

  //Total Expense
  const expense =(transactionAmount.filter((item) => item < 0)
  .reduce((accumulator, currValue) => (accumulator += currValue),0) * -1).toFixed(3);

  return (
    <>
        <div className='flex justify-between items-center p-5 shadow-md max-[300px]:flex-col rounded'>
            <div>
                <h3>Income</h3>
                <h1 className='text-green-500 text-xl'>${income}</h1>
            </div>
            <div>
                <h3>Expense</h3>
                <h1 className='text-red-500 text-xl'>-${expense}</h1>
            </div>
        </div>
    </>
  )
}

export default ShowIncomeExpense
