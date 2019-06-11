import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  fetchEmployeesList(): Promise<any> {
    return this.http.get(serverAddress + '/employee').toPromise();
  }
}
