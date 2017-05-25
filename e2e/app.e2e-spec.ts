import { AngularCliTemplatePage } from './app.po';

describe('angular-cli-template App', () => {
  let page: AngularCliTemplatePage;

  beforeEach(() => {
    page = new AngularCliTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
