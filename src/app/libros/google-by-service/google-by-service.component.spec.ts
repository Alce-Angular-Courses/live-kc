import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleByServiceComponent } from './google-by-service.component';

describe('GoogleByServiceComponent', () => {
  let component: GoogleByServiceComponent;
  let fixture: ComponentFixture<GoogleByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
