import { Component, OnInit } from '@angular/core';
import {EmployeesModels} from './models/employees.models';
import {Router} from '@angular/router';
import {EmployeesService} from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesList: EmployeesModels[];
  searchEmployer: string;

  constructor(private router: Router, private service: EmployeesService) { }

  ngOnInit() {
    this.service.fetchEmployeesList().then((list: EmployeesModels[]) => this.employeesList = list);
  }

  onEmployerButtonClick(employer: EmployeesModels) {
    this.router.navigate(['employer/' + employer.id]);
  }

  onNewEmployerButtonClick() {
    this.router.navigate(['newEmployer']);
  }

}
