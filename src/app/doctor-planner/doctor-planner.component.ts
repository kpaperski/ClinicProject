import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doctor-planner',
  templateUrl: './doctor-planner.component.html',
  styleUrls: ['./doctor-planner.component.css']
})
export class DoctorPlannerComponent implements OnInit {
  dayList = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
  startTime = {hour: 10, minute: 0};
  endTime = {hour: 20, minute: 0};
  day: string;
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

  constructor() { }

  ngOnInit() {
  }

  changeDay(day: string) {
    this.day = day;
  }

  saveDuty() {

  }
}
