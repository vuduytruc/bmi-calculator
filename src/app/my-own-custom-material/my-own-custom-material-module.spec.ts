import { MyOwnCustomMaterialModule } from './my-own-custom-material-module';

describe('MyOwnCustomMaterialModuleModule', () => {
  let myOwnCustomMaterialModule: MyOwnCustomMaterialModule;

  beforeEach(() => {
    myOwnCustomMaterialModule = new MyOwnCustomMaterialModule();
  });

  it('should create an instance', () => {
    expect(myOwnCustomMaterialModule).toBeTruthy();
  });
});
