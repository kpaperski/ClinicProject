import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorAppointmentService} from './services/doctor-appointment.service';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DoctorAppointmentModel} from './models/doctor-appointment.model';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  doctorID: number;
  appointmentList: DoctorAppointmentModel[];

  constructor(private route: ActivatedRoute, private service: DoctorAppointmentService, private router: Router) { }

  ngOnInit() {
    this.doctorID = Number(this.route.snapshot.params.doctorId);
    this.service.fetchDoctorAppointmentsLists(this.doctorID).then((list: DoctorAppointmentModel[]) => this.appointmentList = list);
  }

  onEditAppointmentButtonClick(appointment: DoctorAppointmentModel) {
    this.router.navigate(['appointmentRealisation/' + appointment.id]);
  }
}
