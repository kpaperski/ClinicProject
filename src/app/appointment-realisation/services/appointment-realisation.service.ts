import { Injectable } from '@angular/core';
import {AppointmentDetailsModel} from '../models/appoitment-details.model';
import {MockAppointmentDetails} from '../mock-data/mock-appointment-details';
import {ExaminationModel} from '../../examinations/models/examination.model';
import {MockExamination} from '../../examinations/mock-data/mock-examination';
import {ReferralModel} from '../models/referral.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRealisationService {

  constructor() { }

  fetchAppointment(appointmentID: number): Promise<AppointmentDetailsModel> {
    const appointmentToReturn: AppointmentDetailsModel = MockAppointmentDetails.filter(appointment => appointment.id === appointmentID)[0];
    return Promise.resolve(appointmentToReturn);
  }

  fetchExaminationList(): Promise<ExaminationModel[]> {
    return Promise.resolve(MockExamination);
  }

  addExamination(appointmentID: number, examinationID: number) {
    console.log('Dodane');
  }

  addReferral(appointmentID: number, referral: ReferralModel): Promise<ReferralModel> {
    return Promise.resolve(referral);
  }
}
