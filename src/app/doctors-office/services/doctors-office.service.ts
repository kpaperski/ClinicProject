import { Injectable } from '@angular/core';
import {DoctorsOfficeModel} from '../models/doctors-office.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorsOfficeService {

  constructor(private http: HttpClient) { }

  fetchDoctorsOfficeList(): Promise<any> {
    return this.http.get(serverAddress + '/surgery').toPromise();
  }

  addOffice(officeToAdd: DoctorsOfficeModel) {
    return this.http.post(serverAddress + '/surgery', officeToAdd).toPromise();
  }
}
