import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {fetchDataRuling, fetchDataRulingFailure, fetchDataRulingSuccess} from '../actions/ruling.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RulingService} from '../../service/ruling/ruling.service';

@Injectable()
export class RulingEffects {
  @Effect()
  fetchRulingEffect$: Observable<Action> = this.actions$.pipe(
    ofType(fetchDataRuling),
    switchMap( () =>
      this.rulingService.getRuling().pipe(
        map( data => fetchDataRulingSuccess({data})),
        catchError( error => of(fetchDataRulingFailure(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private rulingService: RulingService
  ) {}
}
