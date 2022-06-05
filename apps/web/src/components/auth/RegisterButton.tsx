import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import useSelector from "../../hooks/useSelector";
import { authSelector } from "../../state/user/user.selector";

const RegisterButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated } =useSelector(authSelector);

  const onClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  if(isAuthenticated) {
    return null;
}
  return (
    <Button onClick={onClick} variant="white" size="sm">
      Signup
    </Button>
  );
};

export default RegisterButton;
