import {Injectable} from '@angular/core';
import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class PatientFormService {

  constructor(private http: HttpClient) { }

  savePatient(patientToSave: PatientDetailsModel): Promise<any> {
    return this.http.post(serverAddress + '/patients', patientToSave).toPromise();
  }
}
