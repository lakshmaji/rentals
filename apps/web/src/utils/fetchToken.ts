import { Dispatch } from "@reduxjs/toolkit";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { RootState } from "../state/store";

declare type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

interface Config extends AsyncThunkConfig {
  state: RootState;
}

const fetchToken = (thunk: any) => {
  const state = thunk.getState();
  return state.user.token;
};

export default fetchToken;
