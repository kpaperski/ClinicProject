import {NgModule} from '@angular/core';
import {PlannerComponent} from './planner.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DoctorSelectorComponent} from './doctor-selector/doctor-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    PlannerComponent,
    DoctorSelectorComponent,
    DatepickerComponent,
    FilterPipe
  ],
  exports: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PlannerModule { }
