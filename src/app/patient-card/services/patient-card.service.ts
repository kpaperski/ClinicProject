import { Injectable } from '@angular/core';
import {AppointmentInPatientCardModel} from '../models/appointment-in-patient-card-model';
import {MockAppointmentInPatientCard} from '../mock-data/mock-appointment-in-patient-card';
import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';
import {mockPatientDetails} from '../../patient-details/mock-data/mock-patients-details';
import {serverAddress} from '../../../assets/server.constant';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientCardService {

  constructor(private http: HttpClient) { }

  fetchPatientAppointment(patientID: number, doctorID: number): Promise<any> {
    const params = new HttpParams().set('patientID', patientID.toString()).set('doctorID', doctorID.toString());
    return this.http.get(serverAddress + '/appointment/patientCard', {params}).toPromise();
  }

  fetchPatient(patientID: number): Promise<any> {
    return this.http.get(serverAddress + '/patients/' + patientID).toPromise();
  }
}
