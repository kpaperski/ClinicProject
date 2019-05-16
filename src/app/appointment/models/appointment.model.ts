import {PatientModel} from '../../patients/models/patient.model';

export class AppointmentModel {
  id: number;
  dateDay: number;
  dateMonth: number;
  dateYear: number;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  patientID: number;
  doctorID: number;
}
