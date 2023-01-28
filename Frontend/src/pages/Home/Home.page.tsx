// React
import React, { useEffect, useRef } from "react";
//React-router-dom imports
import { Link } from "react-router-dom";

// Style
import "./home.scss";

// Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card, Col, Row } from "react-bootstrap";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SVG for logos
import { ReactComponent as AnimationWave } from "../../assets/animation/home-wave-animation.svg";
import { ReactComponent as StaticWave } from "../../assets/animation/home-wave-static.svg";
import { ReactComponent as CardAnimationFirst } from "../../assets/animation/card-animation-first.svg";
import { ReactComponent as CardAnimationSecond } from "../../assets/animation/card-animation-second.svg";
import { ReactComponent as Istat } from "../../assets/logos/logo-istat.svg";

// Component
import FooterCustom from "../../components/Footer/Footer.components";

// Enviroment variables
import { workers } from "../../__functions/evironment";

// Register plugin ScrollTrigger of gsap
gsap.registerPlugin(ScrollTrigger);

interface WorkerType {
  src: string;
  srcHover: string;
  name: string;
  field: string;
}

const Home = () => {
  //Ref element of gsap scroll effect
  const refStatisticCard = useRef<HTMLInputElement>(null);
  const refPredictoCard = useRef<HTMLInputElement>(null);
  const refIstatSection = useRef<HTMLInputElement>(null);
  const refTeamSection = useRef<HTMLInputElement>(null);
  const refLandingBlock = useRef<HTMLInputElement>(null);
  //Declare gsap effect on scroll view
  useEffect(() => {
    const stcCard = refStatisticCard.current;
    const predictoCard = refPredictoCard.current;

    const istat = refIstatSection.current;
    const team = refTeamSection.current;

    const landing = refLandingBlock.current;

    if (stcCard && predictoCard) {
      gsap.fromTo(
        stcCard,
        {
          opacity: 0,
          y: +400,
        },
        {
          opacity: 1,
          duration: 0.4,
          y: 0,
          scrollTrigger: {
            trigger: stcCard,
            start: "top-=20% top+=600px",
            /* markers: true  */
          },
        }
      );
      gsap.fromTo(
        predictoCard,
        {
          opacity: 0,
          y: +400,
        },
        {
          opacity: 1,
          duration: 0.4,
          y: 0,
          scrollTrigger: {
            trigger: predictoCard,
            start: "top-=20% top+=600px",
            /* markers: true */
          },
        }
      );

      gsap.fromTo(
        istat,
        {
          opacity: 0,
          animationTimingFunction: "ease-in",
        },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: istat,
            start: "top+=30% top+=600px",
            /* markers: true */
          },
        }
      );

      gsap.fromTo(
        team,
        {
          opacity: 0,
          animationTimingFunction: "ease-in",
        },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: team,
            start: "top+=40% top+=600px",
            /* markers: true  */
          },
        }
      );
    }

    gsap.fromTo(
      landing,
      {
        opacity: 0,
        animationTimingFunction: "ease-in",
      },
      {
        opacity: 1,
        duration: 2.5,
      }
    );
  }, []);

  return (
    <Container fluid className="px-0">
      {/* Introduction to Predicto with logos */}
      <section className="d-flex flex-column align-items-center justify-content-between min-h-100 bg-custom blue text-white px-3">
        <div
          className="d-flex flex-column align-items-center my-auto"
          ref={refLandingBlock}
        >
          {/* <Logo /> */}
          <h1 className="text-center title-home">
            Make your analyisis better with Predicto.
          </h1>
          <h5 className="text-center">
            WE provide turism income analysis tools, with Predicto
          </h5>
          <h5 className="text-center">
            YOU can see the future income and make better decision for your
            business.
          </h5>
          <div className="d-flex flex-column flex-md-row mt-2">
            <Button
              variant="primary rounded-pill"
              size="lg"
              className="my-2 my-md-0 mx-md-2 rounded-50"
              href="#card"
            >
              Get Started
            </Button>
            <Link
              to="/statistics?kind=standard&province=Torino&activityType=3+star+hotel&country=Italy&tutorial=open"
              className="d-flex justify-content-center"
            >
              <Button
                variant="secondary rounded-pill"
                size="lg"
                className="my-2 my-md-0 mx-md-2 rounded-50 text-white"
              >
                Tutorial
              </Button>
            </Link>
          </div>
        </div>
        <AnimationWave />
      </section>

      {/* Cards of our charts */}
      <section
        id="card"
        className="min-h-100 bg-custom sky-blue px-3 pt-3 pt-md-0 pb-4"
      >
        <Row className="w-100 m-0 min-h-100 pb-4">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center my-4 col-h-100"
          >
            {/* Statistic chart card */}
            <Card
              className="card-home bg-white gsap-card"
              ref={refStatisticCard}
            >
              {/* <Image src={placeholderFirst} className="img-fluid rounded" /> */}
              <CardAnimationFirst
                style={{ margin: "auto", marginTop: "30px" }}
              />
              <Card.Body className="m-4 mt-0">
                <h2 className="p-2">Actual Statistic</h2>
                <Card.Text className="p-2">
                  This tool offers current and historical tourism statistics.
                  Select your desired time frame, utilize the filter options,
                  and easily access all the data you need.
                </Card.Text>
                <Link to="/statistics?kind=standard&province=Torino&activityType=3+star+hotel&country=Italy" className="p-2">
                  <Button variant="primary rounded-pill">Open</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center my-4 col-h-100"
          >
            {/* Prediction chart card */}
            <Card
              ref={refPredictoCard}
              className="card-home bg-white gsap-card"
            >
              <CardAnimationSecond
                style={{ margin: "auto", marginTop: "30px" }}
              />
              <Card.Body className="m-4 mt-0" >
                <h2 className="p-2">Prediction</h2>
                <Card.Text className="p-2">
                  This tool offers a prediction feature for tourism data, based
                  on real statistical data. Use it to plan your business and
                  gain insight into potential future trends.
                </Card.Text>
                <Link to="/predictions?province=Torino&activityType=hotel&country=Italy&indicator=Arrival&steps=24" className="p-2">
                  <Button variant="primary rounded-pill">Open</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <StaticWave className="staticwave" /> */}
      </section>

      {/* Istat data and explanations of the data we use */}
      <section className="istat px-3 bg-custom blue p-2">
        <div className="p-1 pb-4" ref={refIstatSection}>
          <p className="text-white display-6 text-center m-4">
            Source data from{" "}
            <span className="display-1">
              <Istat />
            </span>
          </p>
          <blockquote className="blockquote">
            <h3 className="w-75 m-auto text-white mb-2">What is?</h3>
            <p className="w-75 m-auto text-white mb-3">
              Our app collects tourism data from the Istat website for a
              specific province in the Piemonte region of Italy. We present this
              data in visually appealing charts, making it easy for you to
              understand and analyze.
            </p>
            <h3 className="w-75 m-auto text-white mb-2">How it works?</h3>
            <p className="w-75 m-auto text-white mb-4">
              In addition, our app has a feature that allows you to see
              predictions for future tourism data . These predictions are made
              using machine learning algorithms that have been trained on the
              data we have collected.
            </p>
            <p className="w-75 m-auto text-white pb-4 mb-4">
              We hope you find our app helpful in understanding and analyzing
              tourism data for the Piemonte region. Thank you for using our app!
            </p>
          </blockquote>
        </div>
      </section>

      {/* Our team section with avatar */}
      <section className="our-team bg-custom sky-blue px-3 shadow-lg p-4">
        <div ref={refTeamSection}>
          <h2 className="mb-4 pt-4 text-center text-uppercase">Our Team</h2>
          <div className="d-flex justify-content-center flex-wrap">
            {workers.map((el: WorkerType, index: number) => (
              <div key={index} className="m-2 text-center">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = el.srcHover)}
                  onMouseLeave={(e) => (e.currentTarget.src = el.src)}
                  src={el.src}
                  alt="..."
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
                <h3 className="mt-4">{el.name}</h3>
                <p>{el.field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact us section */}
      <section className="contactUs bg-custom blue p-4">
        <h2 className="ms-3 text-center text-white text-uppercase m-3">
          Contact Us
        </h2>
        <div className="w-xxl-80 mx-auto p-3 m-3">
          <Row className="m-auto">
            <Col xs={12} md={6} className=" p-2">
              <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22541.995642265392!2d7.6516714180993155!3d45.07059331227261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d71c8d8bb55%3A0xaf5abbd586b9f391!2sFondazione%20ITS%20Turismo%20e%20attivit%C3%A0%20culturali!5e0!3m2!1sit!2sit!4v1671721136537!5m2!1sit!2sit"
                width="600"
                height="500"
                loading="lazy"
              ></iframe>
            </Col>
            <Col xs={12} md={4} className="m-2 p-2 text-white">
              <h4>Infosense</h4>
              <h4>ITS-ICT TORINO</h4>
              <p>
                Infosense is a small start up where students are ledears.
                Infosense is a project of ITS-ICT Torino School
              </p>
              <h5>CONTACT</h5>
              <p>infosense@infosense.it</p>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer component */}
      <FooterCustom />
    </Container>
  );
};

export default Home;
