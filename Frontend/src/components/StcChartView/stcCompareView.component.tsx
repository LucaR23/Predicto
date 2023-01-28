//React core imports
import React, { FC } from "react";
//React router imports
import { useSearchParams } from "react-router-dom";
//Charjs impoprts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//Components import
import { Container } from "react-bootstrap";
import SingleChart from "./SingleChart.component";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
import useStcCompare from "../../hooks/useStcCompare.hook";
//Assets imput
import { ReactComponent as LogoLoading } from "../../assets/logos/logo-short-predicto-loading.svg";
//Env imports
import { activeHost, stcOption } from "../../__functions/evironment";

//Register all tools for chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//Chart view component to use in statistic page
const StcCompareView: FC<{ toggleChart: string }> = ({ toggleChart }) => {
  //SearchParams for api req
  const [searchParam] = useSearchParams();
  //Custom hook for fetch data GET
  const [apiData, loading, error] = useFetch(
    `http://${activeHost}/statistics/compare/${searchParam.get(
      "province"
    )}/${searchParam.get("provinceSecond")}/${searchParam.get(
      "activityType"
    )}/${searchParam.get("country")}`
  );
  //Hook for map data for chart
  const [data] = useStcCompare(apiData);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pb-4">
      {//Render loading
      loading ? (
        <div className="min-h-60 d-flex align-items-center">
          <LogoLoading className="loading-svg" />
        </div>
      ) : null}
      {//Render error
      error ? (
        <div className="min-h-60 d-flex align-items-center">
          <div className="alert alert-danger" role="alert">
            An error occurred!
          </div>
        </div>
      ) : null}
      {
        //Change view when searchParam.get("type") change
        (searchParam.get("type") === null ||
          searchParam.get("type") === "Year") &&
        !loading &&
        !error ? (
          <SingleChart toggleChart={toggleChart} data={data} option={stcOption} />
        ) : null
      }
    </Container>
  );
};

export default StcCompareView;
