import {AddressModel} from './address.model';

export class PatientDetailsModel {
  id: number;
  firstname: string;
  surname: string;
  phoneNumber: number;
  identityNumber: string;
  address: AddressModel;
}
