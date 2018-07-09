import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVdComponent } from './form-vd.component';

describe('FormVdComponent', () => {
  let component: FormVdComponent;
  let fixture: ComponentFixture<FormVdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
