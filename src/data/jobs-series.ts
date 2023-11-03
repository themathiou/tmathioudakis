interface Expertise {
  name: string;
  data: {
    x: string; // company name
    y: [number, number]; // [from, to]
  }[];
}

export const jobsSeries: Expertise[] = [
  // ROLES: Software Engineer, Scrum Master / Agile Coach, Team Lead

  // Software Engineer
  {
    name: 'Software Engineer',
    data: [
      {
        x: 'AgroKnow',
        y: [new Date(2012, 5, 1).getTime(), new Date(2014, 5, 30).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(2014, 6, 1).getTime(), new Date(2016, 10, 30).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(2016, 11, 1).getTime(), new Date(2016, 12, 1).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(2016, 12, 16).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(2018, 10, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      },
      {
        x: 'Trafie (Side Project)',
        y: [new Date(2016, 5, 1).getTime(), new Date(2020, 3, 1).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(2021, 11, 1).getTime(), new Date().getTime()]
      }
    ]
  },
  // Scrum Master / Agile Coach
  {
    name: 'Scrum Master / Agile Coach',
    data: [
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(2017, 10, 1).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(2019, 7, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      }
    ]
  },
  // Team Lead
  {
    name: 'Team Lead',
    data: [
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(2017, 10, 1).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(2019, 7, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(2022, 8, 1).getTime(), new Date().getTime()]
      }
    ]
  },

  // TECHNOLOGIES
  // Angular
  {
    name: 'Angular',
    data: [
      {
        x: 'AgroKnow',
        y: [new Date(2012, 5, 1).getTime(), new Date(2014, 5, 30).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(2014, 6, 1).getTime(), new Date(2016, 10, 30).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(2016, 12, 16).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(2018, 10, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      }
    ]
  },

  // React
  {
    name: 'React',
    data: [
      {
        x: 'Trafie (Side Project)',
        y: [new Date(2016, 5, 1).getTime(), new Date(2020, 3, 1).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(2021, 11, 1).getTime(), new Date().getTime()]
      }
    ]
  }
];
