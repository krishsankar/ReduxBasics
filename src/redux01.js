import { createStore } from "redux";

const store = createStore((state = { cash: 7000}, action ) => {
    switch(action.type){
       case "OPEN_ACCOUNT":
           return {
               cash: state.cash + 5000
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
   
});

const subscribe = store.subscribe(() => {
    console.log(store.getState());    
});


store.dispatch({
    type: "OPEN_ACCOUNT"
});

store.dispatch({
    type: "OPEN_ACCOUNT"
});

store.dispatch({
    type: "CASH_DEPOSIT",
    amount: 2000
});

store.dispatch({
    type: "CASH_WITHDRAWL",
    amount: 1000
});
