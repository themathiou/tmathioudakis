interface Expertise {
  name: string;
  data: {
    x: string; // company name
    y: [number, number]; // [from, to]
  }[];
}

enum RoleNames {
  SoftwareEngineer = 'Software Engineer',
  ScrumMasterAgileCoach = 'Scrum Master / Agile Coach',
  TeamLead = 'Team Lead',
  Angular = 'Angular',
  React = 'React'
}

enum CompanyNames {
  AgroKnow = 'AgroKnow',
  UnifyAtos = 'Unify - Atos',
  Transifex = 'Transifex',
  OPAP = 'OPAP - Tora Wallet',
  ANIXE = 'ANIXE',
  TRG = 'TRG',
  Trafie = 'Trafie (Side Project)',
  TrackAndField = 'trackandfield.io (Side Project)',
  Athlead = 'Athlead (Side Project)'
}

export const jobsSeries: Expertise[] = [
  // Software Engineer
  {
    name: RoleNames.SoftwareEngineer,
    data: [
      {
        x: CompanyNames.AgroKnow,
        y: [new Date(2012, 5, 1).getTime(), new Date(2014, 5, 30).getTime()]
      },
      {
        x: CompanyNames.UnifyAtos,
        y: [new Date(2014, 6, 1).getTime(), new Date(2016, 10, 30).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(2016, 11, 1).getTime(), new Date(2016, 12, 1).getTime()]
      },
      {
        x: CompanyNames.OPAP,
        y: [new Date(2016, 12, 16).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: CompanyNames.ANIXE,
        y: [new Date(2018, 10, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: CompanyNames.TRG,
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      },
      {
        x: CompanyNames.Trafie,
        y: [new Date(2016, 5, 1).getTime(), new Date(2020, 3, 1).getTime()]
      },
      {
        x: CompanyNames.TrackAndField,
        y: [new Date(2021, 11, 1).getTime(), new Date().getTime()]
      },
      {
        x: CompanyNames.Athlead,
        y: [new Date(2023, 11, 1).getTime(), new Date().getTime()]
      }
    ]
  },
  // Scrum Master / Agile Coach
  {
    name: RoleNames.ScrumMasterAgileCoach,
    data: [
      {
        x: CompanyNames.OPAP,
        y: [new Date(2017, 10, 1).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: CompanyNames.ANIXE,
        y: [new Date(2019, 7, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: CompanyNames.TRG,
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      }
    ]
  },
  // Team Lead
  {
    name: RoleNames.TeamLead,
    data: [
      {
        x: CompanyNames.OPAP,
        y: [new Date(2017, 10, 1).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: CompanyNames.ANIXE,
        y: [new Date(2019, 7, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: CompanyNames.TRG,
        y: [new Date(2022, 8, 1).getTime(), new Date().getTime()]
      },
      {
        x: CompanyNames.Athlead,
        y: [new Date(2023, 11, 1).getTime(), new Date().getTime()]
      }
    ]
  },

  // TECHNOLOGIES
  // Angular
  {
    name: RoleNames.Angular,
    data: [
      {
        x: CompanyNames.AgroKnow,
        y: [new Date(2012, 5, 1).getTime(), new Date(2014, 5, 30).getTime()]
      },
      {
        x: CompanyNames.UnifyAtos,
        y: [new Date(2014, 6, 1).getTime(), new Date(2016, 10, 30).getTime()]
      },
      {
        x: CompanyNames.OPAP,
        y: [new Date(2016, 12, 16).getTime(), new Date(2018, 9, 1).getTime()]
      },
      {
        x: CompanyNames.ANIXE,
        y: [new Date(2018, 10, 1).getTime(), new Date(2022, 5, 1).getTime()]
      },
      {
        x: CompanyNames.TRG,
        y: [new Date(2022, 5, 23).getTime(), new Date().getTime()]
      }
    ]
  },

  // React
  {
    name: RoleNames.React,
    data: [
      {
        x: CompanyNames.Trafie,
        y: [new Date(2016, 5, 1).getTime(), new Date(2020, 3, 1).getTime()]
      },
      {
        x: CompanyNames.TrackAndField,
        y: [new Date(2021, 11, 1).getTime(), new Date().getTime()]
      }
    ]
  }
];
