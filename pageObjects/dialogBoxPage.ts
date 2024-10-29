import { test, expect, Page, Locator } from "@playwright/test";
import { homepage } from "./homePage";

export class dialogPage {
  private readonly Page: Page;
  private readonly dialogPageLink: Locator;
  private readonly openWithoutEscCloseCard: Locator;
  private readonly openDialogWithEscCloseButton: Locator;
  private readonly dismissDialogButtonfromAlert: Locator
  private readonly saveButton: Locator

  constructor(Page: Page) {
    this.Page = Page;
    this.dialogPageLink = Page.locator('[title="Dialog"]')
    this.openWithoutEscCloseCard = Page.locator('nb-card').filter({hasText:'Open Without Esc Close'})
    this.openDialogWithEscCloseButton = this.openWithoutEscCloseCard.locator('button').filter({hasText:'Open Dialog with esc close'})
    this.dismissDialogButtonfromAlert = Page.locator('nb-card').filter({hasText:'This is a title passed to the dialog component'})
    .locator('nb-card-footer button')
    this.saveButton = Page.locator("nb-card").filter({ hasText: "Using the Grid" }).getByRole('button',{name:"Sign in"})
  }


async performActionInDialogBox(){
  
        await this.dialogPageLink.click()
        await this.openDialogWithEscCloseButton.click()
await this.dismissDialogButtonfromAlert.click()
  }
}