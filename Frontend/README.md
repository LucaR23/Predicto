# Predicto Front-End

Welcome to the Predicto Project! This project is designed to analyze historical tourism data from ISTAT (an Italian data source) in order to predict future trends and patterns in tourism flow throughout Italy.

The project has two main pages: Statistics and Predictions.

### Statistics page

The data on the Statistics page is organized by four key categories:

- **Region**: Region: Currently, only Piemonte is available
- **Provice**: Asti, Alessandria, Torino, Verbania, Novara, Vercelli, Cuneo, Biella
- **Activity type**: hotel, non-hotel, 2 stars hotel, 3 stars hotel, rented accomodation, campsite, other exercise, farmhouse, bed and breakfast, 5 stars hotel
- **Origin**: from Italy, from Abroad

We have 3 different methods for comparing and analyzing this data through various charts:

- **Standard mode**: this mode allows you to view data for a single activity type over different years. You can also choose to view data for the flow of tourists from Italy or from abroad.
- **Compare mode**: in this mode, you can compare statistics data from two different provinces with the same activity types. You can also choose to view data for the flow of tourists from Italy or from abroad.
- **Year mode**: this mode allows you to view data for all activity types in a selected province over different years.

### Prediction page

 In tourism Predictions page you can easily forecast the flow of tourism within a chosen time range. We have organized the data into 5 main categories in the standard mode:

- **Region**: Region: Currently, only Piemonte is available
- **Provice**: Asti, Alessandria, Torino, Verbania, Novara, Vercelli, Cuneo, Biella
- **Activity type**: hotel, non-hotel, 2 stars hotel, 3 stars hotel, rented accomodation, campsite, other exercise, farmhouse, bed and breakfast, 5 stars hotel
- **Origin**: from Italy, from Abroad
- **Prediction end date**: the date your prediction will stop

We hope that you find the Predicto Project to be a valuable tool for understanding and predicting tourism trends in Italy.

---

# Run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## FILES AND PROJECT STRUCTURE

```
.
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── animations/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── logos/
│   │   ├── components/
│   │   │   ├── DropDown/
│   │   │   │   └── DropDown.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Footer.scss
│   │   │   ├── Form/
│   │   │   │   └── Form.tsx
│   │   │   ├── Modal/
│   │   │   │   └── Modal.tsx
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Navbar.scss
│   │   │   ├── Root/
│   │   │   │   └── Root.tsx
│   │   │   ├── Charts/
│   │   │   │   ├── CarouselChart.tsx
│   │   │   │   ├── SingleChart.tsx
│   │   │   │   ├── StcChartView.tsx
│   │   │   │   ├── StcCompareView.tsx
│   │   │   │   └── StcSingleYearView.tsx
│   │   │   ├── Tutorial/
│   │   │   │   ├── tutorial-modal-compare.tsx
│   │   │   │   ├── tutorial-modal-standard.tsx
│   │   │   │   ├── tutorial-modal-year.tsx
│   │   │   │   ├── tutorial.tsx
│   │   │   │   └── tutorial.scss
│   │   ├── hooks
│   │   │   ├── useFetch.tsx
│   │   │   ├── usePrdChart.hook.tsx
│   │   │   ├── useStcChart.hook.tsx
│   │   │   ├── useStcCompare.hook.tsx
│   │   │   └── useStcSingleYear.hook.tsx
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   ├── Home.page.tsx
│   │   │   │   └── home.scss
│   │   │   ├── login
│   │   │   │   ├── Login.page.tsx
│   │   │   │   └── login.scss
│   │   │   ├── predictions
│   │   │   │   ├── Predictions.page.tsx
│   │   │   │   └── predictions.scss
│   │   │   ├── privacy
│   │   │   │   ├── Privacy.page.tsx
│   │   │   │   └── Term.page.tsx
│   │   │   └── statistics
│   │   │       ├── Statistics.page.tsx
│   │   │       └── statistics.scss
│   │   ├── App.scss
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── colors.scss
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-end.d.ts
│   │   ├── reportWebVitals.ts
│   │   └── setupTest.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── tsconfig.json
```

---

# Libraries used

- **React**; React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application in a efficient way.
- **react-router-dom**; React Router DOM is a library that allows developers to create routes and navigate between them in a React application. It enables developers to build Single Page Applications (SPAs) with dynamic, client-side routing.
- **Bootstrap**; Bootstrap is a CSS framework that provides a set of pre-designed UI components and layout options. It allows developers to quickly create responsive and visually consistent interfaces, without having to write CSS from scratch.
- **Chart.js**; Chart.js is a library for creating charts and visualizing data. It provides a simple and intuitive API for creating a wide variety of chart types, including bar charts, line charts, and pie charts.
- **GSAP**; GSAP (GreenSock Animation Platform) is a JavaScript library for creating animations. It allows developers to create complex animations with a high level of control, using a simple and easy-to-use API.
- **swiper**; Swiper is a JavaScript library for creating carousels or sliders. It provides a flexible and customizable way to create carousels with touch and gesture support, and a wide range of options for customization.

# In depth

Here we are going to explain the main part of code and logics.

## Hooks

### UseFetch Hook

This is a custom React hook for fetching data from an API. It utilizes the **'useState'** and **'useEffect'** hooks from the React core library.

The hook takes in a single parameter, the **'url'** of the API endpoint to fetch data from.

It returns an array containing three values:

- **apiData**: an array of objects of type **dataResponse** or **null** if no data is returned.
- **loading**: a boolean indicating whether the API request is still in progress.
- **error**: a boolean indicating whether there was an error with the API request.

### Example usage

```javascript
import useFetch from "./useFetch";

function MyComponent() {
  const [data, loading, error] = useFetch("https://api.example.com/data");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.anno}>
          <p>Anno: {item.anno}</p>
          <p>Valore: {item.valore}</p>
        </div>
      ))}
    </div>
  );
}
```

In this example, the **'MyComponent'** uses the **'useFetch'** hook to fetch data from the specified API endpoint. The component will display "Loading..." while the request is in progress, "An error occurred" if there was an error with the request, or the data returned from the API if the request was successful.

### Use Chart hooks

This is a React hook for creating charts using the Chart.js library. The hook imports the **'useState'** and **'useEffect'** hooks from the React library, as well as the **'useFetch'** custom hook, the **'useSearchParams'** hook from the React Router library, and several mapping functions and types from other files.

The hook defines several types, including **'DataSetChart'**, **'DataChart'**, and **'OptionChart'**, which are used to set the structure of the data and options for the chart. The hook also defines an array of months, **'Month'**, and a **'useEffect'** hook that updates the chart data and options when the data from the API changes.

The hook then exports an array destructuring of the '**data**', **'option'**, **'filterData'**, and **'rangeYear'** states. It maps the data provided by the **'apiData'** prop, using the **'stcChartMap'** function, to match the structure of the **'DataChart'** and **'OptionChart'** types. It also sets the **'filterData'** and rangeYear states.

Here is an example of how the **'useStcChart'** hook could be used in a functional component:

```javascript
import { useStcChart } from "./useStcChart.hook";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, option, filterData, rangeYear] = useStcChart(apiData);
  return (
    <div>
      <Line data={data} options={option} />
      {/* additional code to handle the filterData and rangeYear state */}
    </div>
  );
};
```

In this example, the **'useStcChart'** hook is imported and called within the **'Chart'** component. The hook is passed the **'apiData'** as a prop, and then destructured to extract the data, option, **'filterData'**, and **'rangeYear'** states. The **'Line'** component from the **'react-chartjs-2'** library is then used to display the chart, passing in the data and option states as props.
You can also use the **'filterData'** and **'rangeYear'** states to handle the filter and range selection for the chart.

```javascript
import { useStcChart } from "./useStcChart.hook";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, option, filterData, rangeYear] = useStcChart(apiData);

  const handleFilter = (year) => {
    setData(filterData[year]);
  };

  return (
    <div>
      <Line data={data} options={option} />
      <Select value={year} onChange={handleFilter}>
        {rangeYear.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </Select>
    </div>
  );
};
```

In this example, a Select element is used to handle the filter selection, the value of the select is the year and the onChange is the handleFilter function. The handleFilter function takes the selected year and set the data of the chart to the data of the selected year.
Please note that this is just an example and additional code would be needed to handle the API call and provide the **'apiData'** prop to the hook, as well as the implementation

## Component

### CarouselChart Component

This code defines a React functional component called **'CarouselChart'** that utilizes the **Swiper** library for creating a carousel of charts. The component takes in three props: **'toggleChart'**, **'renderBar'**, and **'renderLine'**.

The **'toggleChart'** prop is a string that determines which type of chart to display, either **'Bar'** or **'Line'**. The **'renderBar'** prop is an array of JSX elements that represent the bar charts to be displayed in the carousel, and the **'renderLine'** prop is an array of JSX elements that represent the line charts to be displayed in the carousel.

The component makes use of the Swiper library to create the carousel, and imports the necessary components, styles, and modules from the library. It sets the slidesPerView to 1, the spaceBetween to 30, and enables the keyboard navigation, pagination, and navigation feature. It also applies a className **'mySwiper'** to the Swiper component.

Inside the component, a ternary operator is used to check the value of the **'toggleChart'** prop and render either the **'renderBar'** or **'renderLine'** props as slides in the carousel. It maps over the array of JSX elements, wrapping each one in a **'SwiperSlide'** component from the Swiper library.

At the end of the file, the **'CarouselChart'** component is exported so it can be used in other parts of the application.

```javascript
import CarouselChart from "./CarouselChart";

const App = () => {
  const [toggleChart, setToggleChart] = useState("Bar");
  const renderBar = [<MyBarChart1 />, <MyBarChart2 />, <MyBarChart3 />];
  const renderLine = [<MyLineChart1 />, <MyLineChart2 />, <MyLineChart3 />];

  return (
    <div>
      <button onClick={() => setToggleChart("Bar")}>Show Bar Charts</button>
      <button onClick={() => setToggleChart("Line")}>Show Line Charts</button>
      <CarouselChart
        toggleChart={toggleChart}
        renderBar={renderBar}
        renderLine={renderLine}
      />
    </div>
  );
};

export default App;
```

In this example, the **'App'** component uses the **'useState'** hook to manage the state of the **'toggleChart'** variable, which determines which type of charts to display in the carousel. The component also defines **'renderBar'** and **'renderLine'** as arrays of JSX elements that represent the bar and line charts to be displayed in the carousel.

The **'App'** component renders two buttons that allow the user to toggle between showing the **'Bar'** and **'Line'** charts. It also renders the **'CarouselChart'** component, passing it the **'toggleChart'**, **'renderBar'**, and **'renderLine'** props.

When the **'Show Bar Charts'** button is clicked, the **'setToggleChart'** function is called with the argument **'Bar'**, causing the component to display the bar charts in the carousel. When the **'Show Line Charts'** button is clicked, the **'setToggleChart'** function is called with the argument **'Line'**, causing the component to display the line charts in the carousel instead.

### StcChartView Component

This is a React functional component called **'StcChartView'** that displays a chart based on data fetched from an API. The component takes in one prop **'toggleChart'** which is a string that determines which type of chart to display, either **'Bar'** or **'Line'**.

The component makes use of the **'useSearchParams'** hook from **'react-router-dom'** to access the search parameters from the URL, and the **'useFetch'** and **'useStcChart'** hooks, which are custom hooks to handle fetching the data from the API and preparing it for the chart.

The component also imports several modules from **'chart.js'** and **'react-chartjs-2'** for creating the chart, as well as other components and assets from the application.

At the beginning of the component, it uses the **'useSearchParams'** hook to access the search parameters from the URL and construct the API endpoint. It then uses the **'useFetch'** hook to fetch data from the API, passing it the constructed endpoint as an argument.

The component also uses the **'useStcChart'** hook, which takes the fetched data as an argument, to process and filter the data to be used for the chart, and to create the options object for the chart.

It then defines two arrays **'renderBar'** and **'renderLine'**, which maps over the filterData, creating a JSX element for each data point with the options and data, and wraps them in a div.

Inside the component, it renders a loading spinner while the data is being fetched and an error message if there is an error fetching the data. It also checks the value of the **'searchParam.get("type")'** and displays either a **'SingleChart'** component or a **'CarouselChart'** component based on the value.

The **'SingleChart'** component takes in the **'toggleChart'** prop and the processed data and options and renders the appropriate chart type. The **'CarouselChart'** component takes in the **'toggleChart'** prop, the **'renderBar'** and **'renderLine'** props, and renders the appropriate array of charts as slides in the carousel.

At the end of the file, the StcChartView component is exported so it can be used in other parts of the application.

```javascript
import StcChartView from "./StcChartView.component";

const StatisticPage = () => {
  const [toggleChart, setToggleChart] = useState("Bar");

  return (
    <div>
      <button onClick={() => setToggleChart("Bar")}>Show Bar Chart</button>
      <button onClick={() => setToggleChart("Line")}>Show Line Chart</button>
      <StcChartView toggleChart={toggleChart} />
    </div>
  );
};

export default StatisticPage;
```

In this example, the **'StatisticPage'** component uses the **'useState'** hook to manage the state of the **'toggleChart'** variable, which determines which type of chart to display.

The component renders two buttons that allow the user to toggle between showing the **'Bar'** and **'Line'** charts. It also renders the **'StcChartView'** component, passing it the **'toggleChart'** prop.

When the **'Show Bar Chart'** button is clicked, the **'setToggleChart'** function is called with the argument **'Bar'**, causing the component to display the bar chart. When the **'Show Line Chart'** button is clicked, the **'setToggleChart'** function is called with the argument **'Line'**, causing the component to display the line chart instead.

It's important to notice that this component require a specific structure of the URL, and also some custom hooks to work properly, you should check the code and the dependencies of the component before use it.

### CustomForm Component

This is a React functional component called **'CustomForm'** that takes in two props: **'type'** and **'handleClose'**. The component makes use of the **'useSearchParams'** hook from react-router-dom to handle the query parameters and the **'useState'** hook to track the state of the dropdown menu for the type field.

The component has four different submit handlers, each corresponding to a different form type: **'handleOnStandardSubmit'**, **'handleOnCompareSubmit'**, **'handleOnYearSubmit'**, and **'handleOnRangeSubmit'**. Each of these handlers prevent the default action and stop the event from propagating, and then sets the search parameters based on the values of the form fields.

The useEffect hook is used to check if the activityType in the search parameters is either **'hotel'** or **'non-hotel'**, and if so, it sets the state of the showType state variable to true, which causes the type dropdown menu to be displayed.

The component also makes use of React Bootstrap components for the buttons and modal, and also imports a component called **'DropDown'**.

```javascript
import CustomForm from "./CustomForm.component";

function ParentComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Form
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Custom Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm type="standard" handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
```

In this example, the parent component contains a button that, when clicked, sets the **'showModal'** state variable to true, which causes the modal to be displayed. The modal contains the **'CustomForm'** component, and the **'handleClose'** function is passed as a prop to the component so that it can be used to close the modal when the form is submitted. The type prop is also passed to the component to indicate which type of form to display.

## Page

### Statistics page

This is a React functional component called Statistics that uses the useSearchParams hook from react-router-dom to access the query parameters and the useState hook to track the state of the modal and chart toggle.

The component contains a card that displays the statistics for the selected province, activity type, country, and year. It also contains several buttons for controlling the view of the statistics, such as a **'setting'** button to open the settings modal, and buttons for toggling between different chart types (bar chart, line chart, and doughnut chart).

The useEffect hook is used to check the kind of the searchParams and if it's **'standard'** or **'compare'** or **'null'** and toggleChart is **'Doughnut'** it will switch the toggleChart to **'Bar'**.

The component also makes use of several React Bootstrap components for the layout, and also imports several assets (icons) and other components (ModalSetting, StcChartView, TutorialOverlay, StcCompareView and StcSingleYearView).

It also uses scss stylesheet for styling.

## Function

### map.function

This code exports a function called stcChartMap that takes in a single argument, apiData. The purpose of this function is to take data from an API, map it, and return an object containing several arrays that will be used to create a chart.

### enviroment

Here we provide const for different poupouse, like option for the chart, form labels etc.

```javascript
//Env var
const localHost = "localhost:8080";
const server = "18.102.24.178:8080";

export const activeHost = localHost;
```

This code is used to switch between a local development environment and a remote production environment by changing the value of activeHost.

By default, the code is pointing to the local environment, which is "localhost:8080" but it can be changed to the remote environment by changing the value of activeHost to server.

