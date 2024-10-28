import { test, expect, Page, Locator } from "@playwright/test";
import { homepage } from "./homePage";

export class tablesAndDataPage {
    private readonly Page: Page;
    private readonly smartTableLink: Locator;
    private readonly mainTable: Locator;
    private readonly tableHeader: Locator;
    private readonly tableBody: Locator;
    private readonly emailField: Locator;
    private readonly allRowFromTableBody: Locator;
   
  
    constructor(Page: Page) {
      this.Page = Page;
      this.smartTableLink = Page.getByText('Smart Table');
      this.mainTable = Page.locator('nb-card').filter({has: Page.locator('table')});
      this.tableHeader = this.mainTable.locator('thead');
      this.tableBody = this.mainTable.locator('tbody');
      this.emailField = this.tableHeader.locator('tr th').getByPlaceholder('E-mail');
      this.allRowFromTableBody = this.tableBody.locator('tr');

}


async getRowBasedOnSearch(){

    await this.smartTableLink.click()

     // 2. get all the row based on the value in search

var emailvalues = ["@o", "@g", "@y"]

for(var value of emailvalues){

    
    await this.emailField.fill(value)
   await this.Page.waitForTimeout(500)

   const allrows =  this.allRowFromTableBody

   for(var row of await allrows.all()){

    var emailRowValue =  await row.locator('td').nth(5).textContent()
    console.log(emailRowValue)

    expect(emailRowValue).toContain(value)

   }
}

}



}