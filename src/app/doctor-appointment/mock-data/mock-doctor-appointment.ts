import {DoctorAppointmentModel} from '../models/doctor-appointment.model';

export const MockDoctorAppointment: DoctorAppointmentModel[] = [
  {
    id: 1,
    patientFirstname: 'Karol',
    patientSurname: 'Pąperski',
    time: '8:00-8:15'
  },
  {
    id: 2,
    patientFirstname: 'Kinga',
    patientSurname: 'Lesisz',
    time: '8:15-8:30'
  },
  {
    id: 3,
    patientFirstname: 'Mateusz',
    patientSurname: 'Kopeć',
    time: '8:30-8:45'
  },
  {
    id: 4,
    patientFirstname: 'Aleksandra',
    patientSurname: 'Kot',
    time: '8:45-9:00'
  }
];
