import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { dialogPage } from "../pageObjects/dialogBoxPage";


test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('Select the date from Common Date picker', async({page})=>{

    const homePage = new homepage(page)
 const dialogbox = new dialogPage(page)
    await homePage.clickOnModelAndOverlaysLink()
    await dialogbox.performActionInDialogBox()
  })