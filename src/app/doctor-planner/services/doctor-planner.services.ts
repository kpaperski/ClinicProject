import {Injectable} from '@angular/core';
import {DoctorsOfficeModel} from '../../doctors-office/models/doctors-office.model';
import {mockDoctorsOffice} from '../../doctors-office/mock-data/mock-doctors-office';
import {DutyModel} from '../models/duty.model';
import {serverAddress} from '../../../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorPlannerServices {

  constructor(private http: HttpClient) { }

  fetchDoctorsOfficeList(): Promise<any> {
    return this.http.get(serverAddress + '/surgery').toPromise();
  }

  saveDuty(dutyToSave: DutyModel): Promise<any> {
    return this.http.post(serverAddress + '/shift/shiftWithPart', dutyToSave).toPromise();
  }

}
