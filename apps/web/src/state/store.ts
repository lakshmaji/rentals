import { configureStore } from "@reduxjs/toolkit";

const reducer = {
};

export const store = configureStore({
  reducer,
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
