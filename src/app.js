import React from 'react';
import { connect } from "react-redux";
import { cashDeposit } from "./redux04";

class App extends React.Component {
 render() {
  return(
   <div>
    <h1> Total Cash : { this.props.cash} </h1>
    <h1> Total Expense : { this.props.expense} </h1>
   </div>
  );
 }
}

const mapReduxStateToLocalProps = (state) =>{
    return {
        cash: state.cash.cash,
        expense: state.expense.expense
    }
};

const mapDispathToProps = (dispatch, props) => {
    return {
        cashReturn: dispatch(cashDeposit(999999))
    }
};

export default connect(mapReduxStateToLocalProps,mapDispathToProps)(App);