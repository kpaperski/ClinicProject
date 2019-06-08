import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentRealisationComponent} from './appointment-realisation.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppointmentRealisationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppointmentRealisationModule { }
