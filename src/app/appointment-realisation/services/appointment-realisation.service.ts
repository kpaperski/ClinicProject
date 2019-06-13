import { Injectable } from '@angular/core';
import {AppointmentDetailsModel} from '../models/appoitment-details.model';
import {MockAppointmentDetails} from '../mock-data/mock-appointment-details';
import {ExaminationModel} from '../../examinations/models/examination.model';
import {MockExamination} from '../../examinations/mock-data/mock-examination';
import {ReferralModel} from '../models/referral.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {AppointmentExaminationModel} from '../models/appointment-examination.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRealisationService {

  constructor(private http: HttpClient) { }

  fetchAppointment(appointmentID: number): Promise<any> {
    return this.http.get(serverAddress + '/appointment/details/' + appointmentID).toPromise();
  }

  fetchExaminationList(): Promise<any> {
    return this.http.get(serverAddress + '/examination').toPromise();
  }

  fetchScopeOfExamination(): Promise<any> {
    return this.http.get(serverAddress + '/scopeOfExamination').toPromise();
  }

  addExamination(appointmentExaminationToAdd: AppointmentExaminationModel): Promise<any> {
    return this.http.post(serverAddress + '/appointmentExamination', appointmentExaminationToAdd).toPromise();
  }

  addReferral(referralToAdd: ReferralModel): Promise<any> {
    return this.http.post(serverAddress + '/referral', referralToAdd).toPromise();
  }
}
