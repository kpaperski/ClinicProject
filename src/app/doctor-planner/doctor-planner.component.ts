import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DoctorsOfficeModel} from '../doctors-office/models/doctors-office.model';
import {DoctorPlannerServices} from './services/doctor-planner.services';
import {DutyModel} from './models/duty.model';
import {ActivatedRoute, Router} from '@angular/router';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-doctor-planner',
  templateUrl: './doctor-planner.component.html',
  styleUrls: ['./doctor-planner.component.css']
})
export class DoctorPlannerComponent implements OnInit {
  dayList = [{id: '1', name: 'Poniedziałek'}, {id: '2', name: 'Wtorek'}, {id: '3', name: 'Środa'}, {id: '4', name: 'Czwartek'}, {id: '5', name: 'Piątek'}];
  doctorsOfficeList: DoctorsOfficeModel[];
  startMinute: string;
  startHour: string;
  endMinute: string;
  endHour: string;
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
    if (this.startTime.minute < 10) {
      this.startMinute = '0' + this.startTime.minute;
    } else {
      this.startMinute = this.startTime.minute.toString();
    }
    if (this.startTime.hour < 10) {
      this.startHour = '0' + this.startTime.hour;
    } else {
      this.startHour = this.startTime.hour.toString();
    }
    if (this.endTime.minute < 10) {
      this.endMinute = '0' + this.endTime.minute;
    } else {
      this.endMinute = this.endTime.minute.toString();
    }
    if (this.endTime.hour < 10) {
      this.endHour = '0' + this.endTime.hour;
    } else {
      this.endHour = this.endTime.hour.toString();
    }
    this.newDuty.id = -1;
    this.newDuty.startTime = this.startHour + ':' + this.startMinute;
    this.newDuty.endTime = this.endHour + ':' + this.endMinute;
    this.newDuty.day = this.day;
    this.newDuty.doctorsOfficeID = this.officeID;
    console.log(this.newDuty);
    this.service.saveDuty(this.newDuty).then((duty) => console.log(duty));
    this.router.navigate(['']);
  }
}
