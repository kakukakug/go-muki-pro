import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Favorite } from "../../models/favorite";
import { RequestState } from "../../models/request_state";

export type FavoState = {
  readonly favo: Favorite[];
  readonly requestState: RequestState;
};

const initialState: FavoState = {
  favo: [],
  requestState: "notYet",
};

export const createInitialState = () => {
  return initialState;
};

export const favoriteModule = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setRequestState: (state, action: PayloadAction<RequestState>) => {
      // eslint-disable-next-line no-param-reassign
      state.requestState = action.payload;
    },
    setFavorite: (state, action: PayloadAction<Favorite[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.favo = action.payload;
    },
    clear: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.favo = [];
      // eslint-disable-next-line no-param-reassign
      state.requestState = "notYet";
    },
  },
});
