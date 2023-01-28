//React core imports
import { useEffect, useState } from "react";
//Bootstrap components imports
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
//React-router-dom imports
import { Link, useLocation } from "react-router-dom";
//Import logos
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { ReactComponent as PredictoLogoWhite } from "../../assets/logos/logo-predicto-white.svg";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense-navbar.svg";
import { ReactComponent as IstatLogo } from "../../assets/logos/logo-istat.svg";
import { ReactComponent as Github } from "../../assets/logos/gitHubwhite.svg";
//Import style
import "./Navbar.scss";

const NavbarCustom = () => {
  // state to handle if the navbar is open or not
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  //state for handle active link
  const { pathname } = useLocation();

  // Navbar is always close when the page is rendered
  useEffect(() => {
    if (navbarOpen)
      document.body.classList.add("overflow-y-hidden");
    else
      document.body.classList.remove("overflow-y-hidden");
  }, [navbarOpen]);

  return (
    <Navbar
      expand="md"
      className={`fixed-top shadow ${navbarOpen ? "bg-blue" : "bg-skyblue"}`}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/home">
            {navbarOpen ? (
              <PredictoLogoWhite />
            ) : (
              <PredictoLogo className="w-75" />
            )}
          </Link>
        </Navbar.Brand>

        {/* 
        Hamburger menu.
        If navbar is greater then md size of the page (based on bootstrap sizes) shows the hamburger menu 
        */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className={`${navbarOpen ? "is-active text-white" : ""} menu-toggle d-md-none`}
        />

        {/* 
        Navbar links.
        If hamburger menu is open, when you click a link, the menu will close 
        */}
        <Navbar.Collapse className={`${navbarOpen ? "show" : ""}`}>
          <Nav
            className={`ms-md-auto text-black ${navbarOpen ? "min-h-90 text-white" : ""}`}
          >
            <div className={`${pathname === '/home' ? 'active' : ''}`}>
            <Link
              className={`nav-link text-black nav-link-font ${navbarOpen ? "mt-4 mx-2 text-white" : ""}${pathname === '/home' && !navbarOpen ? ' text-blue' : ''}`}
              to="/home"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Home
            </Link>
            </div>
            <div className={`${pathname === '/statistics' ? 'active' : ''} mx-md-2`}>
            <Link
              className={`nav-link text-black nav-link-font ${navbarOpen ? "m-2 text-white" : ""}${pathname === '/statistics' && !navbarOpen ? ' text-blue' : ''}`}
              to="/statistics?province=Torino&activityType=3+star+hotel&country=Italy"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Statistics
            </Link>
            </div>
            <div className={`${pathname === '/predictions' ? 'active' : ''}`}>
            <Link
              className={`nav-link text-black nav-link-font ${navbarOpen ? "m-2 text-white" : ""}${pathname === '/predictions' && !navbarOpen ? ' text-blue' : ''}`}
              to="/predictions?province=Torino&activityType=hotel&country=Italy&indicator=Arrival&steps=24"
              onClick={() => setNavbarOpen(false)}
            >
              Predictions
            </Link>
            </div>
            {navbarOpen ? (
              <div>
                <a className="nav-link text-black nav-link-font" href="https://github.com/LucaRocci/InfoSense" target="_blank">
                  <Github className="nav-svg-github ms-2 text-white" />
                </a>
                <a className="nav-link text-black nav-link-font" href="http://dati.istat.it/index.aspx" target="_blank">
                  <IstatLogo className="nav-svg-istat" />
                </a>
              </div>
            ) : null}

            {/* Navbar mobile footer */}
            {navbarOpen ? (
              <footer className="mt-auto py-3 nav-footer">
                <Row className="mb-4">
                  <Col className="text-center"><Link className="text-white" to="/privacy" target="_parent">  Privacy </Link></Col>
                  <Col className="text-center">Contact</Col>
                  <Col className="text-center"><Link className="text-white" to="/terms" target="_parent"> Terms </Link></Col>
                </Row>
                <Row className="mb-3">
                  <Col className="text-muted d-flex justify-content-start nav-copyrigth-text">
                    2023 @ all right reserved
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <InfosenseLogo className="w-75" />
                  </Col>
                </Row>
              </footer>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
