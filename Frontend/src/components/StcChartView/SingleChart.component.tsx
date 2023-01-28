//React core imports
import { FC, useState } from "react";
//Type imports
import { DataChart, OptionChart } from "../../hooks/useStcChart.hook";
//Chart imports
import { Bar, Line } from "react-chartjs-2";

//Props type
type SingleChartProps = {
    toggleChart:string,
    data: DataChart,
    option: OptionChart,
    doughnutData?: JSX.Element[]
}

//Single chart for type=Year or null searchParam
const SingleChart:FC<SingleChartProps> = ({toggleChart,data,option, doughnutData }) => {

  //Current active doughnut chart ( 0 == Arrivals, 1 === Stays )
  const [ doughnutToggle, setDoughnutToggle ] = useState<number>(0);
  //Handle toggle in number on button click
  const handleClick = ()  => {setDoughnutToggle(doughnutToggle === 0 ? doughnutToggle + 1 : doughnutToggle - 1)};

    return (<>
          {//Check the toggleChart to show the rigth chart.
        toggleChart === "Bar" ? (
          <div className={`chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg`}>
            <Bar id="1" options={option} data={data} />
          </div>
        ) : toggleChart === "Line" ? (
          <div className={`chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg`}>
            <Line id="3" options={option} data={data} />
          </div>
        ) : toggleChart === "Doughnut" ? (
         <> <button className="btn btn-primary mt-2 shadow-lg rounded-pill" onClick={handleClick}>{doughnutToggle === 0 && 'Arrivals'} {doughnutToggle === 1 && 'Stays'} </button>
          <div className={`chart-view px-4 pb-4 rounded mt-4 shadow-lg`}>
            {typeof doughnutData !== 'undefined' ?  doughnutData[doughnutToggle] : null }
          </div>
          </>
        )  : null
      } </>)
}

export default SingleChart;