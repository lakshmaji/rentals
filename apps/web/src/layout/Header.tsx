import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useSelector from "../hooks/useSelector";
import { authSelector } from "../state/user/user.selector";
import AuthButtons from "../components/auth/AuthButtons";

const Header = () => {
  const { isAuthenticated } = useSelector(authSelector);

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Rentals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/apartments" as={NavLink}>
              Apartments
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link to="/account" as={NavLink}>
                My Account
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <AuthButtons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
