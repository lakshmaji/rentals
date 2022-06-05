import { Navbar, Badge } from "react-bootstrap";
import useSelector from "../../hooks/useSelector";
import { authSelector } from "../../state/user/user.selector";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const LogoutButton = () => null;

const AuthButtons = () => {
  const { isAuthenticated, name } = useSelector(authSelector);

  if (isAuthenticated && name) {
    return (
      <>
        <Navbar.Text>
          <Badge bg="light" text="dark">
            {name}
          </Badge>
        </Navbar.Text>
        <Navbar.Text>
          <LogoutButton />
        </Navbar.Text>
      </>
    );
  }

  return (
    <>
      <Navbar.Text>
        <RegisterButton />
        <LoginButton />
      </Navbar.Text>
    </>
  );
};

export default AuthButtons