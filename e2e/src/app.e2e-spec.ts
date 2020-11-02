import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

  // it('should navigate to transactions page', async () => {
  //   await page.navigateTo();
  // });

  // it('should display the transaction page', async () => {
  //   expect(await browser.getCurrentUrl()).toContain('/transaction');
  // });

  it('should display Recent Transactions Title', async () => {
    expect(await page.getTitleText()).toEqual('Recent Transactions');
  });

  it('should have a table header', async () => {
    expect(await page.getTableHeader()).toContain("Type Amount XTZ (USD) Date Address");
  });

  it('table should have at least one row', async () => {
    await browser.waitForAngular();
    expect(await page.getFirstRowData()).toContain("transaction + 8,001.00 XTZ 8,001.0 USD Sep 6 2019, 03:45 tz...Cj4MX");
  })
});
