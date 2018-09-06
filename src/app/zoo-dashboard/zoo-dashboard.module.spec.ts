import { ZooDashboardModule } from './zoo-dashboard.module';

describe('ZooDashboardModule', () => {
  let zooDashboardModule: ZooDashboardModule;

  beforeEach(() => {
    zooDashboardModule = new ZooDashboardModule();
  });

  it('should create an instance', () => {
    expect(zooDashboardModule).toBeTruthy();
  });
});
