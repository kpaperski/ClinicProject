import { Injectable } from '@angular/core';
import {EmployeesModels} from '../models/employees.models';
import {MockEmployees} from '../mock-data/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  fetchEmployeesList(): Promise<EmployeesModels[]> {
    return Promise.resolve(MockEmployees);
  }
}
