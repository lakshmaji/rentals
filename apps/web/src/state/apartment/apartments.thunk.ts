import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apartment, ApartmentInput } from "../../models/apartment.model";
import service from "./apartments.service";

export const retrieveApartments = createAsyncThunk<Apartment[], void>(
  "apartments/retrieve",
  async () => {
    const response = await service.getAll();
    return response;
  }
);

export const createApartment = createAsyncThunk<Apartment, ApartmentInput>(
  "apartments/create",
  async (payload) => {
    const response = await service.create(payload);
    return response;
  }
);
