import {PatientModel} from '../../patients/models/patient.model';

export class AppointmentModel {
  id: number;
  date: string;
  shiftPartID: number;
  patientID: number;
  doctorID: number;
}
