import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Apartment } from "../../models/apartment.model";
import { Link } from "react-router-dom";

const ApartmentCard: FC<{ apartment: Apartment }> = ({ apartment }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Body>
        <Card.Title>{apartment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{apartment.address}</Card.Subtitle>
        <Card.Text>
          {apartment.description}
        </Card.Text>
        <Row>
          <Col>
            <Card.Link as={Link} to={`${apartment.id}`}>
              More
            </Card.Link>
          </Col>
          <Col>
            <Card.Text>By {apartment.owner.name} </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ApartmentCard;
