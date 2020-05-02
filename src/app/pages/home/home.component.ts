import { Component, OnInit } from '@angular/core';

interface RulingEntity {
  name: string;
  description: string;
  date: Date;
  category: string;
  imgUrl: string;
  votes: Votes;
}

interface Votes {
  total: number;
  up: number;
  down: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: RulingEntity[] =  [
    {
      name: 'Kanye West',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: new Date(),
      category: 'Entertainment',
      imgUrl: 'https://loremflickr.com/550/550/paris,boy/all?random=1',
      votes: {
        total: 100,
        up: 64,
        down: 36
      }
    },

    {
      name: 'Mark Zuckerberg',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: new Date(),
      category: 'Business',
      imgUrl: 'https://loremflickr.com/550/550/paris,boy/all?random=2',
      votes: {
        total: 100,
        up: 36,
        down: 64
      }
    },
    {
      name: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: new Date(),
      category: 'Politics',
      imgUrl: 'https://loremflickr.com/550/550/paris,girl/all?random=1',
      votes: {
        total: 100,
        up: 64,
        down: 36
      }
    },

    {
      name: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      date: new Date(),
      category: 'Entertainment',
      imgUrl: 'https://loremflickr.com/550/550/paris,girl/all?random=2',
      votes: {
        total: 100,
        up: 36,
        down: 64
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onVote(item: RulingEntity, vote) {
    console.log(item, vote);
    item.votes.total++;
    if( vote === 'up') {
      item.votes.up++;
    }
    if( vote === 'down') {
      item.votes.down++;
    }
  }

}
