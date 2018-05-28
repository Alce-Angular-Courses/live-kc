import { LibrosModule } from './libros.module';

describe('LibrosModule', () => {
  let librosModule: LibrosModule;

  beforeEach(() => {
    librosModule = new LibrosModule();
  });

  it('should create an instance', () => {
    expect(librosModule).toBeTruthy();
  });
});
