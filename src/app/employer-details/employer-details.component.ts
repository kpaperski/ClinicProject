import { Component, OnInit } from '@angular/core';
import {EmployeesModels} from '../employees/models/employees.models';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployerDetailsService} from './services/employer-details.service';

@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrls: ['./employer-details.component.css']
})
export class EmployerDetailsComponent implements OnInit {
  employer: EmployeesModels;
  employerID: number;

  constructor(private route: ActivatedRoute, private service: EmployerDetailsService, private router: Router) { }

  ngOnInit() {
    this.fetchEmployerInfo();
  }

  fetchEmployerInfo() {
    this.employerID = Number(this.route.snapshot.params.id);
    this.service.fetchEmployer(this.employerID).then((employer: EmployeesModels) => this.employer = employer);
  }

  onDeletePatientButtonClicked() {
    if (this.employer.role === 'receptionist') {
      this.service.deleteReceptionist(this.employerID).subscribe();
    } else if (this.employer.role === 'admin') {
      this.service.deleteAdmin(this.employerID).subscribe();
    } else if (this.employer.role === 'doctor') {
      this.service.deleteDoctor(this.employerID).subscribe();
    }
    this.router.navigate(['']);
  }
}
