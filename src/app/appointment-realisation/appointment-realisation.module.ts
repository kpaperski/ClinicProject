import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentRealisationComponent} from './appointment-realisation.component';
import {FormsModule} from '@angular/forms';
import { PatientCardComponent } from './services/patient-card/patient-card.component';

@NgModule({
  declarations: [
    AppointmentRealisationComponent,
    PatientCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppointmentRealisationModule { }
