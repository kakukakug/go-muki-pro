import { BannerAd as ios } from "./index.ios";
import { BannerAd as android } from "./index.android";

// eslint-disable-next-line no-var
declare var testAll: typeof ios;
// eslint-disable-next-line no-var,@typescript-eslint/no-redeclare
declare var testAll: typeof android;

export * from "./index.ios";
