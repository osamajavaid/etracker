import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DummyData = [
  {id:"e1,", date: new Date(2021,2,12), title:"New Car", amount: 10099.99},
  {id:"e2,", date: new Date(2021,4,13), title:"New Mobile", amount: 699.99},
  {id:"e3,", date: new Date(2021,6,14), title:"New Home", amount: 5684.99},
  {id:"e4,", date: new Date(2021,10,15), title:"New Laptop", amount: 1099.99},
]
function App() {
  const [expenses, setExpenses] = useState(DummyData)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })

    // console.log(expense)
  }
  return (
    <div className="overflow-none ">
      <h1 className="text-4xl font-bold text-white text-center pt-10">
        Expense Tracker
      </h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
