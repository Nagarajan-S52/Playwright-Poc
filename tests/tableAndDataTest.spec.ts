import {test,expect} from "@playwright/test";
import { baseUtilities } from "../pageObjects/baseUtilities";
import { homepage } from "../pageObjects/homePage";
import { tablesAndDataPage } from "../pageObjects/tablesAndDataPage";

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
 * Test case: Retrieve rows from the table based on a search input.
 */
test("Get the row based on search", async ({ page }) => {
  // Create an instance of the homepage class with the current page
  const homePage = new homepage(page); 
  // Create an instance of the tablesAndDataPage class with the current page
  const tableAndData = new tablesAndDataPage(page); 
  // Navigate to the Tables and Data page
  await homePage.clickOnTablesAndDataLink(); 
  // Execute the method to retrieve rows based on search criteria
  await tableAndData.getRowBasedOnSearch(); 
});

test.afterEach("CloseBrowser",async({page})=>{

  // Instantiate the baseUtilities class
  const baseUtilitie = new baseUtilities(page) ;
 // Call the closeBrowser method to close the current page
 await baseUtilitie.closeBrowser() 

})