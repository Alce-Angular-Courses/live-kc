import { TareasModule } from './tareas.module';

describe('TareasModule', () => {
  let tareasModule: TareasModule;

  beforeEach(() => {
    tareasModule = new TareasModule();
  });

  it('should create an instance', () => {
    expect(tareasModule).toBeTruthy();
  });
});
