import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import useDispatch from "../hooks/useDispatch";
import useSelector from "../hooks/useSelector";
import { userSelector } from "../state/user/user.selector";
import { signupUser } from "../state/user/user.thunk";
import { useNavigate } from "react-router-dom";
import { clearUserState } from "../state/user/user.slice";
import toast from "react-hot-toast";
import TextInput from "../components/form/TextInput";
import { SignupInput } from "../models/user.model";

const defaultValues: SignupInput = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues });
  const navigate = useNavigate();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    dispatch(signupUser(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearUserState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success");
      dispatch(clearUserState());
      navigate("/", { replace: true });
    }
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(clearUserState());
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigate]);

  return (
    <Container className="d-flex flex-column text-center justify-content-center h-100">
      <div className="text-center">
        <h2 className="rainbow-text">Signup</h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="name"
            control={control}
            placeholder="Name"
            label="Name"
          />
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
          Signup
        </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
