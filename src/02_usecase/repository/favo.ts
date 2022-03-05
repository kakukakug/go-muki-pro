import { Favorite } from "../../01_entity/models/favorite";

export type IFavoRepository = {
  getFavo: () => Promise<Favorite[]>;
  setFavo: (favoData: Favorite[]) => Promise<void>;
};
