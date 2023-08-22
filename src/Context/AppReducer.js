export default (state, {type, payload}) => {
    switch (type){

        // Returns a new state on a action 
        case "DELETE":
            return {
                ...state, 
                transactions: state.transactions
                            .filter(transaction => transaction.id !== payload)
            }

        case "ADD":
            return {
                ...state, 
                transactions: [payload, ...state.transactions]
            }

        default:
            return state
    }
}