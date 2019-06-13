import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {AppointmentModel} from '../../appointment/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor(private http: HttpClient) { }

  fetchPatientsLists(): Promise<any> {
    return this.http.get(serverAddress + '/patients').toPromise();
  }

  fetchApointmentDateByDoctor(doctorID: number): Promise<any> {
    return this.http.get(serverAddress + '/appointment/byDoctor/' + doctorID).toPromise();
  }

  fetchApointmentDateBySpecialization(specializationID: number): Promise<any> {
    return this.http.get(serverAddress + '/appointment/bySpecialization/' + specializationID).toPromise();
  }

  saveAppointment(appointmentToSave: AppointmentModel): Promise<any> {
    return this.http.post(serverAddress + '/appointment', appointmentToSave).toPromise();
  }
}
