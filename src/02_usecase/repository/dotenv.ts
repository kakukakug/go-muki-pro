export const configKeys = [
  "ANDROID_BANNER_AD_UNIT_ID",
  "ANDROID_INTERSTITIAL_AD_UNIT_ID",
  "IOS_BANNER_AD_UNIT_ID",
  "IOS_INTERSTITIAL_AD_UNIT_ID",
] as const;

export type ConfigKey = typeof configKeys[number];

export type IDotenvRepository = {
  [key in ConfigKey]: string;
};
