import {Injectable} from '@angular/core';
import {PatientModel} from '../models/patient.model';
import {mockPatients} from '../mock-data/mock-patients';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  fetchPatientsLists(): Promise<any> {
    return this.http.get(serverAddress + '/patients').toPromise();
  }
}
