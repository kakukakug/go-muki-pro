export type IListRepository = {
  getList: (setFunc: (data) => void) => Promise<void>;
  getListByID: (listID: number, setFunc: (data) => void) => Promise<void>;
  setList: (name: string) => Promise<void>;
  updateList: (listID: number, name: string) => Promise<void>;
  touchList: (listID: number) => Promise<void>;
  deleteList: (listID: number) => Promise<void>;
};
