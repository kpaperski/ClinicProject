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

  logIn(login: string, password: string): number {
    const user: EmployeesModels = MockEmployees.filter(employer => (employer.login === login && employer.password === password))[0];
    if (user) {
      return user.id;
    } else {
      return 0;
    }
  }
}
