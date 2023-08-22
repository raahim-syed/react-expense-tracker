import {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const total = transactions
                .reduce((acc, transaction) => (acc += transaction.amount), 0)
                .toFixed(2);
                
  console.log(total)

  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  )
}

export default Balance
