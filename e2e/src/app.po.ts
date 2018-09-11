import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root app-title')).getText();
  }

  getSearchInput() {
    return element(by.css('app-search-form input'));
  }

  getMovieLink() {
    return element
      .all(by.css('.container li'))
      .get(0)
      .element(by.css('a'));
  }

  getMovieName() {
    return element(by.css('.movie__name'));
  }

  getBackButton() {
    return element(by.css('.back'));
  }

  getMovies() {
    return element.all(by.css('.container li'));
  }
}
