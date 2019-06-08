import {PatientDetailsModel} from '../../patient-details/models/patient-details.model';
import {ExaminationModel} from '../../different-models/models/examination.model';
import {ReferralModel} from '../../different-models/models/referral.model';

export class AppointmentDetailsModel {
  id: number;
  patient: PatientDetailsModel;
  doctorID: number;
  time: string;
  examination: ExaminationModel[];
  referral: ReferralModel;
}
