import Balance from "./Balance"
import ShowIncomeExpense from "./ShowIncomeExpense"
import History from "./History"
import Item from "./Item"
import { ExpenseTrackerProvider} from "../context/ExpenseTrackerContext"

const ExpenseTrackerTable = () => {
  return (
    <div className="w-[600px] border p-5">
      <ExpenseTrackerProvider>
        <Balance />
        <ShowIncomeExpense />
        <History />
        <Item />
      </ExpenseTrackerProvider>
    </div>
  )
}

export default ExpenseTrackerTable