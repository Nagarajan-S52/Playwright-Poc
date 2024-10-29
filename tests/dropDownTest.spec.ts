import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";

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
 * Test case: Select options from the theme dropdown menu.
 */
test("Select the options from the DropDown", async ({ page }) => {
  // Create an instance of the homepage class with the current page
  const homePage = new homepage(page); 
  // Execute the actions to interact with the theme dropdown
  await homePage.performActionsInThemeDropdown(); 
});