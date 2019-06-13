import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorSelectorService {

  constructor(private http: HttpClient) { }

  fetchDoctorList(): Promise<any> {
    return this.http.get(serverAddress + '/doctor').toPromise();
  }

  fetchSpecializationList(): Promise<any> {
    return this.http.get(serverAddress + '/specialization').toPromise();
  }
}
