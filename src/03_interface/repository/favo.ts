import AsyncStorage from "@react-native-async-storage/async-storage";
//
import { FavoStoreKey, Favorite } from "../../01_entity/models/favorite";
import { IFavoRepository } from "../../02_usecase/repository/favo";

export class FavoRepository implements IFavoRepository {
  // eslint-disable-next-line class-methods-use-this
  public async getFavo() {
    const favoDataString = await AsyncStorage.getItem(FavoStoreKey);
    const favoData = JSON.parse(favoDataString || "[]");
    return favoData;
  }

  // eslint-disable-next-line class-methods-use-this
  public async setFavo(favoData: Favorite[]) {
    const favoDataString = JSON.stringify(favoData);
    await AsyncStorage.setItem(FavoStoreKey, favoDataString);
  }
}
