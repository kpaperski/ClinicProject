import {Injectable} from '@angular/core';
import {PatientDetailsModel} from '../models/patient-details.model';
import {mockPatientDetails} from '../mock-data/mock-patients-details';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor() { }

  fetchPatient(patientID: number): Promise<PatientDetailsModel> {
    const patientToReturn: PatientDetailsModel = mockPatientDetails.filter(patient => patient.id === patientID)[0];
    return Promise.resolve(patientToReturn);
  }
}
