import {ScopeOfExaminationModel} from './scope-of-examination.model';

export class ReferralModel {
  id: number;
  appointmentID: number;
  scope: ScopeOfExaminationModel;
}
