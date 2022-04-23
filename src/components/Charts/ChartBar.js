import React from 'react'

function ChartBar(props) {
    let barFilHeight = '0%'
    if( props.maxValue > 0){
        barFilHeight = Math.round((props.value/props.maxValue) * 100 ) + "%"
    }
  return (
    <div className='CHART_BAR h-[100%] flex flex-col justify-center items-center'>
      <div className="CHART_BAR_INNER flex flex-col justify-end overflow-hidden h-[50%] w-[50%] md:h-[100%] md:w-[100%] bg-gray-300 rounded-lg space-x-10">
        <div className="bg-fuchsia-600 w-[100%] transition-all border-white" style={{height: barFilHeight}}></div>
      </div>
      <div className="w-3 text-[5px] md:text-sm text-white">{props.label}</div>
    </div>
  )
}

export default ChartBar
