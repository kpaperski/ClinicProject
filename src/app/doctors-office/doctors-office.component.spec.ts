import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsOfficeComponent } from './doctors-office.component';

describe('DoctorsOfficeComponent', () => {
  let component: DoctorsOfficeComponent;
  let fixture: ComponentFixture<DoctorsOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
