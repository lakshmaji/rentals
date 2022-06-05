import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInInput, Token, SignupInput, User } from "../../models/user.model";
import { buildError, ValidationErrors } from "../../utils/buildError";
import service from "./user.service";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


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
