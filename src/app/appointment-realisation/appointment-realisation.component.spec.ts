import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRealisationComponent } from './appointment-realisation.component';

describe('AppointmentRealisationComponent', () => {
  let component: AppointmentRealisationComponent;
  let fixture: ComponentFixture<AppointmentRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentRealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
