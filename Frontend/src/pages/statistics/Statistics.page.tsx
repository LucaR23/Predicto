// React core imports
import React, { useEffect, useState } from "react";

// React router imports
import { useSearchParams } from "react-router-dom";

// Style Imports
import "./Statistics.scss";

// Assets imports
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as BarChartIcon } from "../../assets/icons/bar-chart.svg";
import { ReactComponent as DoughnutChartIcon } from "../../assets/icons/doughnut-chart.svg";

// Components imports
import ModalSetting from "../../components/Modal/ModalSetting.component";
import StcChartView from "../../components/StcChartView/StcChartView.component";
import { Container, Card } from "react-bootstrap";
import TutorialOverlay from "../../components/Tutorial/tutorial.component";
import StcCompareView from "../../components/StcChartView/stcCompareView.component";
import StcSingleYearView from "../../components/StcChartView/StcSingleYearView.component";

const Statistics = () => {
  // SearchParams for api req
  const [searchParam] = useSearchParams();
  // State for switching chart
  const [toggleChart, setToggleChart] = useState<string>("Bar");
  // Modal state
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if((searchParam.get('kind') === 'standard' || searchParam.get('kind') === 'compare' || searchParam.get('kind') === null || searchParam.get('kind') !== null ) && toggleChart === 'Doughnut')
      setToggleChart('Bar');
  }, [searchParam.get('kind')])

  return (
    <div className="min-h-100 bg-custom sky-blue">
      <Container fluid>
        <Card className="board px-3 py-3 rounded-3 shadow-lg text-white">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="m-0">
              {searchParam.get("province")}
              {searchParam.get("provinceSecond") === null
                ? ""
                : " - " + searchParam.get("provinceSecond")}
            </h2>
            <TutorialOverlay setToggleChart={setToggleChart} />
          </div>
          <p className="ms-1">
          {searchParam
              .get("year")
              ?.toLowerCase()
              .replace(/\b(\w)/g, (s) => s.toUpperCase())}
            {searchParam
              .get("activityType")
              ?.toLowerCase()
              .replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}
            ({searchParam.get("country")})
          </p>

          <div className="d-flex flex-row">
            {/* Setting button */}
            <button
              id="setting"
              className="setting btn btn-primary"
              onClick={() => setShow(true)}
            >
              <SettingIcon title="Setting" />
            </button>

            {/* Bar chart */}
            <button
              id="bar"
              className={`chart btn mx-2 ${
                toggleChart === "Bar" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => setToggleChart("Bar")}
            >
              <BarChartIcon title="Bar Chart" />
              <span className="button-text-chart">Bar Chart</span>
            </button>

            {/* Line Chart */}
            <button
              id="line"
              className={`chart btn  ${
                toggleChart === "Line" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => setToggleChart("Line")}
            >
              <LineChartIcon title="Line Chart" />
              <span className="button-text-chart">Line Chart</span>
            </button>

            {/* Doudhnut Chart */}
            {searchParam.get("kind") === "year" && (
              <button
                id="doughnut"
                className={`chart btn mx-2 ${
                  toggleChart === "Doughnut" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setToggleChart("Doughnut")}
              >
                <DoughnutChartIcon title="Doughnut Chart" />
                <span className="button-text-chart">Dghnut Chart</span>
              </button>
            )}
          </div>
        </Card>

        <ModalSetting show={show} handleClose={() => setShow(false)} />
        {searchParam.get("kind") === null ||

        /* Standard chart */
        searchParam.get("kind") === "standard" ? (
          <StcChartView toggleChart={toggleChart} />
        ) : null}

        {/* Compare chart */}
        {searchParam.get("kind") === "compare" ? (
          <StcCompareView toggleChart={toggleChart} />
        ) : null}

        {/* Year chart */}
        {searchParam.get("kind") === "year" ? (
          <StcSingleYearView toggleChart={toggleChart} />
        ) : null}
      </Container>
    </div>
  );
};

export default Statistics;
