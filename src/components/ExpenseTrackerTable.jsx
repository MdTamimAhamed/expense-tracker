import Balance from "./Balance"
import ShowIncomeExpense from "./ShowIncomeExpense"
import History from "./History"
import Item from "./Item"

const ExpenseTrackerTable = () => {
  return (
    <div className="w-[600px] border p-5">
        <Balance />
        <ShowIncomeExpense />
        <History />
        <Item />
    </div>
  )
}

export default ExpenseTrackerTable