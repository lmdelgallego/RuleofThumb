import { Component, OnInit } from '@angular/core';
import { RulingEntity } from 'src/app/entites/ruling.entity';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';
import {Store} from '@ngrx/store';
import {RulingState} from '../../store/reducers/ruling.reduces';
import {getRulings} from '../../store/selectors/ruling.selectos';
import {fetchDataRuling, voteRuling} from '../../store/actions/ruling.actions';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<RulingEntity[]>;

  constructor( private store: Store<RulingState>, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRulings();
  }

  getRulings() {
    this.store.dispatch(fetchDataRuling());
    this.items$ = this.store.select(getRulings);
  }

  onVote(item: RulingEntity, vote) {
    if ( vote ) {
      this.store.dispatch(voteRuling({ rulingId: item.id, vote}));
      this.toastr.success('Thank you for voting!' );
    }
  }

  getRelativeDate(date: string): string {
    return moment(date, 'YYYYMMDD').fromNow();
  }

}
