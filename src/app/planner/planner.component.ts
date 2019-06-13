import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {VisitHoursModel} from './models/visit-hours.model';
import {PlannerService} from './services/planner.service';
import {PatientModel} from '../patients/models/patient.model';
import {AppointmentModel} from '../appointment/models/appointment.model';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  specializationID: number;
  doctorID: number;
  patientID: number;
  visit: VisitHoursModel;
  searchString: string;
  visitHoursList: VisitHoursModel[];
  patientsList: PatientModel[];
  appointmentToSave: AppointmentModel;

  constructor(private router: Router, private service: PlannerService) { }

  ngOnInit() {
    this.appointmentToSave = new AppointmentModel();
    this.visit = new VisitHoursModel();
    this.service.fetchPatientsLists().then((list: PatientModel[]) => this.patientsList = list);
  }

  removeDoctorID(ID: number) {
    this.doctorID = ID;
  }

  removeSpecializationID(ID: number) {
    this.specializationID = ID;
  }

  onSearchByDoctorButtonClicked() {
    console.log(this.doctorID);
    this.service.fetchApointmentDateByDoctor(this.doctorID).then((list: VisitHoursModel[]) => this.visitHoursList = list);
  }

  onSearchBySpecializationButtonClicked() {
    console.log(this.specializationID);
    this.service.fetchApointmentDateBySpecialization(this.specializationID).then((list: VisitHoursModel[]) => this.visitHoursList = list);
  }

  changePatientID(ID: number) {
    this.patientID = Number(ID);
  }
  saveAppointment() {
    console.log(this.doctorID);
    console.log(this.patientID);
    console.log(this.visit.id);
    console.log(this.visit.date);
    this.appointmentToSave.shiftPartID = this.visit.id;
    this.appointmentToSave.date = this.visit.date;
    this.appointmentToSave.doctorID = this.doctorID;
    this.appointmentToSave.patientID = this.patientID;
    this.service.saveAppointment(this.appointmentToSave).then((appointment) => console.log(appointment));
    this.router.navigate(['']);
  }
}
