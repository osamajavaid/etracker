import React from 'react'

export default function ExpandDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
  return (
    <div className="flex flex-col justify-center items-center py-1 px-4 md:px-6 border-[1px] md:border-2 border-white bg-slate-800 rounded-lg md:rounded-xl text-white">
        <div className="text-[0.4rem] md:text-sm font-semibold">{month}</div>
        <div className="text-[0.5rem] md:text-lg lg:text-xs">{year}</div>
        <div className="text-[0.8rem] md:text-xl lg:text-2xl font-bold">{day}</div>
    </div>
  )
}
