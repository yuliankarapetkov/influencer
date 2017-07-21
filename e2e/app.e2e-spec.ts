import { InfluencerPage } from './app.po';

describe('influencer App', () => {
  let page: InfluencerPage;

  beforeEach(() => {
    page = new InfluencerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
