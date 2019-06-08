import {AppointmentDetailsModel} from '../models/appoitment-details.model';

export const MockAppointmentDetails: AppointmentDetailsModel[] = [
  {
    id: 1,
    patient: {
      id: 1,
      firstname: 'Karol',
      surname: 'Pąperski',
      phoneNumber: 628362864,
      address: {
        id: 1,
        postCode: '02793',
        city: 'Warszawa',
        street: 'Kolorowa',
        houseNumber: '2C/137'
      }
    },
    doctorID: 1,
    time: '8:00-8:15',
    examination: [],
    referral: null,
  },
  {
    id: 2,
    patient: {
      id: 3,
      firstname: 'Kinga',
      surname: 'Lesisz',
      phoneNumber: 573345354,
      address: {
        id: 3,
        postCode: '04942',
        city: 'Warszawa',
        street: 'Niebieska',
        houseNumber: '37'
      }
    },
    doctorID: 1,
    time: '8:15-8:30',
    examination: [],
    referral: null,
  },
  {
    id: 3,
    patient: {
      id: 4,
      firstname: 'Mateusz',
      surname: 'Kopeć',
      phoneNumber: 725423413,
      address: {
        id: 4,
        postCode: '04942',
        city: 'Warszawa',
        street: 'Pomarańczowa',
        houseNumber: '19/61'
      }
    },
    doctorID: 1,
    time: '8:30-8:45',
    examination: [],
    referral: null,
  },
  {
    id: 4,
    patient: {
      id: 2,
      firstname: 'Aleksandra',
      surname: 'Kot',
      phoneNumber: 674325267,
      address: {
        id: 2,
        postCode: '05423',
        city: 'Warszawa',
        street: 'Perłowa',
        houseNumber: '3/15'
      }
    },
    doctorID: 1,
    time: '8:45-9:00',
    examination: [],
    referral: null,
  },
];
