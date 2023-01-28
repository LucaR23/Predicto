// React core and hooks
import { useState, useEffect } from "react";

// Import Type
import { dataResponse } from "./useFetch.hook";
import { DataChart } from "./useStcChart.hook";

// Hook for mapping the api response to chartjs valid object
const useStcSingleYear = (
  apiData: dataResponse[] | string[] | null | boolean
): [data: DataChart, doughnutData: DataChart[]] => {
  // SearchParam hook
  const [doughnutData, setDoughnutData] = useState<DataChart[]>([
    {
    labels: [],
    datasets: [
      {
        label: '# of Arrivals',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: '# of Stays',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }]);

  //Single Chart setting state for year chart
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  });


  // Effect for change the chart settings on api change request
  useEffect(() => {
    if (Array.isArray(apiData)) {

      const labels:any[] = [];

      let totalArrival:number[] = [] ;
      let totalPres:number[] = [];


      // Mapping data api, divided by arrival and presense per each year
      const mappedArrival: any[] = apiData
      .map((e) => {
        if (typeof e === "string") return e;
        else if (e.arrivoPresenza === "Arrival") {
          labels.push(e.esercizio);
          totalArrival.push(e.valore);
          return e.valore;
        } else return 0;
      })
      .filter((e) => e !== 0);

      const mappedPres : any[] = apiData
      .map((e) => {
        if (typeof e === "string") return e;
        else if (e.arrivoPresenza === "Stay") {
          totalPres.push(e.valore)
          return e.valore;
        } else return 0;
      })
      .filter((e) => e !== 0);

      // Structure chart Doudhnut
      const mappedDoudhnutData = [
        {
          labels: labels.slice(2),
          datasets: [
            {
              label: ' Arrivals',
              data: mappedArrival.slice(2),
              backgroundColor: [
                '#6600FF',
                '#9900FF',
                '#CC00FF',
                '#FF00FF',
                '#FF00CC',
                '#FF0099',
                '#FF0066',
                '#FF0033'
              ],
            },
          ],
        },
        {
          labels: labels.slice(2),
          datasets: [
            {
              label: ' Stays',
              data: mappedPres.slice(2),
              backgroundColor:  [
                '#6600FF',
                '#9900FF',
                '#CC00FF',
                '#FF00FF',
                '#FF00CC',
                '#FF0099',
                '#FF0066',
                '#FF0033'
              ]
            },
          ],
        }
       ]

      setDoughnutData(mappedDoudhnutData);
      

      // Structure chart Doudhnut
      setData({
        labels: labels.slice(2),
        datasets: [
          {
            label: 'Arrivals',
            data: mappedArrival.slice(2),
            backgroundColor: "#4571eb" ,
            tension: 0.2,
          },
          {
            label:'Stays',
            data: mappedPres.slice(2),
            backgroundColor: "#aa23c5",
            tension: 0.2,
          },
        ],
      });
    }
  }, [apiData]);

  //Return the states
  return [data, doughnutData ];
};

export default useStcSingleYear;
