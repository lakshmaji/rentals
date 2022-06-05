import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

const reducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer,
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
