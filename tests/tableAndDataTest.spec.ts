import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { tablesAndDataPage } from "../pageObjects/tablesAndDataPage";

test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('Get the row based on search', async({page})=>{

    const homePage = new homepage(page)
    const tableAndData = new tablesAndDataPage(page)
    await homePage.clickOnTablesAndDataLink()
    await tableAndData.getRowBasedOnSearch()
  })

