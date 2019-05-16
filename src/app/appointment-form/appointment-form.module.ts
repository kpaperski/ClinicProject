import {NgModule} from '@angular/core';
import {AppointmentFormComponent} from './appointment-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppointmentFormComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppointmentFormModule { }
