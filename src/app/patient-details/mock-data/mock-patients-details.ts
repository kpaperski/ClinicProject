import {PatientDetailsModel} from '../models/patient-details.model';

export const mockPatientDetails: PatientDetailsModel[] = [
  {
    id: 1,
    firstname: 'Karol',
    surname: 'Pąperski',
    phoneNumber: 628362864,
    pesel: '93345283845',
    address: {
      id: 1,
      postCode: '02793',
      city: 'Warszawa',
      street: 'Kolorowa',
      houseNumber: '2C/137'
    }
  },
  {
    id: 2,
    firstname: 'Aleksandra',
    surname: 'Kot',
    phoneNumber: 674325267,
    pesel: '93345283845',
    address: {
      id: 2,
      postCode: '05423',
      city: 'Warszawa',
      street: 'Perłowa',
      houseNumber: '3/15'
    }
  },
  {
    id: 3,
    firstname: 'Kinga',
    surname: 'Lesisz',
    phoneNumber: 573345354,
    pesel: '93345283845',
    address: {
      id: 3,
      postCode: '04942',
      city: 'Warszawa',
      street: 'Niebieska',
      houseNumber: '37'
    }
  },
  {
    id: 4,
    firstname: 'Mateusz',
    surname: 'Kopeć',
    phoneNumber: 725423413,
    pesel: '93345283845',
    address: {
      id: 4,
      postCode: '04942',
      city: 'Warszawa',
      street: 'Pomarańczowa',
      houseNumber: '19/61'
    }
  }
  ];
