import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const [btnClosed, setBtnOpen] = useState(false)

  const saveExpenseHandler=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  const startAddingExpenses = ()=>{
    setBtnOpen(true)
    // console.log("hello from pk")
  }
  const stopAddingExpenses = ()=>{
    setBtnOpen(false)
    // console.log("hello from india")
  }

  return (
    <Card className='mx-60 my-4 px-10 py-10 bg-slate-800'>
      {!btnClosed &&
      <div className="flex justify-center items-center">
        <button onClick={startAddingExpenses} className='text-2xl text-white bg-slate-700 hover:bg-slate-900 py-3 px-8 rounded-xl'>Add New Expense</button>  
      </div>}
      
      {btnClosed &&
        <ExpenseForm onCancel={stopAddingExpenses} onSaveExpenseData={saveExpenseHandler}></ExpenseForm>
      }
    </Card>
  )
}

export default NewExpense
