import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { dialogPage } from "../pageObjects/dialogBoxPage";

/**
 * Setup: Launches the base URL before each test case.
 */
test.beforeEach("launchUrl", async ({ page }) => {
  // Create an instance of homepage class with the page instance
  const homePage = new homepage(page); 
  // Navigates to the base URL
  await homePage.launchUrl(); 
});

/**
 * Test case: Navigates to the Modal & Overlays section and interacts with a dialog box.
 */
test("Interact with dialog box in Modal & Overlays", async ({ page }) => {
  // Accesses the homepage methods for navigation
  const homePage = new homepage(page); 
  // Accesses dialog box methods for interactions
  const dialogbox = new dialogPage(page); 
  // Clicks on the "Modal & Overlays" link
  await homePage.clickOnModelAndOverlaysLink(); 
  // Executes actions in the dialog box
  await dialogbox.performActionInDialogBox(); 
});