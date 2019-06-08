import {Injectable} from '@angular/core';
import {DoctorsOfficeModel} from '../../different-models/models/doctors-office.model';
import {mockDoctorsOffice} from '../../different-models/mock-data/mock-doctors-office';
import {DutyModel} from '../models/duty.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorPlannerServices {

  constructor() { }

  fetchDoctorsOfficeList(): Promise<DoctorsOfficeModel[]> {
    return Promise.resolve(mockDoctorsOffice);
  }

  saveDuty(dutyToSave: DutyModel): Promise<DutyModel> {
    return Promise.resolve(dutyToSave);
  }

}
