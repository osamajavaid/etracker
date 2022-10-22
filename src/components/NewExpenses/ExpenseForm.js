import React, {useState} from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')

    const titleChangeHandler = event =>{
        setEnteredTitle(event.target.value)
        // console.log()   
    }
    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value)
    }
    const amountChangeHandler = event =>{   
        setEnteredAmount(event.target.value)   
    }
    //submitHandler below
    const submitHandler=event=>{
        event.preventDefault()

        const expenseData ={
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
  return (
    <div>
        <form action="" onSubmit={submitHandler}>
            <div className="flex flex-wrap gap-x-8 justify-between">
                <div className="">
                    <label className='block text-2xl py-2 text-white font-bold' htmlFor="">Title</label>
                    <input onChange={titleChangeHandler} value={enteredTitle} className='px-12 py-2 rounded-lg bg-slate-600 text-white' placeholder='Enter expense title' type="text" />
                </div>
                <div className="">
                    <label className='block text-2xl py-2 text-white font-bold' htmlFor="">Date</label>
                    <input onChange={dateChangeHandler} value={enteredDate} className='px-12 py-2 rounded-lg bg-slate-600 text-white' type="date" min="2020-02-16" />
                </div>
                <div className="">
                    <label className='block text-2xl py-2 text-white font-bold' htmlFor="">Amount</label>
                    <input onChange={amountChangeHandler} value={enteredAmount} className='px-12 py-2 rounded-lg bg-slate-600 text-white' placeholder='Enter expense price' type="number" min='0.01' step='0.01'/>
                </div>
            </div>
            <div className="flex justify-end space-x-4 items-end mt-10 gap-y-8">
                <button onClick={props.onCancel} className='bg-slate-700 text-white rounded-lg text-xl px-4 py-2 hover:bg-slate-900 focus:animate-pulse' type='cancel'>Cancel</button>
                <button className='bg-slate-700 text-white rounded-lg text-xl px-4 py-2 hover:bg-slate-900 focus:animate-pulse' type='submit'>Add Expense</button>
            </div>
      </form>
    </div>
  )
}

export default ExpenseForm
