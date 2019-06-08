import { Injectable } from '@angular/core';
import {DoctorsOfficeModel} from '../models/doctors-office.model';
import {mockDoctorsOffice} from '../mock-data/mock-doctors-office';

@Injectable({
  providedIn: 'root'
})
export class DoctorsOfficeService {

  constructor() { }

  fetchDoctorsOfficeList(): Promise<DoctorsOfficeModel[]> {
    return Promise.resolve(mockDoctorsOffice);
  }

  addOffice(officeToAdd: DoctorsOfficeModel) {
    return Promise.resolve(officeToAdd);
  }
}
