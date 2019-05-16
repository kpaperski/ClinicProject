import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorDetailsModel} from '../doctor-details/models/doctor-details.model';
import {VisitHoursModel} from '../planner/models/visit-hours.model';
import {AppointmentFormService} from './services/appointment-form.service';
import {PatientModel} from '../patients/models/patient.model';
import {AppointmentModel} from '../appointment/models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  dateDay: number;
  dateMonth: number;
  dateYear: number;
  doctorID: number;
  visitHourID: number;
  patientID: number;
  searchString: string;
  doctor: DoctorDetailsModel;
  visit: VisitHoursModel;
  patientsList: PatientModel[];
  appointmentToSave: AppointmentModel;

  constructor(private route: ActivatedRoute, private service: AppointmentFormService) {
    this.appointmentToSave = new AppointmentModel();
    this.fetchInfo();
  }

  ngOnInit() {

  }

  fetchInfo() {
    this.doctorID = Number(this.route.snapshot.params.doctorId);
    this.visitHourID = Number(this.route.snapshot.params.visitId);
    this.dateDay = Number(this.route.snapshot.params.dateDay);
    this.dateMonth = Number(this.route.snapshot.params.dateMonth);
    this.dateYear = Number(this.route.snapshot.params.dateYear);
    this.service.fetchDoctor(this.doctorID).then((doctor: DoctorDetailsModel) => this.doctor = doctor);
    this.service.fetchVisit(this.visitHourID).then((visit: VisitHoursModel) => this.visit = visit);
    this.service.fetchPatientsLists().then((patients: PatientModel[]) => this.patientsList = patients);
  }

  changePatientID(ID: number) {
    this.patientID = Number(ID);
  }

  saveAppointment() {
    this.appointmentToSave.doctorID = this.doctorID;
    this.appointmentToSave.dateDay = this.dateDay;
    this.appointmentToSave.dateMonth = this.dateMonth;
    this.appointmentToSave.dateYear = this.dateYear;
    this.appointmentToSave.startHour = this.visit.startHour;
    this.appointmentToSave.startMinute = this.visit.startMinute;
    this.appointmentToSave.endHour = this.visit.endHour;
    this.appointmentToSave.endMinute = this.visit.endMinute;
    this.appointmentToSave.patientID = this.patientID;
    this.service.saveAppointment(this.appointmentToSave).then((appointment) => console.log(appointment));
  }
}
