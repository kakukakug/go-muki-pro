import { rootStore } from "../../../src/01_entity/redux/store";

import { getFavoData, setFavoData } from "../../../src/02_usecase/action/favo";

describe("02_usecase/action/favo", () => {
  describe("getFavoData", () => {
    it("お気に入りデータを返す", async () => {
      const favoData = {
        id: "1",
        name: "name",
        flg: true,
      };
      const repoMock = {
        getFavo: jest.fn().mockResolvedValueOnce([favoData]),
      };

      await getFavoData(rootStore.dispatch)(repoMock);

      const { requestState, favo } = rootStore.getState().favoriteReducer;
      expect(requestState).toEqual("success");
      expect(favo).toEqual([favoData]);
      expect(repoMock.getFavo.mock.calls.length).toEqual(1);
    });
    it("不正な形式だった場合、空配列を返す", async () => {
      const repoMock = {
        getFavo: jest.fn().mockResolvedValueOnce(null),
      };
      await getFavoData(rootStore.dispatch)(repoMock);

      const { favo } = rootStore.getState().favoriteReducer;
      expect(favo).toEqual([]);
      expect(repoMock.getFavo.mock.calls.length).toEqual(1);
    });
  });
  describe("setFavoData", () => {
    it("データ保存処理を呼ぶはず", async () => {
      const repoMock = {
        setFavo: jest.fn(),
        getFavo: jest.fn(),
      };
      const favoData = {
        id: "1",
        name: "name",
        flg: true,
      };
      await setFavoData(rootStore.dispatch)([favoData], repoMock);
      const { requestState, favo } = rootStore.getState().favoriteReducer;
      expect(requestState).toEqual("success");
      expect(favo).toEqual([favoData]);
      expect(repoMock.setFavo.mock.calls.length).toEqual(1);
    });
  });
});
