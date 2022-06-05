import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex flex-column text-center justify-content-center h-100">
      <div className="text-center">
        <h2 className="rainbow-text">Rentals</h2>
        <h2 className="rainbow-text header-2">
          Send request for the apartment!
        </h2>
        <p className="leading-text">
          Search apartments, create account like the apartment and owner will
          reach out to you!
        </p>
      </div>
    </Container>
  );
};

export default Home;
