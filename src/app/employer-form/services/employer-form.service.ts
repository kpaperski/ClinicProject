import { Injectable } from '@angular/core';
import {EmployeesModels} from '../../employees/models/employees.models';

@Injectable({
  providedIn: 'root'
})
export class EmployerFormService {

  constructor() { }

  saveEmployer(employerToSave: EmployeesModels): Promise<EmployeesModels> {
    return Promise.resolve(employerToSave);
  }
}
