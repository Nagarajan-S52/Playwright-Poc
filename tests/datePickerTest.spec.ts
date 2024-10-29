import { test, expect } from "@playwright/test"; 
import { homepage } from "../pageObjects/homePage"; 
import { datePickerPage } from "../pageObjects/datePickerPage"; 

/** 
 * Setup step that runs before each test case to launch the base URL.
 */

test.beforeEach("launchUrl", async ({ page }) => {
  // Instantiate the homepage class
  const homePage = new homepage(page); 
  // Call the launchUrl method to navigate to the base URL
  await homePage.launchUrl(); 
});

/**
 * Test case: Selects a date from the Common Date picker.
 */

test("Select the date from Common Date picker", async ({ page }) => {
  // Instantiate the homepage class to access the forms link
  const homePage = new homepage(page); 
  // Instantiate the datePickerPage class to access date picker methods
  const datePicker = new datePickerPage(page); 
  // Navigate to the forms section
  await homePage.clickOnFormsLink(); 
  // Interact with and select a date from the common date picker
  await datePicker.selectDatefromCommonDatePicker(); 
});