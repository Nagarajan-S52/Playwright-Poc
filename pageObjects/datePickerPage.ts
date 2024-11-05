import { test, expect, Page, Locator } from "@playwright/test";

// This class represents the page object for interacting with a date picker component
export class datePickerPage {
  // Define page and locators for various elements on the form layout page
  private readonly page: Page;
  private readonly clickOnDatePicker: Locator;
  private readonly commondatepicker: Locator;
  private readonly commonCalendar: Locator;
  private readonly clickOnDownArrowFromMonthAndYear: Locator;
  private readonly getYearsRows: Locator;
  private readonly getmonthsRows: Locator;
  private readonly getDateRows: Locator;
  private readonly getYearsCells: Locator;
  private readonly getmonthsCells: Locator;
  private readonly getDateCells: Locator;

  // Constructor to initialize the page and locators

  constructor(page: Page) {
    this.page = page;
    this.clickOnDatePicker = page.getByText("Datepicker");
    this.commondatepicker = page
      .locator("nb-card")
      .filter({ hasText: "Common Datepicker" })
      .getByPlaceholder("Form Picker");
    this.commonCalendar = page
      .locator("nb-calendar")
      .filter({ has: page.locator(".ng-star-inserted") });
    this.clickOnDownArrowFromMonthAndYear = page
      .locator("nb-card-header g")
      .locator('[data-name="chevron-down"]');
    this.getYearsRows = page.locator("nb-card-body nb-calendar-picker-row");
    this.getmonthsRows = page
      .locator("nb-calendar-month-picker nb-calendar-picker")
      .locator("nb-calendar-picker-row");
    this.getDateRows = page
      .locator("nb-calendar-day-picker nb-calendar-picker")
      .locator("nb-calendar-picker-row");
    this.getYearsCells = this.getYearsRows.locator("nb-calendar-year-cell");
    this.getmonthsCells = this.getmonthsRows.locator("nb-calendar-month-cell");
    this.getDateCells = this.getDateRows.locator("nb-calendar-day-cell");
  }

  // Method to select the current date from the common date picker
  async selectDatefromCommonDatePicker() {
    // Check if Datepicker button is visible, then click to open the date picker
    await expect(this.clickOnDatePicker).toBeVisible();
    await this.clickOnDatePicker.click();

    // Check if common datepicker input is visible, then click it to activate the calendar
    await expect(this.commondatepicker).toBeVisible();
    await this.commondatepicker.click();

    // Ensure the calendar is visible before interacting
    await expect(this.commonCalendar).toBeVisible();
    await expect(this.clickOnDownArrowFromMonthAndYear).toBeEnabled();
    await this.clickOnDownArrowFromMonthAndYear.click();

    // Get the current date information
    const date = new Date();
    const currentYear = date.getFullYear().toString(); // Current year as a string
    const currentMonthIndex = date.getMonth(); // Current month index (0 - 11)
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const shortMonth = months[currentMonthIndex]; // Current month as short string
    const currentDate = date.getDate().toString(); // Current date as a string

    // Select the year in the date picker
    for (const years of await this.getYearsRows.all()) {
      const yearValue = await years
        .locator("nb-calendar-year-cell")
        .allTextContents();

      // Loop through each year cell and match with current year
      for (const oneYear of yearValue) {
        if (oneYear.trim() === currentYear) {
          // Click the year cell once a match is found
          await this.getYearsCells.getByText(oneYear).click();
          break;
        }
      }
    }

    // Select the month in the date picker
    for (const month of await this.getmonthsRows.all()) {
      const monthValue = await month
        .locator("nb-calendar-month-cell")
        .allTextContents();

      // Loop through each month cell and match with current month
      for (const oneMonth of monthValue) {
        if (shortMonth === oneMonth.trim()) {
          // Click the month cell once a match is found
          await this.getmonthsCells.getByText(oneMonth).click();
          break;
        }
      }
    }

    // Select the date in the date picker
    for (const dateValue of await this.getDateRows.all()) {
      const oneDate = await dateValue
        .locator("nb-calendar-day-cell")
        .allTextContents();

      // Loop through each date cell and match with current date
      for (const selectDate of oneDate) {
        if (selectDate.trim() === currentDate) {
          // Click the date cell once a match is found
          await this.getDateCells.getByText(selectDate, { exact: true }).click();
        }
      }
    }

    // Format the selected date to match the expected value in the datepicker input
    const commonDateValue = `${shortMonth} ${currentDate}, ${currentYear}`;
    // Verify that the common date picker input has the correct selected date
    await expect(this.commondatepicker).toHaveValue(commonDateValue);
  }
}
