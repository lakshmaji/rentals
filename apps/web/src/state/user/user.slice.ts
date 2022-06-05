import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./user.thunk";

export interface UserState {
  id: string;
  name: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  token?: string
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  token: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
        state.name = payload.name;
        state.id = payload.id;
      })
      .addCase(signupUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload?.errorMessage;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.token = payload.token;
        state.name = payload.name;
      })
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload?.errorMessage;
      });
  },
});

export const { clearState: clearUserState } = userSlice.actions;

export default userSlice.reducer;
