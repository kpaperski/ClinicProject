import {NgModule} from '@angular/core';
import {PatientsComponent} from './patients.component';
import {CommonModule} from '@angular/common';
import {PatientDetailsModule} from '../patient-details/patient-details.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    PatientsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PatientDetailsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
  ]
})
export class PatientsModule { }
