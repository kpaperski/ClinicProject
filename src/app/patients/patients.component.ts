import {Component, OnInit } from '@angular/core';
import {PatientModel} from './models/patient.model';
import {PatientsService} from './services/patients.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientsList: PatientModel[];
  searchString: string;
  // dataSource = new MatTableDataSource(this.patientsList);
  // displayedColumns: string[] = ['#', 'name', 'surname', 'button'];
//  filter = new FormControl('');

  constructor(private router: Router, private service: PatientsService) {
     // this.patientsList. = this.filter.valueChanges.pipe(
     //   startWith(''),
     //   map(text => this.service.search(text))
    //);
  }

  ngOnInit() {
//    this.patientsList = this.service.fetchPatientsLists();
    this.service.fetchPatientsLists().then((list: PatientModel[]) => this.patientsList = list);
  }

  onPatientButtonClick(patient: PatientModel) {
    this.router.navigate(['patient/' + patient.id]);
  }

}
