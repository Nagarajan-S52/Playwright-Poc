import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { formsLayoutPage,} from "../pageObjects/formsLayoutPage";

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
 * Test case: Fill in the form using the grid layout.
 */
test("FillUsingTheGridForm", async ({ page }) => {
  // Create an instance of the homepage class with the current page
  const homePage = new homepage(page); 
  // Create an instance of the formsLayoutPage class with the current page
  const formsLayout = new formsLayoutPage(page); 
  // Navigate to the Forms page
  await homePage.clickOnFormsLink(); 
  // Execute the method to fill in the form using the grid layout
  await formsLayout.fillUsingTheGridForm(); 
});
