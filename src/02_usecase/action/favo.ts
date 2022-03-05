import { Dispatch } from "redux";

import { favoriteModule } from "../../01_entity/redux/store/favorite";
import { Favorite } from "../../01_entity/models/favorite";
import { IFavoRepository } from "../repository/favo";

const { setRequestState, setFavorite } = favoriteModule.actions;

export const getFavoData = (dispatch: Dispatch) => {
  return async (repo: Pick<IFavoRepository, "getFavo">) => {
    dispatch(setRequestState("loading"));
    const favoData = await repo.getFavo();
    if (Array.isArray(favoData) === false) {
      dispatch(setFavorite([]));
      return;
    }
    dispatch(setRequestState("success"));
    dispatch(setFavorite(favoData));
  };
};

export const setFavoData = (dispatch: Dispatch) => {
  return async (
    favoData: Favorite[],
    repo: Pick<IFavoRepository, "setFavo" | "getFavo">
  ) => {
    dispatch(setRequestState("loading"));
    await repo.setFavo(favoData);
    dispatch(setFavorite(favoData));
    dispatch(setRequestState("success"));
  };
};
