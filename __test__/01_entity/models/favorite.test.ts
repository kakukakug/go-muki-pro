import { flgCheck } from "../../../src/01_entity/models/favorite";

describe("1_entity/models/favorite", () => {
  describe("flgCheck", () => {
    it("flgがtrueの場合、true を返す", () => {
      const favo = {
        id: "1",
        name: "name",
        flg: true,
      };
      const result = flgCheck(favo);
      expect(result).toEqual(true);
    });
    it("flgがfalseの場合、false を返す", () => {
      const favo = {
        id: "1",
        name: "name",
        flg: false,
      };
      const result = flgCheck(favo);
      expect(result).toEqual(false);
    });
    it("flgが未定義の場合、false を返す", () => {
      const favo = { id: "1", name: "name" } as any;
      const result = flgCheck(favo);
      expect(result).toEqual(false);
    });
  });
});
