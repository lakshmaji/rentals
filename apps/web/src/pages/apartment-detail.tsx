import React, { FC } from "react";
import {
  Button,
  Breadcrumb,
  Container,
  ListGroup,
  Card,
  Badge,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import useSelector from "../hooks/useSelector";
import { apartmentByIdSelector } from "../state/apartment/apartment.selector";
import "../App.css";

const UserCard: FC<{ online?: boolean }> = ({ online = true }) => {
  return (
    <>
      <ListGroup.Item as="li" className="d-flex m-2 border-0 shadow-sm">
        <div className="m-auto ms-0 w-100">
          <Row>
            <Col>
              <h4 className="fw-bold">Lakki</h4>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              {online ? (
                <Badge bg="success" pill>
                  online
                </Badge>
              ) : (
                <Badge bg="danger" pill>
                  offline
                </Badge>
              )}
            </Col>
          </Row>
          <Row>
            <Stack direction="horizontal" gap={2}>
              <Button variant="dark" className="text-white" size="sm">
                Chat
              </Button>
              <Button variant="outline-secondary" size="sm">
                Match
              </Button>
              <div className="vr  ms-auto" />
              <Badge bg="light" text="dark">
                connected
              </Badge>{" "}
            </Stack>
          </Row>
        </div>
      </ListGroup.Item>
    </>
  );
};

const InterestedUsersList = () => {
  return (
    <ListGroup>
      {Array.from({ length: 10 }).map((_, i) => (
        <UserCard key={i} online={i % 3 === 0} />
      ))}
    </ListGroup>
  );
};

const ApartmentDetail = () => {
  let { id } = useParams<"id">();
  const navigate = useNavigate();
  const apartment = useSelector(apartmentByIdSelector)(id?.toString());

  if (!apartment) {
    return (
      <Container className="d-flex flex-column  text-center justify-content-center ">
        <h1>Not found</h1>
        Sorry the apartment you are looking for is occupied! You can find more{" "}
        <Link to="/apartments">here</Link>
      </Container>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container className="d-flex flex-column">
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={() => <Link to="/">Home</Link>}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={() => <Link to="/apartments">Apartments</Link>}
          >
            Apartments
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{apartment.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Container className="d-flex flex-row justify-content-between">
          <h1 className="text-capitalize">{apartment.name}</h1>
          <Button variant="dark" onClick={goBack}>
            Back
          </Button>
        </Container>
      </Row>

      <Row>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} className="bd-content">
              <Row>
                <Card>
                  <Card.Img className="col-auto" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Subtitle>Owner: Name</Card.Subtitle>
                  </Card.Body>
                </Card>
                <hr />
                <h2>Interested users</h2>
                <p>select any one to chat</p>
                <p>Note: you will be able to chat with users who are online</p>
                <InterestedUsersList />
              </Row>
            </Col>
            <Col xs={6} md={{ span: 4, offset: 7 }} className="position-fixed ">
              <Container className=" d-flex flex-column  vh-75  shadow-lg">
                
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default ApartmentDetail;
