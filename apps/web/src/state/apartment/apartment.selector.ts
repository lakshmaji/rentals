import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectApartments = (state: RootState) => state.apartments.entities;

export const apartmentByIdSelector = createSelector(
  selectApartments,
  (apartments) => {
    return (apartmentId?: string) => {
      if (!apartmentId) return null;
      return apartments.find(
        (apartment) => apartment.id.toString() === apartmentId
      );
    };
  }
);
