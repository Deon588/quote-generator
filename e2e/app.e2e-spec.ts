import { QuoteGeneratorPage } from './app.po';

describe('quote-generator App', () => {
  let page: QuoteGeneratorPage;

  beforeEach(() => {
    page = new QuoteGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
