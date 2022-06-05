import { createSelector } from "@reduxjs/toolkit";
import { Apartment } from "../../models/apartment.model";
import { RootState } from "../store";

export const selectApartments = (state: RootState) => state.apartments.entities;

export const apartmentByIdSelector = createSelector(
  selectApartments,
  (apartments) => {
    return (apartmentId?: string) => {
      if (!apartmentId) return null;
      return apartments.find(
        (apartment: Apartment) => apartment.id.toString() === apartmentId
      );
    };
  }
);
