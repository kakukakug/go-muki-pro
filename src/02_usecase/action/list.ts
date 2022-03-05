import { Dispatch } from "redux";

import { listModule } from "../../01_entity/redux/store/list";
import { List } from "../../01_entity/models/list";
import { IListRepository } from "../repository/list";

const { setRequestState, setList } = listModule.actions;

export const getListsData = (dispatch: Dispatch) => {
  return async (repo: Pick<IListRepository, "getList">) => {
    const setStore = (data: List[]) => {
      dispatch(setRequestState("success"));
      if (data === []) {
        dispatch(setList([]));
        return;
      }
      dispatch(setRequestState("success"));
      dispatch(setList(data));
    };

    dispatch(setRequestState("loading"));
    await repo.getList(setStore);
  };
};

export const setListData = (dispatch: Dispatch) => {
  return async (
    name: string,
    repo: Pick<IListRepository, "setList" | "getList">
  ) => {
    dispatch(setRequestState("loading"));
    await repo.setList(name);

    await getListsData(dispatch)(repo);
    dispatch(setRequestState("success"));
  };
};

export const deleteListData = (dispatch: Dispatch) => {
  return async (
    listID: number,
    repo: Pick<IListRepository, "deleteList" | "getList">
  ) => {
    dispatch(setRequestState("loading"));
    await repo.deleteList(listID);

    await getListsData(dispatch)(repo);
    dispatch(setRequestState("success"));
  };
};

export const updateListData = (dispatch: Dispatch) => {
  return async (
    listID: number,
    name: string,
    repo: Pick<IListRepository, "updateList" | "getList">
  ) => {
    dispatch(setRequestState("loading"));
    await repo.updateList(listID, name);

    await getListsData(dispatch)(repo);
    dispatch(setRequestState("success"));
  };
};
