import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpecializationModel} from '../../specialization/models/specialization.model';
import {mockSpecializations} from '../../specialization/mock-data/mock-specializations';
import {DoctorDetailsModel} from '../../doctor-details/models/doctor-details.model';
import {mockDoctorDetails} from '../../doctor-details/mock-data/mock-doctor-details';
import {until} from 'selenium-webdriver';
import titleIs = until.titleIs;
import {DoctorSelectorService} from './services/doctor-selector.service';

@Component({
  selector: 'app-doctor-selector',
  templateUrl: './doctor-selector.component.html',
  styleUrls: ['./doctor-selector.component.css']
})
export class DoctorSelectorComponent implements OnInit {
  specializationID: number;
  @Output() removeDoctorID = new EventEmitter<number>();
  doctorID: number;
  specialization: SpecializationModel;
  specializationList: SpecializationModel[];
  doctorList: DoctorDetailsModel[];

  constructor(private service: DoctorSelectorService) { }

  ngOnInit() {
    this.specialization = new SpecializationModel();
    this.specializationList = mockSpecializations;
    this.service.fetchDoctorList().then((list: DoctorDetailsModel[]) => this.doctorList = list);
  }

  changeSpecializationID(ID: number) {
    this.specializationID = Number(ID);
    this.service.fetchDoctorList().then((list: DoctorDetailsModel[]) => this.doctorList = list.filter(doctor => doctor.specialization.some(specialization => specialization.id === this.specializationID)))
  }

  changeDoctorID(ID: number) {
    this.doctorID = Number(ID);
  }

  emitDoctorID() {
    this.removeDoctorID.emit(this.doctorID);
  }
}
