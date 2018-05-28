import { ContactosModule } from './contactos.module';

describe('ContactosModule', () => {
  let contactosModule: ContactosModule;

  beforeEach(() => {
    contactosModule = new ContactosModule();
  });

  it('should create an instance', () => {
    expect(contactosModule).toBeTruthy();
  });
});
