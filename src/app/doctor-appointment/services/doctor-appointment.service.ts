import { Injectable } from '@angular/core';
import {MockDoctorAppointment} from '../mock-data/mock-doctor-appointment';
import {DoctorAppointmentModel} from '../models/doctor-appointment.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {

  constructor() { }

  fetchDoctorAppointmentsLists(doctorID: number, date: NgbDateStruct): Promise<DoctorAppointmentModel[]> {
    return Promise.resolve(MockDoctorAppointment);
  }
}
