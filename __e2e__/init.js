import { by, element } from "detox";
import { reloadApp } from "detox-expo-helpers";

beforeAll(async () => {
  await reloadApp();
  await waitFor(element(by.id("container")))
    .toBeVisible()
    .withTimeout(10000);

  // await device.resetContentAndSettings();
});
