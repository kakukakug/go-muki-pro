import { IAnalyticsRepository } from "../02_usecase/repository/analytics";
import { IDotenvRepository } from "../02_usecase/repository/dotenv";
import { IFavoRepository } from "../02_usecase/repository/favo";
import { IListRepository } from "../02_usecase/repository/list";

import { AnalyticsRepository } from "../03_interface/repository/analytics/firebase";
import { DotenvRepository } from "../03_interface/repository/dotenv";
import { FavoRepository } from "../03_interface/repository/favo";
import { ListRepository } from "../03_interface/repository/list";

export class DIContainer {
  private static sharedInstance: DIContainer;

  public readonly analyticsRepo: IAnalyticsRepository;

  public readonly dotenvRepo: IDotenvRepository;

  public readonly favoRepo: IFavoRepository;

  public readonly listRepo: IListRepository;

  private constructor() {
    this.analyticsRepo = new AnalyticsRepository();
    this.dotenvRepo = new DotenvRepository();
    this.favoRepo = new FavoRepository();
    this.listRepo = new ListRepository();
  }

  public static shared(): DIContainer {
    if (!this.sharedInstance) {
      this.sharedInstance = new DIContainer();
    }

    return this.sharedInstance;
  }
}
