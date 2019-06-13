import { Injectable } from '@angular/core';
import {EmployeesModels} from '../../employees/models/employees.models';
import {serverAddress} from '../../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {NewDoctorModel} from '../models/new-doctor-model';

@Injectable({
  providedIn: 'root'
})
export class EmployerFormService {

  constructor(private http: HttpClient) { }

  fetchSpecializationList(): Promise<any> {
    return this.http.get(serverAddress + '/specialization').toPromise();
  }

  saveReceptionist(employerToSave: EmployeesModels): Promise<any> {
    return this.http.post(serverAddress + '/receptionist', employerToSave).toPromise();
  }

  saveAdmin(employerToSave: EmployeesModels): Promise<any> {
    return this.http.post(serverAddress + '/admin', employerToSave).toPromise();
  }

  saveDoctor(doctorToSave: NewDoctorModel): Promise<any> {
    return this.http.post(serverAddress + '/doctor', doctorToSave).toPromise();
  }


}
