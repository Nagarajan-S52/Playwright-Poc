import {test,expect} from "@playwright/test";
import { baseUtilities } from "../pageObjects/baseUtilities";
import { homepage } from "../pageObjects/homePage";
import { tooltipPage } from "../pageObjects/toolTipPage";

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

test.afterEach("CloseBrowser",async({page})=>{

  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
 // Call the closeBrowser method to close the current page
 await baseUtilitie.closeBrowser() 

})