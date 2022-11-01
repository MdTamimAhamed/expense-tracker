
const HistoryAmount = ({transactionItem}) => {
  const sign = transactionItem.amount < 0 ? '-' : '+';

  return (
    <div className={`${transactionItem.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
        {sign} ${Math.abs(transactionItem.amount)}
    </div>
  )
}

export default HistoryAmount