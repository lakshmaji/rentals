import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInInput, Token, SignupInput, User } from "../../models/user.model";
import service from "./user.service";

interface ValidationErrors {
  errorMessage: string;
}

const buildError = (response: any, message?: string): ValidationErrors => {
  if (response.message) {
    if (Array.isArray(response.message) && response.message.length > 0) {
      return {
        errorMessage: response.message.join(","),
      } as ValidationErrors;
    }
    return {
      errorMessage: response.message,
    } as ValidationErrors;
  }
  return {
    errorMessage: message || "something went wrong",
  } as ValidationErrors;
};

export const signupUser = createAsyncThunk<
  User,
  SignupInput,
  { rejectValue: ValidationErrors }
>("users/signupUser", async (payload, thunkAPI) => {
  try {
    const response = await service.register(payload);
    if (response.message) {
      return thunkAPI.rejectWithValue(buildError(response));
    }
    return response as User;
  } catch (err) {
    return thunkAPI.rejectWithValue(buildError(err, "Signup failed"));
  }
});

export const loginUser = createAsyncThunk<
  Token,
  SignInInput,
  { rejectValue: ValidationErrors }
>("users/login", async (payload, thunkAPI) => {
  try {
    const response = await service.login(payload);
    if (response.message) {
      return thunkAPI.rejectWithValue(buildError(response));
    }
    localStorage.setItem("token", response.token);
    return response as Token;
  } catch (err) {
    return thunkAPI.rejectWithValue(buildError(err, "SignupSignIn failed"));
  }
});
