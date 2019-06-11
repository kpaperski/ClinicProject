import {Injectable} from '@angular/core';
import {PatientDetailsModel} from '../models/patient-details.model';
import {mockPatientDetails} from '../mock-data/mock-patients-details';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor(private http: HttpClient) { }

  fetchPatient(patientID: number): Promise<any> {
    return this.http.get(serverAddress + '/patients/' + patientID).toPromise();
  }
}
