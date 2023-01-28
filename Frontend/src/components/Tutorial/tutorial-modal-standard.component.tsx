// React core imports
import React, { useState, FC } from "react";

// React-router-dom imports
import { useSearchParams } from "react-router-dom";

// Components impoprts
import DropDown from "../DropDown/DropDown.component";
import { Button } from "react-bootstrap";

//Type imports
import { TutorialModalType } from "./tutorial-modal-compare.component";

const TutorialModalStandard: FC<TutorialModalType> = ({ setCurrentStep }) => {
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);

  //Hook for searchParam
  const [, setSearchParam] = useSearchParams();

  //Function to handle the form submit
  const handleOnStandardSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    
    //Check if dropdwon for type has value or not to change the searchParams
    if (e.target[3].value.length === 0)
      setSearchParam({
        kind: "standard",
        province: e.target[0].value,
        activityType: e.target[1].value,
        country: e.target[2].value,
      });
    else
      setSearchParam({
        province: e.target[0].value,
        activityType: e.target[1].value,
        country: e.target[2].value,
        type: e.target[3].value,
      });
    //Go next step
    setCurrentStep(3);
  };

  return (
    <>
      <p>Easily customize your preferences and apply filters on this page. Don't forget to save your changes!</p>
      <form
        className="tutorial-form"
        onSubmit={handleOnStandardSubmit}
        onChange={(e) => e.stopPropagation()}
      >
        <DropDown type="province" />
        <DropDown type="activityType" setShowType={setShowType} />
        <DropDown type="country" />
        {showType ? <DropDown type="type" /> : null}
        <div className="d-flex justify-content-center align-items-center">
          {/*         <Button className="rounded-50 btn btn-primary rounded-pill mt-2 me-2" type="button" onClick={() => setCurrentStep(1)}>
                Previous Step
              </Button> */}
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

export default TutorialModalStandard;
