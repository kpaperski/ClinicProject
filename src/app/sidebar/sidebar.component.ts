import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() userType: string;
  @Input() userID: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNewPatientButtonClick() {
    this.router.navigate(['newPatient']);
  }

  onPatientsButtonClick() {
    this.router.navigate(['patients']);
  }

  onPlannerButtonClick() {
    this.router.navigate(['planner']);
  }

  onDoctorPlannerButtonClick() {
    this.router.navigate(['doctorPlanner/' + this.userID]);
  }

  onDoctorAppointmentButtonClick() {
    this.router.navigate(['doctorAppointment/' + this.userID]);
  }

  onEmployeesButtonClick() {
    this.router.navigate(['employees']);
  }

  onOfficesButtonClick() {
    this.router.navigate(['offices']);
  }

  onSpecializationsButtonClick() {
    this.router.navigate(['specializations']);
  }

  onExaminationsButtonClick() {
    this.router.navigate(['examinations']);
  }
}
