import { test, expect, Page, Locator } from "@playwright/test";

// This class represents the page object for interacting with a browser
export class baseUtilities{
  // Define page and locator elements used throughout the class
    private readonly page: Page;
    private readonly baseUrl: string;

      // Constructor to initialize the page and locators
    constructor(page: Page){

        this.page = page;
        this.baseUrl = "http://localhost:4200/";
    }

    // Method to launch the specified URL and validate the redirected URL
  async launchUrl() {
    await this.page.goto(this.baseUrl);
    await expect(this.page).toHaveURL(
      "http://localhost:4200/pages/iot-dashboard"
    );
  }

  // Method to quite the page of the browser
  async closeBrowser(){
    
    await this.page.close()
   
  }


}