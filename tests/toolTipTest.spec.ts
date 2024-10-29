import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { tooltipPage } from "../pageObjects/toolTipPage";

/**
 * Setup: Launches the base URL before each test case.
 */
test.beforeEach("launchUrl", async ({ page }) => {
  // Create an instance of the homepage class with the current page
  const homePage = new homepage(page); 
  // Navigate to the base URL
  await homePage.launchUrl(); 
});

/**
 * Test case: Perform actions related to tooltips.
 */
test("Perform actions in toolTips", async ({ page }) => {
  // Create an instance of the homepage class with the current page
  const homePage = new homepage(page); 
  // Create an instance of the tooltipPage class with the current page
  const tooltip = new tooltipPage(page); 
   // Navigate to the Modal & Overlays page
  await homePage.clickOnModelAndOverlaysLink();
  // Execute the method to perform actions related to tooltips
  await tooltip.performActionInToolTip(); 
});