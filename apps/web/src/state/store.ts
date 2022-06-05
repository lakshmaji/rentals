import { configureStore } from "@reduxjs/toolkit";
import user from "./user/user.slice";
import apartments from "./apartment/apartments.slice";

const reducer = {
  user,
  apartments,
};

export const store = configureStore({
  reducer,
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
