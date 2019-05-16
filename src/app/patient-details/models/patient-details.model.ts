import {AddressModel} from './address.model';

export class PatientDetailsModel {
  id: number;
  firstname: string;
  surname: string;
  phoneNumber: number;
  address: AddressModel;
}
