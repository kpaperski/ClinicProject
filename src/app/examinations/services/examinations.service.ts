import { Injectable } from '@angular/core';
import {ExaminationModel} from '../models/examination.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsService {

  constructor(private http: HttpClient) { }

  fetchExaminationList(): Promise<any> {
    return this.http.get(serverAddress + '/examination').toPromise();
  }

  addExamination(examinationToAdd: ExaminationModel): Promise<any> {
    return this.http.post(serverAddress + '/examination', examinationToAdd).toPromise();
  }
}
