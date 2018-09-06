import { ZooAnimalModule } from './zoo-animal.module';

describe('ZooAnimalModule', () => {
  let zooAnimalModule: ZooAnimalModule;

  beforeEach(() => {
    zooAnimalModule = new ZooAnimalModule();
  });

  it('should create an instance', () => {
    expect(zooAnimalModule).toBeTruthy();
  });
});
