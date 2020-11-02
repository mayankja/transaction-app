import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('');
  }

  getTransaction():ElementFinder {
    return element(by.css('.transaction'));
  }

  getTitleText() {
    return element(by.css('app-transactions .container .row h6')).getText();
  }

  getTableHeader() {
    return this.getTransaction().all(by.tagName('tr')).get(0).getText();
  }

  getTableRow(): ElementArrayFinder {
		return this.getTransaction().all(by.tagName('tr'));
	}

  getFirstRowData() {
    return this.getTableRow().get(1).getText();
  }
}
