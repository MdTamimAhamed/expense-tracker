
const ShowIncomeExpense = () => {
  return (
    <>
        <div className='flex justify-between items-center p-5 shadow-md max-[300px]:flex-col'>
            <div>
                <h3>Income</h3>
                <h1 className='text-green-500 text-xl'>$0.00</h1>
            </div>
            <div>
                <h3>Expense</h3>
                <h1 className='text-red-500 text-xl'>$0.00</h1>
            </div>
            <div>
                <h3>Deposit</h3>
                <h1 className='text-blue-500 text-xl'>$0.00</h1>
            </div>
        </div>
    </>
  )
}

export default ShowIncomeExpense
