import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {PlannerComponent} from './planner/planner.component';
import {DoctorPlannerComponent} from './doctor-planner/doctor-planner.component';
import {EmployeesComponent} from './employees/employees.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {EmployerFormComponent} from './employer-form/employer-form.component';
import {DoctorAppointmentComponent} from './doctor-appointment/doctor-appointment.component';
import {AppointmentRealisationComponent} from './appointment-realisation/appointment-realisation.component';
import {PatientCardComponent} from './patient-card/patient-card.component';
import {DoctorsOfficeComponent} from './doctors-office/doctors-office.component';
import {SpecializationComponent} from './specialization/specialization.component';
import {ExaminationsComponent} from './examinations/examinations.component';
import {EmployerDetailsComponent} from './employer-details/employer-details.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'patient/:id',
    component: PatientDetailsComponent,
  },
  {
    path: 'newPatient',
    component: PatientFormComponent,
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },

  {
    path: 'doctorPlanner/:doctorId',
    component: DoctorPlannerComponent
  },

  {
    path: 'doctorAppointment/:doctorId',
    component: DoctorAppointmentComponent
  },

  {
    path: 'appointmentRealisation/:appointmentId',
    component: AppointmentRealisationComponent
  },

  {
    path: 'patientCard/:patientId/:doctorId',
    component: PatientCardComponent
  },

  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employer/:id',
    component: EmployerDetailsComponent
  },
  {
    path: 'newEmployer',
    component: EmployerFormComponent
  },
  {
    path: 'offices',
    component: DoctorsOfficeComponent
  },
  {
    path: 'specializations',
    component: SpecializationComponent
  },
  {
    path: 'examinations',
    component: ExaminationsComponent
  },
  {
    path: '',
    component: WelcomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
