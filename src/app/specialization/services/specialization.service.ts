import { Injectable } from '@angular/core';
import {SpecializationModel} from '../models/specialization.model';
import {mockSpecializations} from '../mock-data/mock-specializations';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor() { }

  fetchSpecializationList(): Promise<SpecializationModel[]> {
    return Promise.resolve(mockSpecializations);
  }

  addSpecialization(specializationToAdd: SpecializationModel) {
    return Promise.resolve(specializationToAdd);
  }
}
