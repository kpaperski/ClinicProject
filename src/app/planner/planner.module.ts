import {NgModule} from '@angular/core';
import {PlannerComponent} from './planner.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DoctorSelectorComponent} from './doctor-selector/doctor-selector.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DatepickerComponent} from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    PlannerComponent,
    DoctorSelectorComponent,
    DatepickerComponent
  ],
  exports: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule
  ]
})
export class PlannerModule { }
