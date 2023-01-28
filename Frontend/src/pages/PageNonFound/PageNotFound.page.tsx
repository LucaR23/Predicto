import "./PageNotFound.scss";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="bg-custom blue">
      <Container className="min-h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-white">
          <h1 className="title-404">404</h1>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. Name changed or is temporarily unavailable. Please go back
            to our PREDICTO home page.
          </p>
          </div>
          <Link to={"/home"}>
            <Button
              variant="primary rounded-pill"
              size="lg"
              className="my-2 my-md-0 mx-md-2 rounded-50"
            >
              Home
            </Button>
          </Link>
      </Container>
      </section>
  );
};

export default PageNotFound;
