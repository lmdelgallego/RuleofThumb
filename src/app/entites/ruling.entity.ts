export interface RulingEntity {
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
