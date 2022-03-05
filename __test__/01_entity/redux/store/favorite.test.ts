import { rootStore } from "../../../../src/01_entity/redux/store";
import { favoriteModule } from "../../../../src/01_entity/redux/store/favorite";
import { Favorite } from "../../../../src/01_entity/models/favorite";

const { setFavorite, clear } = favoriteModule.actions;

describe("01_entity/redux/store/favorite", () => {
  const favoData: Favorite[] = [
    {
      id: "1",
      name: "name1",
      flg: false,
    },
    {
      id: "11",
      name: "name2",
      flg: false,
    },
    {
      id: "2",
      name: "name3",
      flg: true,
    },
  ];
  describe("Action.setFavorite", () => {
    beforeEach(() => {
      rootStore.dispatch(clear());
    });
    it("配列を更新する", () => {
      rootStore.dispatch(setFavorite(favoData));

      const { favo } = rootStore.getState().favoriteReducer;

      expect(favo).toEqual(favoData);
    });

    it("空配列で更新する", () => {
      const emptyfavoData: Favorite[] = [];
      rootStore.dispatch(setFavorite(emptyfavoData));

      const { favo } = rootStore.getState().favoriteReducer;

      expect(favo).toEqual([]);
    });
  });
  describe("Action.clear", () => {
    it("クリアされる", () => {
      rootStore.dispatch(setFavorite(favoData));
      rootStore.dispatch(clear());
      const { favo } = rootStore.getState().favoriteReducer;
      expect(favo).toEqual([]);
    });
  });
});
