import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)

  console.log(transactions)
  return (
    <ul className="list">
        {
          transactions.map(transaction => {
            return <Transaction key={transaction.id} id={transaction.id} title={transaction.text} 
                    amount={transaction.amount} />
          })
        }
    </ul>
  )
}

export default TransactionList
