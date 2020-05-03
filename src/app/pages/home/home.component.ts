import { Component, OnInit } from '@angular/core';
import { RulingEntity } from 'src/app/entites/ruling.entity';
import { RulingService } from 'src/app/service/ruling/ruling.service';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<RulingEntity[]>;

  constructor( private rulingService: RulingService) { }

  ngOnInit() {
    this.getRulings();
  }

  getRulings() {
    this.items$ = this.rulingService.getRuling();
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

  getRelativeDate(date: string): string {
    return moment(date, 'YYYYMMDD').fromNow();
  }

}
