import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';
import {ExaminationModel} from '../../examinations/models/examination.model';
import {ReferralModel} from './referral.model';

export class AppointmentDetailsModel {
  id: number;
  patient: PatientDetailsModel;
  doctorID: number;
  date: string;
  time: string;
  examination: ExaminationModel[];
  referral: ReferralModel;
}
