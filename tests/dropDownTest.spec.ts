import {test,expect} from "@playwright/test";
import { baseUtilities } from "../pageObjects/baseUtilities";
import { homepage } from "../pageObjects/homePage";

/** 
 * Setup step that runs before each test case to launch the base URL.
 */

test.beforeEach("launchUrl", async ({ page }) => {
  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
  // Call the launchUrl method to navigate to the base URL
  await baseUtilitie.launchUrl(); 
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

test.afterEach("CloseBrowser",async({page})=>{

  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
 // Call the closeBrowser method to close the current page
 await baseUtilitie.closeBrowser() 

})