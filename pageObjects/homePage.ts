import { test, expect, Page, Locator } from "@playwright/test";

// Class representing the Home Page and its interactions
export class homepage {
  // Declare private fields for the page, base URL, and various locators on the home page
  private readonly page: Page;
  private readonly baseUrl: string;
  private readonly forms: Locator;
  private readonly ModelAndOverlays: Locator;
  private readonly tablesAndData: Locator;
  private readonly themeDropdown: Locator;
  private readonly listsOfDropdown: Locator;

  // Constructor to initialize the Page object and define locators
  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "http://localhost:4200/";
    this.forms = page.getByText("Forms");
    this.ModelAndOverlays = page.getByText("Modal & Overlays");
    this.tablesAndData = page.getByText("Tables & Data");
    this.themeDropdown = page
      .locator("ngx-header")
      .locator("nb-select")
      .filter({ has: page.locator("button") });
    this.listsOfDropdown = page
      .locator("nb-option-list")
      .filter({ has: page.locator(".option-list") })
      .locator("nb-option");
  }

  // Method to launch the specified URL and validate the redirected URL
  async launchUrl() {
    await this.page.goto(this.baseUrl);
    await expect(this.page).toHaveURL(
      "http://localhost:4200/pages/iot-dashboard"
    );
  }

  // Method to click on the "Forms" link after verifying it's enabled
  async clickOnFormsLink() {
    await expect(this.forms).toBeEnabled();
    await this.forms.click();
  }

  // Method to click on the "Modal & Overlays" link after verifying it's enabled
  async clickOnModelAndOverlaysLink() {
    await expect(this.ModelAndOverlays).toBeEnabled();
    await this.ModelAndOverlays.click();
  }

  // Method to click on the "Tables & Data" link after verifying it's enabled
  async clickOnTablesAndDataLink() {
    await expect(this.tablesAndData).toBeEnabled();
    await this.tablesAndData.click();
  }

  // Method to interact with the Theme dropdown and verify each selected option
  async performActionsInThemeDropdown() {
    // Verify the theme dropdown is visible and click to open it
    await expect(this.themeDropdown).toBeVisible();
    await this.themeDropdown.click();

    // Get all options from the dropdown
    const alloptionsFromList = await this.listsOfDropdown.allTextContents();

    // Loop through each option in the list
    for (var singleOption of alloptionsFromList) {
      // Locate and click the current option, then verify the selected option is shown in the dropdown
      var selectedOption = this.listsOfDropdown.filter({
        hasText: singleOption,
      });
      await selectedOption.click();
      await expect(this.themeDropdown).toHaveText(singleOption);

      // Wait briefly before selecting the next option
      await this.page.waitForTimeout(1000);

      // Reopen the dropdown if the current option is not "Corporate"
      if (singleOption != " Corporate") {
        await this.themeDropdown.click();
      }
    }
  }
}
