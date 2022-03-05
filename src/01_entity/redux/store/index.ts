import { combineReducers, createStore, Action } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

import { favoriteModule } from "./favorite";
import { listModule } from "./list";

const appReducer = combineReducers({
  favoriteReducer: favoriteModule.reducer,
  listReducer: listModule.reducer,
});

type AppState = ReturnType<typeof appReducer>;

const CLEAR = "CLEAR";
export const clearAllStore = createAction(CLEAR);

const rootReducer = createReducer(
  appReducer(undefined, clearAllStore), // initial
  {
    CLEAR: (_state: AppState, action: Action) => {
      return appReducer(undefined, action);
    },
  }, // case
  [], // matcher
  appReducer // default
);

export const rootStore = createStore(rootReducer);

export type RootState = Readonly<ReturnType<typeof rootReducer>>;
