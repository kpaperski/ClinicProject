import { Component, OnInit } from '@angular/core';
import {ExaminationModel} from './models/examination.model';
import {ExaminationsService} from './services/examinations.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {
  examinationsList: ExaminationModel[];
  searchExamination: string;
  examinationToAdd: ExaminationModel;

  constructor(private service: ExaminationsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.fetchExaminationList().then((list: ExaminationModel[]) => this.examinationsList = list);
    this.examinationToAdd = new ExaminationModel();
  }

  onNewExaminationButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addExamination(content) {
    this.service.addExamination(this.examinationToAdd).then((examination: ExaminationModel) => console.log(examination));
    content.close();
  }

  changeExaminationReferral(referral: boolean) {
    this.examinationToAdd.referral = referral;
  }

}
