import { configureStore } from "@reduxjs/toolkit";
import user from "./user/user.slice";
import apartments from "./apartment/apartments.slice";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const customMiddleWare = (store: any) => (next: any) => (action: any) => {
  console.log("Middleware triggered:", action);
  next(action);
};

const getToken = (): string => {
  const token = localStorage.getItem("token");
  return token as string;
};
const reducer = {
  user,
  apartments,
};

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: {
        jwt: getToken(),
      },
    },
  }).concat(customMiddleWare);

export const store = configureStore({
  reducer,
  devTools: false,
  middleware
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
