import { test, expect, Page, Locator } from "@playwright/test";
import { homepage } from "./homePage";

// Class representing the Dialog Page and interactions within it

export class dialogPage {
  // Define page and locator elements used throughout the class
  private readonly Page: Page;
  private readonly dialogPageLink: Locator;
  private readonly openWithoutEscCloseCard: Locator;
  private readonly openDialogWithEscCloseButton: Locator;
  private readonly dismissDialogButtonfromAlert: Locator;
  private readonly saveButton: Locator;

  // Constructor to initialize the Page object and the locators used in dialog interactions
  constructor(Page: Page) {
    this.Page = Page;
    this.dialogPageLink = Page.locator('[title="Dialog"]');
    this.openWithoutEscCloseCard = Page.locator("nb-card").filter({
      hasText: "Open Without Esc Close",
    });
    this.openDialogWithEscCloseButton = this.openWithoutEscCloseCard
      .locator("button")
      .filter({ hasText: "Open Dialog with esc close" });
    this.dismissDialogButtonfromAlert = Page.locator("nb-card")
      .filter({ hasText: "This is a title passed to the dialog component" })
      .locator("nb-card-footer button");
    this.saveButton = Page.locator("nb-card")
      .filter({ hasText: "Using the Grid" })
      .getByRole("button", { name: "Sign in" });
  }

  // Method to perform actions in the dialog box by navigating to it, opening it, and dismissing it
  async performActionInDialogBox() {
    // Ensure the dialog page link is enabled, then click to navigate to the dialog section
    await expect(this.dialogPageLink).toBeEnabled();
    await this.dialogPageLink.click();

    // Ensure the button to open the dialog with Esc close is enabled, then click it
    await expect(this.openDialogWithEscCloseButton).toBeEnabled();
    await this.openDialogWithEscCloseButton.click();

    // Ensure the dismiss button in the dialog alert is enabled, then click it to close the dialog
    await expect(this.dismissDialogButtonfromAlert).toBeEnabled();
    await this.dismissDialogButtonfromAlert.click();
  }
}
