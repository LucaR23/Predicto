//Type imports
import { dataResponse } from "../hooks/useFetch.hook";
import { DataChart } from "../hooks/useStcChart.hook";

//Default label for monthly chart
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export const stcChartMap = (apiData:dataResponse[] | string[] | null | boolean) => {
    //Mapping the res of api
    const mappedLabels: string[] = [];
    const arriveValue: number[] = [];
    const presValue: number[] = [];
    const range:number[] = [];
  

    let arriveFilterMonth:number[] = [];
    let presFilterMonth:number[] = [];
    let counter = 0;
    let filteredArray:DataChart[] = [];
    let startRangeYear:number[] = [];


    if (Array.isArray(apiData)) {
        let valueCounter = 0;
      apiData?.forEach((e,i) => {
        if (typeof e === "string") return;

        if(i === 0)
         startRangeYear.push(e.anno);

        if(i === apiData.length - 1 )
          startRangeYear.push(e.anno);

         if (e.arrivoPresenza === "Arrival" && e.mese === 0 ) {
          mappedLabels.push(e.anno.toString());
          arriveValue.push(e.valore);
        } else if(e.arrivoPresenza === "Stay" && e.mese === 0){
          presValue.push(e.valore);
        } else if(e.arrivoPresenza === "Arrival" ){
            valueCounter += e.valore;
            arriveFilterMonth.push(e.valore);
            if((i + 1) % 12 === 0) {
                mappedLabels.push(e.anno.toString());
                arriveValue.push(valueCounter);
                valueCounter = 0;
                
                filteredArray.push({
                    labels: Month,
                    datasets: [
                      {
                        label: "Arrivals",
                        data: arriveFilterMonth,
                        backgroundColor: "#4571eb",
                        tension: 0.2
                      },
                      {
                        label: "Stays",
                        data: [],
                        backgroundColor: "#aa23c5",
                        tension: 0.2
                      },
                    ],
                  })
                arriveFilterMonth = [];
            }
        } else if(e.arrivoPresenza === "Stay" ) {
            valueCounter += e.valore;
            presFilterMonth.push(e.valore);
            if((i + 1) % 12 === 0) {
                presValue.push(valueCounter);
                valueCounter = 0;

                filteredArray[counter].datasets[1].data = presFilterMonth;
                presFilterMonth = [];
                counter++ ;
            }
        }
      });
    }

    //Cicle for create the range of year
    for (let index = 0; index <= startRangeYear[1] - startRangeYear[0]; index++) {
      range.push(startRangeYear[0] + index)
    }

    return {range, filteredArray, mappedLabels, arriveValue, presValue}
}