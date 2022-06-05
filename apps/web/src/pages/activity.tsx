import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <Container className="d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>My Activity</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link to="/account" as={Link}>
            Account
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Activity;
