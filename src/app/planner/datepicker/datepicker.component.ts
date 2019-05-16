import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() removeDateCalendar = new EventEmitter<NgbDateStruct>();
  dateCalendar: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  selectToday() {
    this.dateCalendar = this.calendar.getToday();
  }

  emit() {
    this.removeDateCalendar.emit(this.dateCalendar);
  }
}
