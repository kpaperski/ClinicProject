import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {Form, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PatientsModule} from './patients/patients.module';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DoctorDetailsComponent} from './doctor-details/doctor-details.component';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {PlannerModule} from './planner/planner.module';
import {DoctorPlannerModule} from './doctor-planner/doctor-planner.module';
import {EmployeesModule} from './employees/employees.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmployerFormComponent } from './employer-form/employer-form.component';
import {DoctorAppointmentModule} from './doctor-appointment/doctor-appointment.module';
import {AppointmentRealisationModule} from './appointment-realisation/appointment-realisation.module';
import {PatientCardModule} from './patient-card/patient-card.module';
import {DoctorsOfficeModule} from './doctors-office/doctors-office.module';
import {SpecializationModule} from './specialization/specialization.module';
import {ExaminationsModule} from './examinations/examinations.module';
import {HttpClientModule} from '@angular/common/http';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {EmployerDetailsModule} from './employer-details/employer-details.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PatientFormComponent,
    AppointmentComponent,
    DoctorDetailsComponent,
    WelcomePageComponent,
    LoginFormComponent,
    EmployerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientsModule,
    PlannerModule,
    DoctorPlannerModule,
    EmployeesModule,
    DoctorAppointmentModule,
    AppointmentRealisationModule,
    PatientCardModule,
    DoctorsOfficeModule,
    SpecializationModule,
    ExaminationsModule,
    EmployerDetailsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
