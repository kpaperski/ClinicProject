import {NgModule} from '@angular/core';
import {DoctorPlannerComponent} from './doctor-planner.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DoctorPlannerComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorPlannerModule { }
