import { test, expect, Page, Locator } from "@playwright/test";

export class datePickerPage {
  private readonly page: Page;
  private readonly clickOnDatePicker: Locator
  private readonly commondatepicker: Locator;
  private readonly clickOnDownArrowFromMonthAndYear: Locator;
  private readonly getYearsRows: Locator;
  private readonly getmonthsRows: Locator;
  private readonly getDateRows: Locator;
  private readonly getYearsCells: Locator;
  private readonly getmonthsCells: Locator;
  private readonly getDateCells: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.clickOnDatePicker = page.getByText('Datepicker')
    this.commondatepicker = page.locator('nb-card').filter({hasText:'Common Datepicker'}).getByPlaceholder('Form Picker');
    this.clickOnDownArrowFromMonthAndYear = page.locator('nb-card-header g').locator('[data-name="chevron-down"]');
    this.getYearsRows = page.locator('nb-card-body nb-calendar-picker-row');
    this.getmonthsRows = page.locator('nb-calendar-month-picker nb-calendar-picker').locator('nb-calendar-picker-row');
    this.getDateRows = page.locator('nb-calendar-day-picker nb-calendar-picker').locator('nb-calendar-picker-row');
    this.getYearsCells = this.getYearsRows.locator('nb-calendar-year-cell');
    this.getmonthsCells = this.getmonthsRows.locator('nb-calendar-month-cell');
    this.getDateCells = this.getDateRows.locator('nb-calendar-day-cell');
  }

  
 
  async selectDatefromCommonDatePicker(){
    
    await this.clickOnDatePicker.click()
    await this.commondatepicker.click()
    await this.clickOnDownArrowFromMonthAndYear.click()

    var date = new Date()
    var currentYear = date.getFullYear().toString()
    var currenyMontIndex = date.getMonth()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var shortMonth = months[currenyMontIndex]
    var currentDate = date.getDate().toString()
    
// Select the Year from the date picker

for( var years of await this.getYearsRows.all()){

    var yearValue = await years.locator('nb-calendar-year-cell').allTextContents()

    for(var oneyear of yearValue){

      if(oneyear.trim() == currentYear){
        
         await this.getYearsCells.getByText(oneyear).click()
          break;
      }
    }
  }

  // Select the month from the date picker

  for(var month of await this.getmonthsRows.all()){

      var monthValue = await month.locator('nb-calendar-month-cell').allTextContents()

      // console.log(monthValue)

      for(var oneMonth of monthValue){

          // console.log(oneMonth)

          if(shortMonth == oneMonth.trim() ){

              await this.getmonthsCells.getByText(oneMonth).click()
              break;
          }
      }
  }

   // Select the Date from the date picker


   for(var dateValue of await this.getDateRows.all()){

     var  oneDate = await dateValue.locator('nb-calendar-day-cell').allTextContents()

     for(var selectDate of oneDate){

      if(selectDate.trim() == currentDate ){

          await this.getDateCells.getByText(selectDate,{exact:true}).click()
      }
     }
   }
  }
}