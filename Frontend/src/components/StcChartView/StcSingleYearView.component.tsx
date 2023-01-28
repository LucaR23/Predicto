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
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
//Components import
import { Container } from "react-bootstrap";
import SingleChart from "./SingleChart.component";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
import useStcSingleYear from "../../hooks/useStcSingleYear.hook";
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
  ArcElement,
  Title,
  Tooltip,
  Legend
);

//Chart view component to use in statistic page
const StcSingleYearView: FC<{ toggleChart: string }> = ({ toggleChart }) => {
  //SearchParams for api req
  const [searchParam] = useSearchParams();
  //Custom hook for fetch data GET
  const [apiData, loading, error] = useFetch(
    `http://${activeHost}/statistics/year/${searchParam.get(
      "province"
    )}/${searchParam.get("country")}/${searchParam.get("year")}`
  );
  //Hook for map data for charts
  const [data, doughnutData] = useStcSingleYear(apiData);
  //Array with doughnut charts array[0] == Arrivals  array[1] == Stay
  const renderDoughnut = doughnutData.map((e) => (
    <Doughnut id="0" options={stcOption} data={e} />
  ));

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
        //Change view when searchParam.get("type") change in === 'year'
        (searchParam.get("type") === null ||
          searchParam.get("type") === "year") &&
        !loading &&
        !error ? (
          <SingleChart
            toggleChart={toggleChart}
            data={data}
            doughnutData={renderDoughnut}
            option={stcOption}
          />
        ) : null
      }
    </Container>
  );
};

export default StcSingleYearView;
