import {test,expect} from "@playwright/test";
import { baseUtilities } from "../pageObjects/baseUtilities";
import { homepage } from "../pageObjects/homePage";
import { dialogPage } from "../pageObjects/dialogBoxPage";

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

test.afterEach("CloseBrowser",async({page})=>{

  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
 // Call the closeBrowser method to close the current page
 await baseUtilitie.closeBrowser() 

})