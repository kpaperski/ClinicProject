import { Component, OnInit } from '@angular/core';
import {AppointmentInPatientCardModel} from './models/appointment-in-patient-card-model';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientCardService} from './services/patient-card.service';
import {PatientDetailsModel} from '../patient-details/models/patient-details.model';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  doctorID: number;
  patientID: number;
  appointmentInPatientCard: AppointmentInPatientCardModel[];
  patient: PatientDetailsModel;

  constructor(private route: ActivatedRoute, private service: PatientCardService, private router: Router) { }

  ngOnInit() {
    this.patientID = Number(this.route.snapshot.params.patientId);
    this.doctorID = Number(this.route.snapshot.params.doctorId);
    this.service.fetchPatientAppointment(this.patientID, this.doctorID).then((list: AppointmentInPatientCardModel[]) => this.appointmentInPatientCard = list);
    this.service.fetchPatient(this.patientID).then(patient => this.patient = patient);
  }

  onDetailsAppointmentButtonClick(appointment: AppointmentInPatientCardModel) {
    this.router.navigate(['appointmentRealisation/' + appointment.id]);
  }
}
