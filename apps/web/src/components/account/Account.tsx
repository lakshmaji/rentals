import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <Container className="d-flex flex-wrap justify-content-center align-items-center">
      <Card>
        <Card.Body className="text-center">
          <Card.Title>My Account</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>View Profile (name and email address)</Card.Text>
          <Card.Text>
            View activity like posts (apartments) and interact with interested
            users.
          </Card.Text>
          <Card.Link to="profile" as={Link}>
            Profile
          </Card.Link>
          <Card.Link to="activity" as={Link}>
            Activity
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Account;
