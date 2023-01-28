// React core imports
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Style
import "./Tutorial.scss";

// Bootstrap icons imports
import { QuestionDiamondFill, XLg, ArrowLeft } from "react-bootstrap-icons";

// Import Components */
import TutorialModalStandard from "./tutorial-modal-standard.component";
import TutorialModalCompare from "./tutorial-modal-compare.component";
import TutorialYearCompare from "./tutorial-modal-year.components";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// Props type
type TutorialOverlayType = {
  setToggleChart: Dispatch<SetStateAction<string>>;
};

const TutorialOverlay: FC<TutorialOverlayType> = ({ setToggleChart }) => {
  //State for tutorial visibility
  const [showTutorial, setShowTutorial] = useState(false);
  //State for tutorial steps
  const [currentStep, setCurrentStep] = useState(1);
  //Hook for searchParam
  const [searchParam] = useSearchParams();

  //Open tutorial if searchParam tutorial=open
  useEffect(() => {
    if (searchParam.get("tutorial") === "open") setShowTutorial(true);
  }, [searchParam.get("tutorial")]);

  //Tutorial steps with content
  const tutorialSteps = [
    {
      heading: "Welcome to the tutorial!",
      content:
        "Discover the power of our app as we guide you through its features and demonstrate how easy it is to personalize your settings and view various types of charts. Let's get started!",
      element: null,
    },
    {
      heading: "Step 1: Standard",
      content: <TutorialModalStandard setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 2: Bar Chart",
      content:
        "Once you have saved your changes, the bar chart will display data across various years. Explore different data views by clicking on 🟦 Arrivals or 🟪 Stays.",
      element: "#bar",
    },
    {
      heading: "Step 3: Line Chart",
      content:
        "Explore different chart types by clicking on the icons. Our line chart allows you to switch between 🟦 Arrivals or 🟪 Stays data views with ease.",
      element: "#line",
    },
    {
      heading: "Step 4: Compare",
      content: <TutorialModalCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 5: Bar chart comparision",
      content:
        "Experience the convenience of viewing different data from multiple cities on the same chart. Simply click on 🟦 Arrivals or 🟪 Stays to switch between data views.",
      element: "#bar",
    },
    {
      heading: "Step 6: Line Chart comparision",
      content:
        "Explore our line chart in comparison mode. Easily switch between data views by clicking on 🟦 Arrivals or 🟪 Stays.",
      element: "#line",
    },
    {
      heading: "Step 7: Single Year",
      content: <TutorialYearCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 8: Bar chart year mode",
      content:
        "See how different data from different years can be easily compared with the same chart. Switch between data views by clicking on 🟦 Arrivals or 🟪 Stays for a complete understanding.",
      element: "#bar",
    },
    {
      heading: "Step 9: Line chart year mode",
      content:
        "Experience the power of our line chart in year mode. Easily switch between data views by clicking on 🟦 Arrivals or 🟪 Stays for a more comprehensive analysis.",
      element: "#line",
    },
    {
      heading: "Step 10: Doughnut chart year",
      content:
        "Our Single-year mode allows you to focus on a specific year and analyze various activities. Switch between data views by clicking on the 🟧 Activity type box for a more in-depth understanding.",
      element: "#doughnut",
    },
    {
      heading: "Congratulations",
      content:
        "Congratulations on completing the tutorial! We hope you enjoy using our statistics page.",
      element: null,
    },
  ];
  //current step
  const currentTutorialStep = tutorialSteps[currentStep - 1];

  useEffect(() => {
    // Remove the "highlight" class from all elements
    const elements = document.querySelectorAll(".highlight");
    elements.forEach((element) => element.classList.remove("highlight"));

    // Add the "highlight" class to the current tutorial step element, if it exists
    if (currentTutorialStep.element) {
      const element = document.querySelector(currentTutorialStep.element);
      element?.classList.add("highlight");
    }
    if (currentStep === 3 || currentStep === 6 || currentStep === 9)
      setToggleChart("Bar");
    if (currentStep === 4 || currentStep === 7 || currentStep === 10)
      setToggleChart("Line");
    if (currentStep === 11) setToggleChart("Doughnut");
  }, [currentTutorialStep]);
//Function to handle tutorial close
  const handleClose = () => {
    setShowTutorial(false);
    setCurrentStep(1);
  };

  return (
    <div>
      {showTutorial && (
        <div className="tutorial-overlay" /* onKeyDown={handleKeyPress} */>
          <div className="tutorial-content text-dark">
            <div className="d-flex align-items-center justify-content-between mb-2">
              {currentStep !== 1 && (
                <ArrowLeft
                  className="text-dark tutorial-close-svg me-4"
                  role="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                />
              )}{" "}
              <h1 className="tutorail-header-step mx-auto mb-0 mt-4">
                {currentTutorialStep.heading}
              </h1>{" "}
              <XLg
                className={`text-dark tutorial-close-svg ${
                  currentStep !== 1 ? "ms-4" : ""
                }`}
                onClick={handleClose}
              />
            </div>
            <div className="tutorial-content-step">
              {currentTutorialStep.content}
            </div>

            {currentStep !== tutorialSteps.length &&
            currentStep !== 2 &&
            currentStep !== 5 &&
            currentStep !== 8 ? (
              <>
                <button
                  className="rounded-50 btn btn-primary rounded-pill"
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next Step
                </button>
              </>
            ) : null}
            {currentStep === tutorialSteps.length && (
              <button
                className="rounded-50 btn btn-primary rounded-pill text-white"
                type="button"
                style={{ backgroundColor: "purple" }}
                onClick={() => {
                  setShowTutorial(false);
                  setCurrentStep(1);
                }}
              >
                Close Tutorial
              </button>
            )}
            <Row className="mt-4">
              {tutorialSteps.map((e, i) => (
                <Col key={i} className="d-flex justify-content-center px-0">
                  <div
                    className={`tutorial-navigation-step ${
                      currentStep === i + 1 ? "active-nav text-white" : ""
                    }`}
                    role="button"
                    onClick={() => setCurrentStep(i + 1)}
                  >
                    {i}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      <QuestionDiamondFill
        className="tutorial-svg"
        onClick={() => setShowTutorial(true)}
      />
    </div>
  );
};

export default TutorialOverlay;
