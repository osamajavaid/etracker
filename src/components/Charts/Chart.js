import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointsValue = props.dataPoints.map((dataPoint=> dataPoint.value))
    const totalMaximum = Math.max(...dataPointsValue)
  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 p-4 rounded-xl bg-slate-700 w-[80%] sm:w-[50%] md:w-[60%] lg:w-[70%] h-28 md:h-40 flex space-x-2 md:space-x-6 justify-around">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
    </div>
  );
}

export default Chart;
