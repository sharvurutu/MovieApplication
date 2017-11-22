import { browser, by, element } from 'protractor';

// A global before each to avoid async issues with chrome browser for headless testing
beforeEach((done) => done());

describe('Movie Cruiser App', function() {

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Movie Cruiser');
  });

  it('should be redirected to /home route on opening the application', () => {
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  it('should be able to search for movies', () => {
    browser.element(by.id('search-box')).sendKeys('Valerian and the City of a Thousand Planets');
    browser.element(by.id('search-button')).click();

    const searchItems = element.all(by.css('.movieTitle'));
    expect(searchItems.get(0).getText()).toContain('Valerian and the City of a Thousand Planets');
    searchItems.get(0).click();
  });
});
