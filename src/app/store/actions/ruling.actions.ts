import {createAction, props} from '@ngrx/store';
import {RulingEntity} from '../../entites/ruling.entity';

export enum RULING_ACTIONS {
  FETCH_DATA = '[Ruling/API] Fetch Data',
  FETCH_DATA_SUCCESS = '[Ruling/API] Fetch Data Success',
  FETCH_DATA_FAILURE = '[Ruling/API] Fetch Data Failure',
}

export const fetchDataRuling = createAction(RULING_ACTIONS.FETCH_DATA);
export const fetchDataRulingSuccess = createAction(RULING_ACTIONS.FETCH_DATA_SUCCESS, props<{ data: RulingEntity[]}>());
export const fetchDataRulingFailure = createAction(RULING_ACTIONS.FETCH_DATA_FAILURE, props<{error: any}>());
