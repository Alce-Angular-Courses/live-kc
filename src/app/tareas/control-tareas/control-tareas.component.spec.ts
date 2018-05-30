import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTareasComponent } from './control-tareas.component';

describe('ControlTareasComponent', () => {
  let component: ControlTareasComponent;
  let fixture: ComponentFixture<ControlTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
