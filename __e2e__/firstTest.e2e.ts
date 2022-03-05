import { by, element, expect } from "detox";

describe("Example", () => {
  it("should have welcome screen", async () => {
    // await waitFor(element(by.id("container"))
    // .toBeVisible()
    // .withTimeout(10000);
    await expect(element(by.id("container"))).toBeVisible();
    await expect(element(by.id("navButton"))).toBeVisible();
    await device.takeScreenshot("AppMount");
  });

  it("should show search screen after tap", async () => {
    await expect(element(by.id("navButton"))).toBeVisible();
    await element(by.id("navButton")).tap();
    // await expect(element(by.id("search"))).toBeVisible();
    await waitFor(element(by.id("search")))
      .toBeVisible()
      .withTimeout(4000);
  });
});
