import { Injectable } from '@angular/core';
import {EmployeesModels} from '../../employees/models/employees.models';
import {serverAddress} from '../../../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerFormService {

  constructor(private http: HttpClient) { }

  saveEmployer(employerToSave: EmployeesModels): Promise<any> {
    return this.http.post(serverAddress + '/patients', employerToSave).toPromise();
  }
}
