import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";

test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('Select the options from the DropDown', async({page})=>{

    const homePage = new homepage(page)
    await homePage.performActionsInThemeDropdown()
    
  })