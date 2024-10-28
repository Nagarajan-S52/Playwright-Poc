import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { tooltipPage } from "../pageObjects/toolTipPage";

test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('Perform actions in toolTips', async({page})=>{

    const homePage = new homepage(page)
    const tooltip = new tooltipPage(page)
    await homePage.clickOnModelAndOverlaysLink()
    await tooltip.performActionInToolTip()
  })
