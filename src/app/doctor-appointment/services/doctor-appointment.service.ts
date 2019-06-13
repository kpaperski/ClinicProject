import { Injectable } from '@angular/core';
import {MockDoctorAppointment} from '../mock-data/mock-doctor-appointment';
import {DoctorAppointmentModel} from '../models/doctor-appointment.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {

  constructor(private http: HttpClient) { }

  fetchDoctorAppointmentsLists(doctorID: number): Promise<any> {
    console.log(doctorID);
    return this.http.get(serverAddress + '/appointment/doctor/' + doctorID).toPromise();
  }
}
