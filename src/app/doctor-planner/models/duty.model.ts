import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class DutyModel {
  id: number;
  day: string;
  startTime: NgbTimeStruct;
  endTime: NgbTimeStruct;
  doctorsOfficeID: number;
  doctorsID: number;
}
