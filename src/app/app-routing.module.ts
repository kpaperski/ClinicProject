import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {PlannerComponent} from './planner/planner.component';
import {AppointmentFormComponent} from './appointment-form/appointment-form.component';

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
    path: 'app-appointment-form/:doctorId/:visitId/:dateDay/:dateMonth/:dateYear',
    component: AppointmentFormComponent,
  },
  {
    path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
