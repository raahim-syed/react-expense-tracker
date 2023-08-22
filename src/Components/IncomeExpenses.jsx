import {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const income = transactions
  .filter(transaction => transaction.amount > 0)
  .reduce((sum, transactions) => sum += transactions.amount, 0).toFixed(2)


  const expense = transactions
  .filter(transaction => transaction.amount < 0)
  .reduce((sum, transactions) => sum += transactions.amount, 0).toFixed(2)

  console.log(expense)
  console.log(income)

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">-${Math.abs(expense)}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses
