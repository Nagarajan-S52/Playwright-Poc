import {test,expect, Page, Locator }from "@playwright/test";

export class homepage{

    private readonly page: Page
    private readonly baseUrl: string
    private readonly forms: Locator
    private readonly ModelAndOverlays: Locator
    private readonly tablesAndData: Locator
    private readonly themeDropdown: Locator
    private readonly listsOfDropdown: Locator
    

    constructor(page: Page){
        this.page = page
        this.baseUrl = "http://localhost:4200/"
        this.forms = page.getByText("Forms")
        this.ModelAndOverlays = page.getByText('Modal & Overlays')
        this.tablesAndData = page.getByText('Tables & Data')
        this.themeDropdown = page.locator('ngx-header').locator('nb-select').filter({has:page.locator('button')});
        this.listsOfDropdown = page.locator('nb-option-list').filter({has: page.locator('.option-list')}).locator('nb-option')
    }



    async launchUrl(){
        await this.page.goto(this.baseUrl)
        await expect(this.page).toHaveURL("http://localhost:4200/pages/iot-dashboard");
    }

    async clickOnFormsLink(){
        await expect(this.forms).toBeEnabled()
        await this.forms.click()
    }

    async clickOnModelAndOverlaysLink(){
        await expect(this.ModelAndOverlays).toBeEnabled()
        await this.ModelAndOverlays.click()
    }

    async clickOnTablesAndDataLink(){
        await expect(this.tablesAndData).toBeEnabled()
        await this.tablesAndData.click()
    }


    async performActionsInThemeDropdown(){
        
        await expect(this.themeDropdown).toBeVisible();
        await this.themeDropdown.click()

        const alloptionsFromList = await this.listsOfDropdown.allTextContents()

        for(var singleOption of alloptionsFromList){

            var selectedOption = this.listsOfDropdown.filter({ hasText: singleOption });
            await selectedOption.click();

            await expect(this.themeDropdown).toHaveText(singleOption);

            await this.page.waitForTimeout(1000)

            if(singleOption != ' Corporate'){

                await this.themeDropdown.click();
            }
            
        }

    }

}