import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { tablesAndDataPage } from "../pageObjects/tablesAndDataPage";

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
