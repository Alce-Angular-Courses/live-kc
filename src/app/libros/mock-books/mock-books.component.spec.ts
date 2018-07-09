import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockBooksComponent } from './mock-books.component';

describe('MockBooksComponent', () => {
  let component: MockBooksComponent;
  let fixture: ComponentFixture<MockBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
