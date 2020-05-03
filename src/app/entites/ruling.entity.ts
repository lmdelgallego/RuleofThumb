export interface RulingEntity {
  id: number;
  name: string;
  description: string;
  date: string;
  category: string;
  imgUrl: string;
  votes: Votes;
}

interface Votes {
  total: number;
  up: number;
  down: number;
}
