import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Apartment } from "../../models/apartment.model";
import { createApartment, retrieveApartments } from "./apartments.thunk";

export interface ApartmentState {
  entities: Apartment[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ApartmentState = {
  entities: [],
  loading: "idle",
};

export type SetApartmentsPayload = Apartment[];

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    replaceApartments: (state, action: PayloadAction<SetApartmentsPayload>) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveApartments.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = "succeeded";
      })
      .addCase(retrieveApartments.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(retrieveApartments.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(createApartment.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities.push(action.payload);
      })
      .addCase(createApartment.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createApartment.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default apartmentsSlice.reducer;
