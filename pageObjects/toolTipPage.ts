import {test,expect, Page, Locator }from "@playwright/test";

export class tooltipPage{

    private readonly page: Page
    private readonly toolTipLink: Locator
    private readonly toolTipPlacementCard: Locator
    private readonly rightButton: Locator
    private readonly toolTip: Locator
    
    

    constructor(page: Page){
        this.page = page
        this.toolTipLink = page.locator('[title="Tooltip"]')
        this.toolTipPlacementCard = page.locator('nb-card').filter({hasText:'Tooltip Placements'})
        this.rightButton = this.toolTipPlacementCard.locator('nb-card-body').locator('button').filter({hasText:'Right'})
        this.toolTip = page.locator('nb-tooltip');
        
    }

    async performActionInToolTip(){

        await this.toolTipLink.click();
        await this.rightButton.hover();
        var toolTipInnerText =  await this.toolTip.textContent();
        //console.log(toolTipInnerText.trim())
        expect(toolTipInnerText.trim()).toContain('This is a tooltip');


    }

}