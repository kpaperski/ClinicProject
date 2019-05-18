import { Injectable } from '@angular/core';
import {EmployeesModels} from './employees/models/employees.models';
import {MockEmployees} from './employees/mock-data/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  fetchUser(userID: number): Promise<EmployeesModels> {
    const userToReturn: EmployeesModels = MockEmployees.filter(employer => employer.id === userID)[0];
    return Promise.resolve(userToReturn);
  }
}
