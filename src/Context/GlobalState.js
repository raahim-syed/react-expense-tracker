import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Creating The Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE",
            payload: id,
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD",
            payload: transaction,
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {
                children
            }
        </GlobalContext.Provider>
    );
}