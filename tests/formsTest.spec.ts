import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { formsLayoutPage,} from "../pageObjects/formsLayoutPage";

test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('FillUsingTheGridForm', async({page})=>{

    const homePage = new homepage(page)
    const formsLayout = new formsLayoutPage(page)
    await homePage.clickOnFormsLink()
    await formsLayout.fillUsingTheGridForm()
  })

