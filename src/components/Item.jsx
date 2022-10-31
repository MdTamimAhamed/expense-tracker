
const Item = () => {
  return (
    <>
        <form className='p-5 [&>div]:mb-5'>
            <div className='flex flex-col'>
              <label>Enter Item Name</label>
              <input 
                  type='text'
                  placeholder = 'Enter Item'
                  className='border'
              />
            </div>
            <div className='flex flex-col'>
              <label>Enter Income/Expense</label>
              <label className='text-xs pb-2'>Use '+' & '-' to indicate 'Income' & 'Expense'</label>
              <input 
                  type='text'
                  placeholder = 'Example: +5.00 or -5.00'
                  className='border'
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
