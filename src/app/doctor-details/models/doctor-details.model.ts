import {SpecializationModel} from '../../specialization/models/specialization.model';
import {EmployeesModels} from '../../employees/models/employees.models';

export class DoctorDetailsModel {
  employerData: EmployeesModels;
  specialization: SpecializationModel[];
}
