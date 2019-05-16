import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {VisitHoursModel} from './models/visit-hours.model';
import {mockVisitHours} from './mock-data/mock-visit-hours';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  date: NgbDateStruct;
  doctorID: number;
  visitHoursID: number;
  visitHoursList: VisitHoursModel[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.visitHoursList = mockVisitHours;
  }

  removeDateCalendar(calendarDate: NgbDateStruct) {
    this.date = calendarDate;
  }

  removeDoctorID(ID: number) {
    this.doctorID = ID;
  }

  changeVisitHoursID(ID: number) {
    this.visitHoursID = Number(ID);
  }

  onSignUpButtonClicked() {
    this.router.navigate(['app-appointment-form/' + this.doctorID + '/' + this.visitHoursID + '/' + this.date.day + '/' + this.date.month + '/' + this.date.year ]);
  }
}
