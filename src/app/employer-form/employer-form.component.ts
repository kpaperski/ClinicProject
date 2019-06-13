import { Component, OnInit } from '@angular/core';
import {EmployeesModels} from '../employees/models/employees.models';
import {EmployerFormService} from './services/employer-form.service';
import {SpecializationModel} from '../specialization/models/specialization.model';
import {mockSpecializations} from '../specialization/mock-data/mock-specializations';
import {Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {NewDoctorModel} from './models/new-doctor-model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {
  newEmployer: EmployeesModels;
  newDoctors: NewDoctorModel;
  specializations = new FormControl();
  specializationList: SpecializationModel[];

  constructor(private service: EmployerFormService, private router: Router) { }

  ngOnInit() {
    this.service.fetchSpecializationList().then((list: SpecializationModel[]) => this.specializationList = list);
    this.newEmployer = new EmployeesModels();
    this.newDoctors = new NewDoctorModel();
  }

  saveEmployer() {
    if (this.newEmployer.role === 'administrator') {
      this.service.saveAdmin(this.newEmployer).then(employer => console.log(employer));
    } else if (this.newEmployer.role === 'recepcjonista') {
      this.service.saveReceptionist(this.newEmployer).then(employer => console.log(employer));
    } else if (this.newEmployer.role === 'lekarz') {
      this.newDoctors.firstname = this.newEmployer.firstname;
      this.newDoctors.surname = this.newEmployer.surname;
      this.newDoctors.login = this.newEmployer.login;
      this.newDoctors.password = this.newEmployer.password;
      console.log(this.newDoctors);
      this.service.saveDoctor(this.newDoctors).then(doctor => console.log(doctor));
    }
    this.router.navigate(['']);
  }

  changeEmployerRole(role: string) {
    this.newEmployer.role = String(role);
  }


}
