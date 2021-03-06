import {RulingEntity} from '../src/app/entites/ruling.entity';

export const RULING_LINST: RulingEntity[] =[
    {
      id: 1,
      name: 'Kanye West',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: '20200218',
      category: 'Entertainment',
      imgUrl: 'https://loremflickr.com/550/550/paris,boy/all?random=1',
      votes: {
        total: 100,
        up: 64,
        down: 36
      }
    },

    {
      id: 2,
      name: 'Mark Zuckerberg',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: '20200218',
      category: 'Business',
      imgUrl: 'https://loremflickr.com/550/550/paris,boy/all?random=2',
      votes: {
        total: 100,
        up: 36,
        down: 64
      }
    },
    {
      id: 3,
      name: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: '20200218',
      category: 'Politics',
      imgUrl: 'https://loremflickr.com/550/550/paris,girl/all?random=1',
      votes: {
        total: 100,
        up: 64,
        down: 36
      }
    },

    {
      id: 4,
      name: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: '20200218',
      category: 'Entertainment',
      imgUrl: 'https://loremflickr.com/550/550/paris,girl/all?random=2',
      votes: {
        total: 100,
        up: 36,
        down: 64
      }
    }
];

export const RULING: RulingEntity = {
  id: 1,
  name: 'Kanye West',
  description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
  date: '20200218',
  category: 'Entertainment',
  imgUrl: 'https://loremflickr.com/550/550/paris,boy/all?random=1',
  votes: {
    total: 100,
    up: 64,
    down: 36
  }
};
