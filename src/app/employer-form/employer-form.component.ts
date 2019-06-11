import { Component, OnInit } from '@angular/core';
import {EmployeesModels} from '../employees/models/employees.models';
import {EmployerFormService} from './services/employer-form.service';
import {SpecializationModel} from '../specialization/models/specialization.model';
import {mockSpecializations} from '../specialization/mock-data/mock-specializations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {
  newEmployer: EmployeesModels;
  specializations: SpecializationModel[];
  specializationList: SpecializationModel[];

  constructor(private service: EmployerFormService, private router: Router) { }

  ngOnInit() {
    this.specializationList = mockSpecializations;
    this.newEmployer = new EmployeesModels();
  }

  saveEmployer() {
    console.log(this.newEmployer);
    this.service.saveEmployer(this.newEmployer).then(employer => console.log(employer));
    this.router.navigate(['']);
  }

  changeEmployerRole(role: string) {
    this.newEmployer.role = String(role);
  }

}
