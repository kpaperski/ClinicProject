import {Injectable} from '@angular/core';
import {DoctorsOfficeModel} from '../../doctors-office/models/doctors-office.model';
import {mockDoctorsOffice} from '../../doctors-office/mock-data/mock-doctors-office';
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
