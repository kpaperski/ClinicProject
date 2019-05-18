import {DoctorDetailsModel} from '../models/doctor-details.model';

export const mockDoctorDetails: DoctorDetailsModel[] = [
  {
    id: 1,
    firstname: 'Jan',
    surname: 'Kowalski',
    specialization: [
      {
        id: 1,
        name: 'lekarz rodzinny'
      },
      {
        id: 2,
        name: 'pediatra'
      }
    ],
  },
  {
    id: 2,
    firstname: 'Anna',
    surname: 'Nowak',
    specialization: [
      {
        id: 3,
        name: 'okulista'
      }
    ],
  },
  {
    id: 3,
    firstname: 'Ryszard',
    surname: 'Nowak',
    specialization: [
      {
        id: 1,
        name: 'lekarz rodzinny'
      },
      {
        id: 6,
        name: 'laryngolog'
      }
    ],
  },
  {
    id: 4,
    firstname: 'Teresa',
    surname: 'Nowak',
    specialization: [
      {
        id: 4,
        name: 'chirurg'
      },
      {
        id: 2,
        name: 'pediatra'
      }
    ],
  },
  {
    id: 5,
    firstname: 'Irena',
    surname: 'Michalska',
    specialization: [
      {
        id: 1,
        name: 'lekarz rodzinny'
      },
      {
        id: 2,
        name: 'pediatra'
      }
    ],
  },
  {
    id: 6,
    firstname: 'Grażyna',
    surname: 'Mickiewicz',
    specialization: [
      {
        id: 1,
        name: 'lekarz medycyny rodzinnej'
      },
      {
        id: 2,
        name: 'pediatra'
      }
    ],
  }
];
