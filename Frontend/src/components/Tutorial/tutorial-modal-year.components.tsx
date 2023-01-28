// React core imports
import { FC } from "react";

// Bootstrap
import { Button } from "react-bootstrap";

// React router dom
import { useSearchParams } from "react-router-dom";

// Components imports
import DropDown from "../DropDown/DropDown.component";

//Type imports
import { TutorialModalType } from "./tutorial-modal-compare.component";

const TutorialYearCompare: FC<TutorialModalType> = ({ setCurrentStep }) => {
  //Hook for set serachParam
  const [, setSearchParam] = useSearchParams();
  //Handle form submit
  const handleOnYearSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    //Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "year",
      province: e.target[0].value,
      country: e.target[1].value,
      year: e.target[2].value,
    });
    //Go next step
    setCurrentStep(9);
  };

  return (
    <>
      <p>Compare various activity types filtered by year with this feature. Don't forget to save your settings before viewing the comparison.</p>
      <form className="tutorial-form" onSubmit={handleOnYearSubmit}>
        <DropDown type="province" />
        <DropDown type="country" />
        <DropDown type="year" />
        <div className="d-flex justify-content-center align-items-center">
          <Button
            variant="primary"
            type="submit"
            className="rounded-50 btn btn-primary rounded-pill mt-2"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default TutorialYearCompare;
