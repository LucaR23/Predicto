//React core imports
import { FC, Dispatch, SetStateAction } from "react";
//Hokks imports
import useFetch from "../../hooks/useFetch.hook";
//Components import
import Form from "react-bootstrap/Form";
//React-router-dom imports
import { useSearchParams } from "react-router-dom";
//Env imports
import {
  label,
  ActivityUrl,
  ProvinceUrl,
  provItems,
  filterValue,
  years,
  indicators,
  prdActivity,
} from "../../__functions/evironment";

//Props type
type DropDownProps = {
  type: string;
  setShowType?: Dispatch<SetStateAction<boolean>>;
};

//DropDown Comopnent
const DropDown: FC<DropDownProps> = ({ type, setShowType }) => {
  //SearchParam hook for dynamic defaultValue
  const [searchParam] = useSearchParams();
  //useFetch hook for call api
  const [apiData, loading, error] = useFetch(
    type === "activityType"
      ? ActivityUrl
      : type === "province" || type === "provinceSecond"
      ? ProvinceUrl
      : ""
  );
 //Function for handle change activityType
  const handleChange = (e: any) => {
    if (type === "activityType") {
      if (e.target.value === "hotel" || e.target.value === "non-hotel") {
        if (typeof setShowType !== "undefined") setShowType(true);
      } else if (typeof setShowType !== "undefined") setShowType(false);
    }
  };
 // render the rigth dropdown 
  return (
    <>
      <label>
        {type === "region" && label.region}
        {(type === "activityType" || type === "prdActivityType") &&
          label.activityType}
        {type === "province" && label.province}
        {type === "provinceSecond" && label.provinceSecond}
        {type === "country" && label.country}
        {type === "type" && label.type}
        {type === "year" && label.year}
        {type === "indicator" && label.indicators}
      </label>
      <Form.Select className="mb-2" onChange={handleChange}>
        {loading ? <option>Loading...</option> : null}
        {type === "region" ? (
          <option value={"Piemonte"}>{"Piemonte"}</option>
        ) : null}
        {Array.isArray(apiData) &&
        !loading &&
        !error &&
        type !== "provinceSecond"
          ? apiData.map((el) => {
              if (typeof el === "string")
                return (
                  <option
                    key={el}
                    selected={searchParam.get(type.toString()) === el}
                    value={el}
                  >
                    {el}
                  </option>
                );
            })
          : null}
        {type === "provinceSecond" && Array.isArray(apiData)
          ? apiData.map((el) => {
              if (typeof el === "string")
                return (
                  <option
                    key={el}
                    selected={searchParam.get(type.toString()) === el}
                    value={el}
                  >
                    {el}
                  </option>
                );
            })
          : null}
        {type === "country" && !loading
          ? provItems.map((e) => (
              <option
                key={e}
                selected={e === searchParam.get("country")}
                value={e}
              >
                {e}
              </option>
            ))
          : null}
        {type === "type" && !loading
          ? filterValue.map((e) => (
              <option
                key={e}
                selected={e === searchParam.get("type")}
                value={e}
              >
                {e}
              </option>
            ))
          : null}
        {type === "year" && !loading
          ? years.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))
          : null}

        {type === "indicator" && !loading
          ? indicators.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))
          : null}

        {type === "prdActivityType" && !loading
          ? prdActivity.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))
          : null}
      </Form.Select>
    </>
  );
};

export default DropDown;
