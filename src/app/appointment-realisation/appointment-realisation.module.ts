import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentRealisationComponent} from './appointment-realisation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppointmentRealisationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppointmentRealisationModule { }
