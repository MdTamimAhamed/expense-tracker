import { ExpenseTrackerContext } from "../context/ExpenseTrackerContext";
import { useState, useContext } from "react"

const Item = () => {
  
  //States
  const[text, setAddItem] = useState('');
  const[addAmount, setAddAmount] = useState();
  const amount = parseFloat(addAmount);

  const {addTransaction} = useContext(ExpenseTrackerContext)

  //on form submit
  const onSubmit = (e) =>{
    e.preventDefault();
    const addNewTransaction ={
      id:Math.floor(Math.random() * 100000),
      text,
      amount
    }
    addTransaction(addNewTransaction);
    setAddItem('')
    setAddAmount(0)
  }

  return (
    <>
        <form onSubmit={onSubmit} className='p-5 [&>div]:mb-5'>
            <div className='flex flex-col'>
              <label>Enter Item Name</label>
              <input 
                  type='text'
                  value={text}
                  onChange ={(e) => setAddItem(e.target.value)}
                  placeholder = 'Enter Item'
                  className='border h-10 rounded p-2'
                  required
              />
            </div>
            <div className='flex flex-col'>
              <label>Enter Income/Expense</label>
              <label className='text-xs pb-2'>Use '+' & '-' to indicate 'Income' & 'Expense'</label>
              <input 
                  type='text'
                  step='0.1'
                  value={addAmount}
                  onChange = {(e) => setAddAmount(e.target.value)}
                  placeholder = 'Example: +5.00 or -5.00'
                  className='border h-10 rounded p-2'
              />
            </div>
            <span className='w-full flex justify-center items-center'>
              <button type='submit' className='border px-3 py-1'>Submit</button>
            </span>
        </form>
    </>
  )
}

export default Item
