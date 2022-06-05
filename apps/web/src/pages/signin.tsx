import React, { FC, useCallback, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import useDispatch from "../hooks/useDispatch";
import useSelector from "../hooks/useSelector";
import { userSelector } from "../state/user/user.selector";
import { loginUser } from "../state/user/user.thunk";
import { useNavigate } from "react-router-dom";
import { clearUserState } from "../state/user/user.slice";
import toast from "react-hot-toast";
import TextInput from "../components/form/TextInput";
import { AppState, SignInInput } from "../models/user.model";


const defaultValues: SignInInput = {
  email: "",
  password: "",
};
const SignIn:FC<{appState?: AppState}> = ({appState}) => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues });
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit: SubmitHandler<SignInInput> = (data) => {
    dispatch(loginUser(data));
  };

  const onRedirectCallback = useCallback(
    (): void => {
  // const from = (fromPage?.state as any)?.returnTo?.pathname || "/";

      navigate(appState?.returnTo || window.location.pathname, {
        replace: true,
      });
    },
    [appState?.returnTo, navigate]
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success");
      onRedirectCallback()
      navigate("/", { replace: true });
    }
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(clearUserState());
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigate, onRedirectCallback]);

  return (
    <Container className="d-flex flex-column text-center justify-content-center h-100">
      <div className="text-center">
        <h2 className="rainbow-text">SignIn</h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="email"
            control={control}
            placeholder="Email"
            label="Email"
          />
          <TextInput
            type="password"
            name="password"
            control={control}
            placeholder="Password"
            label="Password"
          />
        <Button variant="primary" type="submit" size="sm" disabled={isFetching}>
          SignIn
        </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
