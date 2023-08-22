import {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({id, title, amount}) => {
  // Pulling action from GlobalContext
  const { deleteTransaction } = useContext(GlobalContext)

  const checkSign = amount < 0 ? "-" : "+";

  return (
    <li className={amount  < 0 ? "minus" : "plus"}>
        {title} <span>{`${checkSign}$${Math.abs(amount)}`}</span>
        
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>X</button>
    </li>
  )
}

export default Transaction
