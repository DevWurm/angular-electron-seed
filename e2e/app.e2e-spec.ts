import { Angular2ElectronSeedPage } from './app.po';

describe('angular-2-electron-seed App', function() {
  let page: Angular2ElectronSeedPage;

  beforeEach(() => {
    page = new Angular2ElectronSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
