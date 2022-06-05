import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apartment, ApartmentInput } from "../../models/apartment.model";
import { buildError, ValidationErrors } from "../../utils/buildError";
import fetchToken from "../../utils/fetchToken";
import { AppDispatch, RootState } from "../store";
import service from "./apartments.service";

export const retrieveApartments = createAsyncThunk<
  Apartment[],
  undefined,
  { rejectValue: ValidationErrors }
>("apartments/retrieve", async (_, thunkAPI) => {
  try {
    const response = await service.getAll();
    return response as Apartment[];
  } catch (err) {
    return thunkAPI.rejectWithValue(buildError(err, "Signup failed"));
  }
});

export const createApartment = createAsyncThunk<
  Apartment,
  ApartmentInput,
  {
    dispatch: AppDispatch,
    state: RootState;
    extra: {
      jwt: string;
    };
  }
>("apartments/create", async (payload, thunkAPI) => {
  try {
    const response = await service.create(thunkAPI.extra.jwt)(payload);
    return response as Apartment;
  } catch (err) {
    return thunkAPI.rejectWithValue(buildError(err, "Signup failed"));
  }
});
