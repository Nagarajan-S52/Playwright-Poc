import {test,expect} from "@playwright/test";
import { homepage } from "../pageObjects/homePage";
import { datePickerPage } from "../pageObjects/datePickerPage";

test.beforeEach("launchUrl", async({page})=>{
    const homePage = new homepage(page)
    await homePage.launchUrl()
  })

  test('Select the date from Common Date picker', async({page})=>{

    const homePage = new homepage(page)
    const datePicker = new datePickerPage(page)
    await homePage.clickOnFormsLink()
    await datePicker.selectDatefromCommonDatePicker()
  })
