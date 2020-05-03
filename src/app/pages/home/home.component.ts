import { Component, OnInit } from '@angular/core';
import { RulingEntity } from 'src/app/entites/ruling.entity';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';
import {Store} from '@ngrx/store';
import {RulingState} from '../../store/reducers/ruling.reduces';
import {getRulings} from '../../store/selectors/ruling.selectos';
import {fetchDataRuling} from '../../store/actions/ruling.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<RulingEntity[]>;

  constructor( private store: Store<RulingState>) { }

  ngOnInit() {
    this.getRulings();
  }

  getRulings() {
    this.store.dispatch(fetchDataRuling());
    this.items$ = this.store.select(getRulings);
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
