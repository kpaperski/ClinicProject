import { Component, OnInit } from '@angular/core';
import {PatientDetailsModel} from './models/patient-details.model';
import {PatientDetailsService} from './services/patient-details.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: PatientDetailsModel;
  patientID: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: PatientDetailsService) { }

  ngOnInit() {
    this.fetchPatientInfo();
  }

  fetchPatientInfo() {
    this.patientID = Number(this.route.snapshot.params.id);
    this.service.fetchPatient(this.patientID).then((patient: PatientDetailsModel) => this.patient = patient);
  }

  onSignUpButtonClicked() {
    this.router.navigate(['signUp']);
  }
}
