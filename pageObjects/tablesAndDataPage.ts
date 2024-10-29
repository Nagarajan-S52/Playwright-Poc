import { test, expect, Page, Locator } from "@playwright/test";
import { homepage } from "./homePage";

// Class for interactions with the "Tables and Data" page
export class tablesAndDataPage {
  // Declare private fields for Page object and various locators on the tables and data page
  private readonly Page: Page;
  private readonly smartTableLink: Locator;
  private readonly mainTable: Locator;
  private readonly tableHeader: Locator;
  private readonly tableBody: Locator;
  private readonly emailField: Locator;
  private readonly allRowFromTableBody: Locator;

  // Constructor to initialize the Page object and define locators
  constructor(Page: Page) {
    this.Page = Page;
    this.smartTableLink = Page.getByText("Smart Table"); 
    this.mainTable = Page.locator("nb-card").filter({
      has: Page.locator("table"),
    }); 
    this.tableHeader = this.mainTable.locator("thead"); 
    this.tableBody = this.mainTable.locator("tbody"); 
    this.emailField = this.tableHeader
      .locator("tr th")
      .getByPlaceholder("E-mail"); 
    this.allRowFromTableBody = this.tableBody.locator("tr"); 
  }

  // Method to get table rows based on search value in the email field
  async getRowBasedOnSearch() {
    // Verify "Smart Table" link is enabled and click it
    await expect(this.smartTableLink).toBeEnabled();
    await this.smartTableLink.click();

    // Array of values to search in the email field
    var emailvalues = ["@o", "@g", "@y"];

    // Iterate through each search value
    for (var value of emailvalues) {
      // Check email field is editable, fill it with the current value, and verify the filled value
      await expect(this.emailField).toBeEditable();
      await this.emailField.fill(value);
      await this.Page.waitForTimeout(500);
      await expect(this.emailField).toHaveValue(value);

      // Retrieve all rows in the table body
      const allrows = this.allRowFromTableBody;

      // Check each row to verify it contains the search value in the email column
      for (var row of await allrows.all()) {
        var emailRowValue = await row.locator("td").nth(5).textContent();
     // Verify email column in each row contains the search value
        expect(emailRowValue).toContain(value); 
      }
    }
  }
}
