import { NewWebAppPage } from './app.po';

describe('new-web-app App', function() {
  let page: NewWebAppPage;

  beforeEach(() => {
    page = new NewWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
