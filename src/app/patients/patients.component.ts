import {Component, OnInit } from '@angular/core';
import {PatientModel} from './models/patient.model';
import {PatientsService} from './services/patients.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientsList: PatientModel[];
  searchString: string;

  constructor(private router: Router, private service: PatientsService) {
  }

  ngOnInit() {
    this.service.fetchPatientsLists().then((list: PatientModel[]) => this.patientsList = list);
  }

  onPatientButtonClick(patient: PatientModel) {
    this.router.navigate(['patient/' + patient.id]);
  }

}
