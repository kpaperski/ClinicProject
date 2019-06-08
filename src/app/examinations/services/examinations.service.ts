import { Injectable } from '@angular/core';
import {ExaminationModel} from '../models/examination.model';
import {MockExamination} from '../mock-data/mock-examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsService {

  constructor() { }

  fetchExaminationList(): Promise<ExaminationModel[]> {
    return Promise.resolve(MockExamination);
  }

  addExamination(examinationToAdd: ExaminationModel) {
    return Promise.resolve(examinationToAdd);
  }
}
