import { ScalenePage } from './app.po';

describe('scalene App', () => {
  let page: ScalenePage;

  beforeEach(() => {
    page = new ScalenePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
