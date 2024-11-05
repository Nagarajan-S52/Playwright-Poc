import { test, expect, Page, Locator } from "@playwright/test";

export class baseUtilities{

    private readonly page: Page;
    private readonly baseUrl: string;

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

  async closeBrowser(){
    
    await this.page.close()
   
  }


}