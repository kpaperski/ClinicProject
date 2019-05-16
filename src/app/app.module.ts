import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PatientsModule} from './patients/patients.module';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SpecializationComponent } from './specialization/specialization.component';
import {DoctorDetailsComponent} from './doctor-details/doctor-details.component';
import {MatFormFieldModule} from '@angular/material';
import {PlannerModule} from './planner/planner.module';
import {AppointmentFormModule} from './appointment-form/appointment-form.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PatientFormComponent,
    AppointmentComponent,
    DoctorDetailsComponent,
    SpecializationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientsModule,
    PlannerModule,
    AppointmentFormModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
