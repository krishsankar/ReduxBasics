import { createStore, combineReducers } from "redux";

const openAccount = () => ({
    type: "OPEN_ACCOUNT"
});

export const cashDeposit = (amount) => ({
    type: "CASH_DEPOSIT",
    amount
});

const cashWithdrawl = (amount) => ({
    type: "CASH_WITHDRAWL",
    amount
});

const cashReducer = (state = { cash: 5000}, action ) => {
    switch(action.type){
       case "OPEN_ACCOUNT":
           return {
               cash: state.cash + 2000
           } 
        case "CASH_DEPOSIT":
            return {
                cash: state.cash + action.amount
            } 
        case "CASH_WITHDRAWL":
                return {
                    cash: state.cash - action.amount
                } 
        default:
            return state;
    }
}

const expenseReducer = ((state = { expense: 9000}, action ) => {
    switch(action.type){
        case "SALARY":
            return {
                expense: state.expense + action.amount
            }
        default:
            return state;
    }
});

const store = createStore(
    combineReducers({
        cash: cashReducer,
        expense: expenseReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// const subscribe = store.subscribe(() => {
//     console.log(store.getState());    
// });

// store.dispatch(openAccount());
// store.dispatch(openAccount());

// store.dispatch(cashDeposit(1000));
// store.dispatch(cashWithdrawl(900));

// store.dispatch({
//     type: "SALARAY",
//     amount: 99999
// })

