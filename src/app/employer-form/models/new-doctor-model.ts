import {SpecializationModel} from '../../specialization/models/specialization.model';

export class NewDoctorModel {
  id: number;
  login: string;
  password: string;
  firstname: string;
  surname: string;
  specializations: SpecializationModel[];
}
