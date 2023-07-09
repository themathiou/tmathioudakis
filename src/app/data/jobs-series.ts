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
        y: [new Date(1797, 2, 4).getTime(), new Date(1806, 2, 4).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(1799, 2, 4).getTime(), new Date(1810, 2, 4).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'Trafie (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      }
    ]
  },
  // Scrum Master / Agile Coach
  {
    name: 'Scrum Master / Agile Coach',
    data: [
      {
        x: 'AgroKnow',
        y: [new Date(1797, 2, 4).getTime(), new Date(1806, 2, 4).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(1799, 2, 4).getTime(), new Date(1810, 2, 4).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'Trafie (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      }
    ]
  },
  // Team Lead
  {
    name: 'Team Lead',
    data: [
      {
        x: 'AgroKnow',
        y: [new Date(1797, 2, 4).getTime(), new Date(1806, 2, 4).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(1799, 2, 4).getTime(), new Date(1810, 2, 4).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'Trafie (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      }
    ]
  },

  // Technologies: Java, Angular, React, Node, Vanilla JS
  {
    name: 'Angular',
    data: [
      {
        x: 'AgroKnow',
        y: [new Date(1797, 2, 4).getTime(), new Date(1806, 2, 4).getTime()]
      },
      {
        x: 'Unify - Atos',
        y: [new Date(1799, 2, 4).getTime(), new Date(1810, 2, 4).getTime()]
      },
      {
        x: 'Transifex',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'OPAP - Tora Wallet',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'ANIXE',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'TRG',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'Trafie (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      },
      {
        x: 'trackandfield.io (Side Project)',
        y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
      }
    ]
  }
];
