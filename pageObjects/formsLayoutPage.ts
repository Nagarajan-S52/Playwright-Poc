import { test, expect, Page, Locator } from "@playwright/test";

// Class representing the Form Layout Page and its interactions
export class formsLayoutPage {
  // Define page and locators for various elements on the form layout page
  private readonly Page: Page;
  private readonly formsLayoutOption: Locator;
  private readonly emailFieldFromGridForm: Locator;
  private readonly passwordFieldFromGridForm: Locator;
  private readonly optionradio: Locator;
  private readonly saveButton: Locator;

  // Constructor to initialize the Page object and define locators
  constructor(Page: Page) {
    this.Page = Page;
    this.formsLayoutOption = Page.getByText("Form Layouts");
    this.emailFieldFromGridForm = Page.locator("nb-card")
      .filter({ hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });
    this.passwordFieldFromGridForm = Page.locator("nb-card")
      .filter({ hasText: "Using the Grid" })
      .getByPlaceholder("Password");
    this.optionradio = Page.locator("nb-card")
      .filter({ hasText: "Using the Grid" })
      .getByRole("radio", { name: "Option 2" });
    this.saveButton = Page.locator("nb-card")
      .filter({ hasText: "Using the Grid" })
      .getByRole("button", { name: "Sign in" });
  }

  // Method to fill out the form located under "Using the Grid"
  async fillUsingTheGridForm() {
    // Assert the "Form Layouts" option is enabled and click to access it
    await expect(this.formsLayoutOption).toBeEnabled();
    await this.formsLayoutOption.click();

    // Ensure the email field is editable, then fill it and validate the value
    await expect(this.emailFieldFromGridForm).toBeEditable();
    await this.emailFieldFromGridForm.fill("james123@gmail.com");
    await expect(this.emailFieldFromGridForm).toHaveValue("james123@gmail.com");

    // Ensure the password field is editable, then fill it and validate the value
    await expect(this.passwordFieldFromGridForm).toBeEditable();
    await this.passwordFieldFromGridForm.fill("HelloWorld@123");
    await expect(this.passwordFieldFromGridForm).toHaveValue("HelloWorld@123");

    // Verify that the radio button is visible, select it, and confirm it is checked
    await expect(this.optionradio).toBeVisible();
    await this.optionradio.click({ force: true });
    await expect(this.optionradio).toBeChecked();

    // Assert the save button is enabled and click to submit the form
    await expect(this.saveButton).toBeEnabled();
    await this.saveButton.click();
  }
}
