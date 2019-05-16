import { Component, OnInit } from '@angular/core';
import {PatientDetailsModel} from '../patient-details/models/patient-details.model';
import {PatientFormService} from './services/patient-form.service';
import {AddressModel} from '../patient-details/models/address.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientToEdit: PatientDetailsModel;
  patientAddressToEdit: AddressModel;
  constructor(private service: PatientFormService) { }

  ngOnInit() {
    this.patientToEdit = new PatientDetailsModel();
    this.patientAddressToEdit = new AddressModel();
  }

  savePatient() {
    this.patientToEdit.address = this.patientAddressToEdit;
    this.service.savePatient(this.patientToEdit).then((patient) => console.log(patient));
  }
}
