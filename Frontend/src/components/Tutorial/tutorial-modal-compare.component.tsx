// React core imports
import { Dispatch, FC, SetStateAction } from "react";

// Bootstrap
import { Button } from "react-bootstrap";

// React router dom
import { useSearchParams } from "react-router-dom";

// Components imports
import DropDown from "../DropDown/DropDown.component";

// Props type
export type TutorialModalType = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialModalCompare: FC<TutorialModalType> = ({ setCurrentStep }) => {
  //Hook searchParam
  const [, setSearchParam] = useSearchParams();
  //Handle submit form
  const handleOnCompareSubmit = (e: any) => {
    // PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    
    // Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "compare",
      province: e.target[0].value,
      provinceSecond: e.target[1].value,
      activityType: e.target[2].value,
      country: e.target[3].value,
    });
    //Go next step
    setCurrentStep(6);
  };

  return (
    <>
      <p>This feature allows you to compare data across two cities of your choice. Don't forget to save your settings before viewing the comparison.</p>
      <form className="tutorial-form" onSubmit={handleOnCompareSubmit}>
        <DropDown type="province" />
        <DropDown type="provinceSecond" />
        <DropDown type="activityType" />
        <DropDown type="country" />
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className="rounded-50 btn btn-primary rounded-pill mt-2"
            variant="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default TutorialModalCompare;
