import React from 'react'

function ExpenseFilter(props) {
    const dropDownHandler=(event)=>{
        props.onChangeFilter(event.target.value)
        // console.log(
        //     props.onChangeFilter(event.target.value)
        // )
    }
  return (
    <div className="flex space-x-16 items-center justify-between px-5">
        <div className="">
            <h2 className='text-2xl text-white font-bold'>Filter Year</h2>
        </div>
        <select value={props.selected} onChange={dropDownHandler} className='text-xl px-6 py-2 rounded-xl bg-slate-800 text-white' id="year" name="year">
            <option value="all">All</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>
  )
}

export default ExpenseFilter
