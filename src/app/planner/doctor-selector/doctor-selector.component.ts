import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpecializationModel} from '../../specialization/models/specialization.model';
import {mockSpecializations} from '../../specialization/mock-data/mock-specializations';
import {DoctorDetailsModel} from '../../doctor-details/models/doctor-details.model';
import {mockDoctorDetails} from '../../doctor-details/mock-data/mock-doctor-details';

@Component({
  selector: 'app-doctor-selector',
  templateUrl: './doctor-selector.component.html',
  styleUrls: ['./doctor-selector.component.css']
})
export class DoctorSelectorComponent implements OnInit {
  specializationID: number;
  @Output() removeDoctorID = new EventEmitter<number>();
  doctorID: number;
  specializationList: SpecializationModel[];
  doctorList: DoctorDetailsModel[];

  constructor() { }

  ngOnInit() {
    this.specializationList = mockSpecializations;
    this.doctorList = mockDoctorDetails;
  }

  changeSpecializationID(ID: number) {
    this.specializationID = Number(ID);
  }

  changeDoctorID(ID: number) {
    this.doctorID = Number(ID);
  }

  emitDoctorID() {
    this.removeDoctorID.emit(this.doctorID);
  }
}
