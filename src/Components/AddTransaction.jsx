import {useState, useContext} from 'react'
import {GlobalContext} from "../Context/GlobalState"

const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const { transactions, addTransaction }  = useContext(GlobalContext);

  console.log(transactions.length)

  const sendTransation = (event) => {
    console.log(event)
    event.preventDefault();

    const transaction = {
      id : transactions.length + 1,
      text: text,
      amount: +amount,
      // amount: parseInt(amount),
    }

    addTransaction(transaction)
  }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={(event) => sendTransation(event)}>
          <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} placeholder="Enter text..." 
                onChange={(event) => setText(event.target.value)} />
          </div>
          <div className="form-control">
              <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
              >
              <input type="number" value={amount} placeholder="Enter amount..." 
                onChange={(event) => setAmount(event.target.value)}/>
          </div>
          <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
