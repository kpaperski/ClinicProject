import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DoctorsOfficeModel} from '../different-models/models/doctors-office.model';
import {DoctorPlannerServices} from './services/doctor-planner.services';
import {DutyModel} from './models/duty.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doctor-planner',
  templateUrl: './doctor-planner.component.html',
  styleUrls: ['./doctor-planner.component.css']
})
export class DoctorPlannerComponent implements OnInit {
  dayList = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
  doctorsOfficeList: DoctorsOfficeModel[];
  startTime = {hour: 10, minute: 0, second: 0};
  endTime = {hour: 20, minute: 0, second: 0};
  day: string;
  officeID: number;
  newDuty: DutyModel;

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 10) {
      return {tooEarly: true};
    }
    if (value.hour > 19) {
      return {tooLate: true};
    }

    return null;
  });
  ctrl1 = new FormControl('',(control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 10) {
      return {tooEarly: true};
    }
    if (value.hour > 20) {
      return {tooLate: true};
    }

    return null;
  });

  constructor(private route: ActivatedRoute, private service: DoctorPlannerServices, private router: Router) { }

  ngOnInit() {
    this.service.fetchDoctorsOfficeList().then((list: DoctorsOfficeModel[]) => this.doctorsOfficeList = list);
    this.newDuty = new DutyModel();
    this.newDuty.doctorsID = Number(this.route.snapshot.params.doctorId);
  }

  changeDay(day: string) {
    this.day = day;
  }

  changeOffice(officeID: number) {
    this.officeID = officeID;
  }

  onAddDuty() {
    this.newDuty.startTime = this.startTime;
    this.newDuty.endTime = this.endTime;
    this.newDuty.day = this.day;
    this.newDuty.doctorsOfficeID = this.officeID;
    this.service.saveDuty(this.newDuty).then((duty) => console.log(duty));
    this.router.navigate(['']);
  }
}
