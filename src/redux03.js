import { createStore } from "redux";

const openAccount = () => ({
    type: "OPEN_ACCOUNT"
});

const cashDeposit = (amount) => ({
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

const store = createStore(cashReducer);

const subscribe = store.subscribe(() => {
    console.log(store.getState());    
});

store.dispatch(openAccount());
store.dispatch(openAccount());

store.dispatch(cashDeposit(1000));
store.dispatch(cashWithdrawl(900));
