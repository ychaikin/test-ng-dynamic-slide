import { SlideTrialPage } from './app.po';

describe('slide-trial App', () => {
  let page: SlideTrialPage;

  beforeEach(() => {
    page = new SlideTrialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
