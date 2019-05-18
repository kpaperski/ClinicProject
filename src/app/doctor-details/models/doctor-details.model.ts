import {SpecializationModel} from '../../specialization/models/specialization.model';

export class DoctorDetailsModel {
  id: number;
  firstname: string;
  surname: string;
  specialization: SpecializationModel[];
}
