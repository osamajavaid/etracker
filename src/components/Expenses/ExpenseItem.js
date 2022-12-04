// import React, { useState} from 'react'
import ExpandDate from "./ExpandDate"
import Card from "../UI/Card"


function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title)
  // const clickHanlder=()=>{
  //   setTitle('tiolet paper')
  //   console.log("Clicked!!!!!!!")
  // }

  return (
    <div className='my-6 flex justify-center items-center'>
      <Card className='flex px-4 space-x-3 md:space-x-6 lg:space-x-10 w-[80%] sm:w-[50%] md:w-[60%] lg:w-[70%] h-28 bg-slate-700 xl:space-x-16  items-center justify-between sm:px-1 md:px-3 lg:px-5 xl:px-5 shadow-2xl'>
        <ExpandDate date={props.date} />
        <div className='flex-1'>
          <h1 className='text-white sm:text-sm md:text-xl lg:text-2xl font-bold'>{props.title}</h1>
        </div>
        <div className="border-[1px] md:border-2 text-white bg-slate-800 rounded-lg md:rounded-r-xl border-white px-2 md:px-4 py-1 md:py-2">${props.amount}</div>
        {/* <button onClick={clickHanlder} className="bg-red-600 rounded-lg p-2">update Title</button> */}

      </Card>
    </div>
  )
}

export default ExpenseItem
