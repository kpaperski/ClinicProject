import {Injectable} from '@angular/core';
import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';

@Injectable({
  providedIn: 'root'
})
export class PatientFormService {

  constructor() { }

  savePatient(patientToSave: PatientDetailsModel): Promise<PatientDetailsModel> {
    return Promise.resolve(patientToSave);
  }
}
