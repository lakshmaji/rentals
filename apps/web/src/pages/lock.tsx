
import { useCallback, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { AppState } from "../models/user.model";
import SignIn from "./signin";

const Lock = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const from = (location.state as any)?.returnTo?.pathname || "/";

  const appState = { ...location, returnTo: from } as AppState;
  return (
    <Container className="d-flex flex-column text-center justify-content-center h-100">
      <SignIn appState={appState} />
    </Container>
  );
};

export default Lock;
