import { DigisensePage } from './app.po';

describe('digisense App', () => {
  let page: DigisensePage;

  beforeEach(() => {
    page = new DigisensePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
