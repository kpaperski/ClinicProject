import {AddressModel} from './address.model';

export class PatientDetailsModel {
  id: number;
  firstname: string;
  surname: string;
  phoneNumber: number;
  pesel: string;
  address: AddressModel;
}
