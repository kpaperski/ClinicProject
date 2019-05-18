import {DoctorDetailsModel} from '../models/doctor-details.model';

export const mockDoctorDetails: DoctorDetailsModel[] = [
  {
    employerData: {
      id: 1,
      login: 'jkow',
      password: 'jkow1',
      firstname: 'Jan',
      surname: 'Kowalski',
      employerRole: 'lekarz'
    },
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
    employerData: {
      id: 2,
      login: 'akow',
      password: 'akow2',
      firstname: 'Anna',
      surname: 'Kowalska',
      employerRole: 'lekarz'
    },
    specialization: [
      {
        id: 3,
        name: 'okulista'
      }
    ],
  },
  {
    employerData: {
      id: 3,
      login: 'rnow',
      password: 'rnow3',
      firstname: 'Ryszard',
      surname: 'Nowak',
      employerRole: 'lekarz'
    },
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
    employerData: {
      id: 4,
      login: 'tnow',
      password: 'tnow4',
      firstname: 'Teresa',
      surname: 'Nowak',
      employerRole: 'lekarz'
    },
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
    employerData: {
      id: 5,
      login: 'imic',
      password: 'imic4',
      firstname: 'Irena',
      surname: 'Michalska',
      employerRole: 'lekarz'
    },
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
    employerData: {
      id: 6,
      login: 'gmic',
      password: 'gmic4',
      firstname: 'Grażyna',
      surname: 'Mickiewicz',
      employerRole: 'lekarz'
    },
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
