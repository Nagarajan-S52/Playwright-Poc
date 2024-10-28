import { test, expect, Page, Locator } from "@playwright/test";

export class formsLayoutPage {
  private readonly Page: Page;
  private readonly formsLayoutOption: Locator;
  private readonly emailFieldFromGridForm: Locator;
  private readonly passwordFieldFromGridForm: Locator;
  private readonly optionradio: Locator
  private readonly saveButton: Locator

  constructor(Page: Page) {
    this.Page = Page;
    this.formsLayoutOption = Page.getByText("Form Layouts");
    this.emailFieldFromGridForm = Page.locator("nb-card").filter({ hasText: "Using the Grid" }).getByRole("textbox", { name: "Email" });
    this.passwordFieldFromGridForm = Page.locator("nb-card").filter({ hasText: "Using the Grid" }).getByPlaceholder("Password");
    this.optionradio = Page.locator("nb-card").filter({ hasText: "Using the Grid" }).getByRole('radio',{name:'Option 2'})
    this.saveButton = Page.locator("nb-card").filter({ hasText: "Using the Grid" }).getByRole('button',{name:"Sign in"})
  }

  async fillUsingTheGridForm() {
    await this.formsLayoutOption.click();
    await this.emailFieldFromGridForm.fill("james123@gmail.com");
    await this.passwordFieldFromGridForm.fill("HelloWorld@123");
    await this.optionradio.click({force:true})
    await this.saveButton.click()
  }
}
