import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { List } from "../../models/list";
import { RequestState } from "../../models/request_state";

export type ListState = {
  readonly list: List[];
  readonly requestState: RequestState;
};

const initialState: ListState = {
  list: [],
  requestState: "notYet",
};

export const createInitialState = () => {
  return initialState;
};

export const listModule = createSlice({
  name: "list",
  initialState,
  reducers: {
    setRequestState: (state, action: PayloadAction<RequestState>) => {
      // eslint-disable-next-line no-param-reassign
      state.requestState = action.payload;
    },
    setList: (state, action: PayloadAction<List[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.list = action.payload;
    },
    clear: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.list = [];
      // eslint-disable-next-line no-param-reassign
      state.requestState = "notYet";
    },
  },
});
