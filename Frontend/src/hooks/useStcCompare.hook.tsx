//React core and hooks
import { useState, useEffect } from "react";

//React router dom imports
import { useSearchParams } from "react-router-dom";

//Import Type
import { dataResponse } from "./useFetch.hook";
import { DataChart } from "./useStcChart.hook";

//hook for mapping the api response to chartjs valid object
const useStcCompare = (
  apiData: dataResponse[] | string[] | null | boolean
): [data: DataChart] => {
  //SearchParam hook
  const [searchParam] = useSearchParams();
  //Single Chart setting state for year chart
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(253, 99, 132, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(51, 162, 235, 0.5)",
      },
    ],
  });

  //Effect for change the chart settings on api change request
  useEffect(() => {
    if (Array.isArray(apiData)) {
      //Mapping data
      const mappedLabel = new Set<string>();
      const mappedFirstPrvArrival: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (
            e.arrivoPresenza === "Arrival" &&
            e.provincia === searchParam.get("province")
          ) {
            mappedLabel.add(e.anno.toString());
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);
      const mappedFirstPrvPres: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (
            e.arrivoPresenza === "Stay" &&
            e.provincia === searchParam.get("province")
          ) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);
      const mappedSecondPrvArrival: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (
            e.arrivoPresenza === "Arrival" &&
            e.provincia === searchParam.get("provinceSecond")
          ) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);
      const mappedSecondPrvPres: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (
            e.arrivoPresenza === "Stay" &&
            e.provincia === searchParam.get("provinceSecond")
          ) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);

      setData({
        labels: Array.from(mappedLabel),
        datasets: [
          {
            label: `Arrivals ${searchParam.get("province")}`,
            data: mappedFirstPrvArrival,
            backgroundColor: "#4571eb",
            tension: 0.2,
          },
          {
            label: `Stays ${searchParam.get("province")}`,
            data: mappedFirstPrvPres,
            backgroundColor: "#45c6eb",
            tension: 0.2,
          },
          {
            label: `Arrivals ${searchParam.get("provinceSecond")}`,
            data: mappedSecondPrvArrival,
            backgroundColor: "#aa23c5",
            tension: 0.2,
          },
          {
            label: `Stays ${searchParam.get("provinceSecond")}`,
            data: mappedSecondPrvPres,
            backgroundColor: "#d7239f",
            tension: 0.2,
          },
        ],
      });
    }
  }, [apiData]);
  //Return the states
  return [data];
};

export default useStcCompare;
