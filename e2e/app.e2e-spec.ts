import { DemoUiPage } from './app.po';

describe('demo-ui App', () => {
  let page: DemoUiPage;

  beforeEach(() => {
    page = new DemoUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
