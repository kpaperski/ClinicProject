import {Injectable} from '@angular/core';
import {PatientModel} from '../models/patient.model';
import {mockPatients} from '../mock-data/mock-patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  fetchPatientsLists(): Promise<PatientModel[]> {
    return Promise.resolve(mockPatients);
  }
}
