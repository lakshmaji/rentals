import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import useSelector from "../../hooks/useSelector";
import { authSelector } from "../../state/user/user.selector";

const LoginButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated } =useSelector(authSelector);

  const onClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  if(isAuthenticated) {
      return null;
  }

  return (
    <Button onClick={onClick} variant="white" size="sm">
      Signin
    </Button>
  );
};

export default LoginButton;
