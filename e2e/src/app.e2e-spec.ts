import { AppPage } from './app.po';
import { browser, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message', () => {
    page.navigateTo();

    expect(page.getTitleText()).toEqual('Movie library');
  });

  it('should display list', () => {
    page.navigateTo();

    expect(page.getMovies().count()).toEqual(23);
  });

  it('should find movie', () => {
    page.navigateTo();

    page.getSearchInput().sendKeys('Project X\n');

    expect(page.getMovies().count()).toEqual(1);
  });

  it('should redirect to movie', () => {
    page.navigateTo();

    page
      .getMovieLink()
      .click()
      .then(() => {
        expect(page.getBackButton().isDisplayed).toBeTruthy();
      })
      .then(() =>
        browser.wait(
          ExpectedConditions.visibilityOf(page.getMovieName()),
          1000,
        ),
      )
      .then(() => {
        expect(page.getMovieName().getText()).toEqual('Deadpool 8.6');
      });
  });
});
