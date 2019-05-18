import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPlannerComponent } from './doctor-planner.component';

describe('DoctorPlannerComponent', () => {
  let component: DoctorPlannerComponent;
  let fixture: ComponentFixture<DoctorPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
