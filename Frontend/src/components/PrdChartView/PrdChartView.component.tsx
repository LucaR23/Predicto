//React core imports
import React, { FC, useState } from "react";
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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
//Components import
import { Container } from "react-bootstrap";
import SingleChart from "../StcChartView/SingleChart.component";
import CarouselChart from "../StcChartView/CarouselChart.component";
//Assets imput
import { ReactComponent as LogoLoading } from "../../assets/logos/logo-short-predicto-loading.svg";
//Hooks impports
import usePrdRangeYear from "../../hooks/usePrdRangeYear.hook";
import useFetchPr from "../../hooks/useFetchPr.hook";
//Env imports
import { prdOption } from "../../__functions/evironment";

//Register all tools for chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

//Chart view component to use in statistic page
const PrdChartView: FC<{ toggleChart: string }> = ({ toggleChart }) => {
  //SearchParams for api req
  const [searchParam] = useSearchParams();
  //State for change Single view or multi
  const [view, setView] = useState<string>("Single");
  //The object to send in body POST
  const jsonIn = {
    steps: Number(searchParam.get("steps")),
    territorio: searchParam.get("province"),
    indicatori: searchParam.get("indicator"),
    esercizio: searchParam.get("activityType"),
    paese: searchParam.get("country"),
  };
  //UseFetch for do POST req for machine learning
  const [apiData, loading, error] = useFetchPr(jsonIn);
  //Hook for create the data of charts
  const [data, singleData] = usePrdRangeYear(apiData);

  //Array of chart for carousel with same value
  //Array of Line chart
  const renderLine = data.map((e, i) => (
    <div
      key={i + 10}
      className="chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg"
    >
      <Line options={prdOption} data={e} />
    </div>
  ));

  return (
    <Container>
      {// Render loading
      loading ? (
        <div className="min-h-60 d-flex flex-column justify-content-center  align-items-center text-center">
          <LogoLoading className="loading-svg" />
          <h3 className="text-center ms-4">Please Wait!</h3>
          <h4 className="text-center ms-4">
            We are generate your prediction chart, the process may take long!
          </h4>
        </div>
      ) : null}
      {// Render error
      error ? (
        <div className="min-h-60 d-flex align-items-center">
          <div className="alert alert-danger mx-auto" role="alert">
            An error occurred!
          </div>
        </div>
      ) : null}
      {
        //Change view on view state change
        view === "Single" && !loading && !error ? (
          <>
            <div className="w-100 d-flex justify-content-center">
              <button
                className="btn btn-primary mt-2 shadow-lg rounded-pill"
                onClick={() => setView("Multi")}
              >
                Multi View
              </button>
            </div>
            <SingleChart
              toggleChart={toggleChart}
              data={singleData}
              option={prdOption}
            />
          </>
        ) : view === "Multi" && !loading && !error ? (
          <div>
            <div className="w-100 d-flex justify-content-center">
              <button
                className="btn btn-primary mt-2 shadow-lg rounded-pill"
                onClick={() => setView("Single")}
              >
                Single View
              </button>
            </div>
            <CarouselChart
              toggleChart={toggleChart}
              renderBar={null}
              renderLine={renderLine}
            />
          </div>
        ) : null
      }
    </Container>
  );
};

export default PrdChartView;
