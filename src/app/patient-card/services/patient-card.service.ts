import { Injectable } from '@angular/core';
import {AppointmentInPatientCardModel} from '../models/appointment-in-patient-card-model';
import {MockAppointmentInPatientCard} from '../mock-data/mock-appointment-in-patient-card';
import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';
import {mockPatientDetails} from '../../patient-details/mock-data/mock-patients-details';

@Injectable({
  providedIn: 'root'
})
export class PatientCardService {

  constructor() { }

  fetchPatientAppointment(patientID: number, doctorID: number): Promise<AppointmentInPatientCardModel[]> {
    return Promise.resolve(MockAppointmentInPatientCard);
  }

  fetchPatient(patientID: number): Promise<PatientDetailsModel> {
    const patientToReturn: PatientDetailsModel = mockPatientDetails.filter(patient => patient.id === patientID)[0];
    return Promise.resolve(patientToReturn);
  }
}
