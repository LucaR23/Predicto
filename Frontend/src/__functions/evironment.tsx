// Imports avatar svg
import avatarSara from "../assets/avatar/avatar-sara.svg";
import avatarSaraHover from "../assets/avatar/avatar-sara-hover.svg";
import avatarLuca from "../assets/avatar/avatar-luca.svg";
import avatarLucaHover from "../assets/avatar/avatar-luca-hover.svg";
import avatarPietro from "../assets/avatar/avatar-pietro.svg";
import avatarPietroHover from "../assets/avatar/avatar-pietro-hover.svg";
import avatarSimone from "../assets/avatar/avatar-simone.svg";
import avatarSimoneHover from "../assets/avatar/avatar-simone-hover.svg";
import avatarGabriele from "../assets/avatar/avatar-gabriele.svg";
import avatarGabrieleHover from "../assets/avatar/avatar-gabriele-hover.svg";
import avatarMarco from "../assets/avatar/avatar-marco.svg";
import avatarMarcoHover from "../assets/avatar/avatar-marco-hover.svg";
import avatarFederico from "../assets/avatar/avatar-federico.svg";
import avatarFedericoHover from "../assets/avatar/avatar-federico-hover.svg";
import avatarMatteo from "../assets/avatar/avatar-matteo.svg";
import avatarMatteoHover from "../assets/avatar/avatar-matteo-hover.svg";
//Type imports
import { OptionChart } from "../hooks/useStcChart.hook";

// Interface for avatar
interface WorkerType {
  src: string;
  srcHover: string;
  name: string;
  field: string;
}

//Env var
const localHost = "localhost:8080";
const server = "18.102.24.178:8080";

export const activeHost = localHost;

// Our team members
export const workers: WorkerType[] = [
  {
    src: `${avatarGabriele}`,
    srcHover: `${avatarGabrieleHover}`,
    name: "Gabriele",
    field: "Web Develop",
  },
  {
    src: `${avatarPietro}`,
    srcHover: `${avatarPietroHover}`,
    name: "Pietro",
    field: "Web Develop",
  },
  {
    src: `${avatarSimone}`,
    srcHover: `${avatarSimoneHover}`,
    name: "Simone",
    field: "Web Develop",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarLucaHover}`,
    name: "Luca",
    field: "Backend",
  },
  {
    src: `${avatarMarco}`,
    srcHover: `${avatarMarcoHover}`,
    name: "Marco",
    field: "Backend",
  },
  {
    src: `${avatarSara}`,
    srcHover: `${avatarSaraHover}`,
    name: "Sara",
    field: "Backend",
  },
  {
    src: `${avatarFederico}`,
    srcHover: `${avatarFedericoHover}`,
    name: "Federico",
    field: "Fintech",
  },
  {
    src: `${avatarMatteo}`,
    srcHover: `${avatarMatteoHover}`,
    name: "Matteo",
    field: "Fintech",
  },
];

//Possible URL to call in fetch
export const ActivityUrl = `http://${activeHost}/statistics/structures`;
export const ProvinceUrl = `http://${activeHost}/statistics/province`;

//Default value
export const provItems = ["Italy", "abroad"];
export const filterValue = ["Year", "Month"];
export const years = [
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
export const indicators = ['Arrival', 'Stay'];
export const prdActivity = ['hotel', 'non-hotel'];

//object of label
export const label = {
  region: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">📍</div> <div>Region</div>
    </div>
  ),
  province: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">📍</div> <div>Province</div>
    </div>
  ),
  provinceSecond: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">📍</div> <div>Second Province</div>
    </div>
  ),
  activityType: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">🛏️</div>
      <div>Activity Type</div>
    </div>
  ),
  country: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">🌍</div>
      <div>Origin</div>
    </div>
  ),
  type: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">📆</div>
      <div>Month or Year</div>
    </div>
  ),
  year: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">📆</div>
      <div>Year</div>
    </div>
  ),
  indicators: (
    <div className="d-flex align-items-center ms-2">
      <div className="me-1">🧳</div>
      <div>Indicator</div>
    </div>
  ),
};

//Prediction chart option
 export  const prdOption : OptionChart = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        position: "top" as const,
        display: false
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
        footerFont: {
          size: 10, // there is no footer by default
        },
      },
    },
  };


//Stc Option chart
export  const stcOption : OptionChart = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        position: "top" as const,
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
        footerFont: {
          size: 10, // there is no footer by default
        },
      },
    },
  };