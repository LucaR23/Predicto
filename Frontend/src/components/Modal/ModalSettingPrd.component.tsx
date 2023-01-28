//React core imports
import { FC } from "react";
//Comopnents import
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomForm from "../Form/CustomForm.componenr";
//Props type
type ModalSettingProps = {
  show: boolean;
  handleClose: () => void;
};
//Modal component for setting the req.
const ModalSettingPrd: FC<ModalSettingProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <div className="d-flex flex-column">
          <h4>Setting</h4>
          <p className="text-muted m-0">Filter data in different way!</p>
        </div>
      </Modal.Header>
      <Tabs
        defaultActiveKey="range-month"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="range-month" title="range-month">
          <CustomForm type="range-month" handleClose={handleClose} />
        </Tab>
      </Tabs>
    </Modal>
  );
};

export default ModalSettingPrd;
