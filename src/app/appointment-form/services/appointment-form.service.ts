import {Injectable} from '@angular/core';
import {DoctorDetailsModel} from '../../doctor-details/models/doctor-details.model';
import {mockDoctorDetails} from '../../doctor-details/mock-data/mock-doctor-details';
import {VisitHoursModel} from '../../planner/models/visit-hours.model';
import {mockVisitHours} from '../../planner/mock-data/mock-visit-hours';
import {PatientModel} from '../../patients/models/patient.model';
import {mockPatients} from '../../patients/mock-data/mock-patients';
import {AppointmentModel} from '../../appointment/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {

  constructor() { }

  fetchDoctor(doctorID: number): Promise<DoctorDetailsModel> {
    const doctorToReturn: DoctorDetailsModel = mockDoctorDetails.filter(doctor => doctor.id === doctorID)[0];
    return Promise.resolve(doctorToReturn);
  }

  fetchVisit(visitID: number): Promise<VisitHoursModel> {
    const visitToReturn: VisitHoursModel = mockVisitHours.filter(visit => visit.id === visitID)[0];
    return Promise.resolve(visitToReturn);
  }

  fetchPatientsLists(): Promise<PatientModel[]> {
    return Promise.resolve(mockPatients);
  }

  saveAppointment(appointmentToSave: AppointmentModel): Promise<AppointmentModel> {
    return Promise.resolve(appointmentToSave);
  }
}
