import {ExaminationModel} from '../models/examination.model';

export const MockExamination: ExaminationModel[] = [
  {
    id: 1,
    name: 'konsultacje lekarza rodzinnego',
    price: 50,
    referralNeeded: false
  },
  {
    id: 2,
    name: 'konsultacje specjalisty',
    price: 100,
    referralNeeded: false
  },
  {
    id: 3,
    name: 'badanie wzroku',
    price: 100,
    referralNeeded: false
  },
  {
    id: 4,
    name: 'badanie ultrasonograficzne',
    price: 50,
    referralNeeded: false
  }
];
