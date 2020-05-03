import { Component, OnInit } from '@angular/core';
import { RulingEntity } from 'src/app/entites/ruling.entity';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: RulingEntity[];

  constructor() { }

  ngOnInit() {
  }

  onVote(item: RulingEntity, vote) {
    item.votes.total++;
    if ( vote === 'up') {
      item.votes.up++;
    }
    if ( vote === 'down') {
      item.votes.down++;
    }
  }

}
