import { test, expect, Page, Locator } from "@playwright/test";

// Class to interact with the Tooltip page elements
export class tooltipPage {
  // Declare private fields for the Page object and various locators on the tooltip page
  private readonly page: Page;
  private readonly toolTipLink: Locator;
  private readonly toolTipPlacementCard: Locator;
  private readonly rightButton: Locator;
  private readonly toolTip: Locator;

  // Constructor to initialize the Page object and define locators
  constructor(page: Page) {
    this.page = page
        this.toolTipLink = page.locator('[title="Tooltip"]')
        this.toolTipPlacementCard = page.locator('nb-card').filter({hasText:'Tooltip Placements'})
        this.rightButton = this.toolTipPlacementCard.locator('nb-card-body').locator('button').filter({hasText:'Right'})
        this.toolTip = page.locator('nb-tooltip');
  }

  // Method to perform actions related to tooltip and validate its content
  async performActionInToolTip() {
    // Verify the tooltip link is enabled, then click to open the tooltip section
    await expect(this.toolTipLink).toBeEnabled();
    await this.toolTipLink.click();

    // Ensure the "Right" button is visible, then hover over it to display the tooltip
    await expect(this.rightButton).toBeVisible();
    await this.rightButton.hover();

    // Capture the tooltip text and validate that it contains the expected message
    var toolTipInnerText = await this.toolTip.textContent();
    expect(toolTipInnerText.trim()).toContain("This is a tooltip");
  }
}
