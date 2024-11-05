import {test,expect} from "@playwright/test";
import { baseUtilities } from "../pageObjects/baseUtilities";
import { homepage } from "../pageObjects/homePage";
import { formsLayoutPage,} from "../pageObjects/formsLayoutPage";

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

test.afterEach("CloseBrowser",async({page})=>{

  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
 // Call the closeBrowser method to close the current page
 await baseUtilitie.closeBrowser() 

})