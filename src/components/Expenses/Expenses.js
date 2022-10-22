import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021')
  const filterChangeHandler=(selectedYear)=>{
    setFilterYear(selectedYear)
    console.log(selectedYear)
  }
  const filteredExpenses = props.items.filter(index=>{
     return index.date.getFullYear().toString() === filterYear
  })
  let expenseContent = <p className='text-center text-xl text-white my-5'>No Expense found</p>
  if(filteredExpenses.length>0){
      expenseContent =  filteredExpenses.map((index) => (
      <ExpenseItem key={index.id} title={index.title} amount={index.amount} date={index.date} />
    ))}
  else if (filterYear==='all'){
      expenseContent =  props.items.map((index) => (
        <ExpenseItem key={index.id} title={index.title} amount={index.amount} date={index.date} />
      ))
    }
  return (
    <div className="flex justify-center items-center">
      <Card className='bg-slate-500 w-[80%] md:w-[70%] my-8 py-6  '>
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}/>
        {expenseContent}
    </Card>
    </div>
  )
}

export default Expenses
