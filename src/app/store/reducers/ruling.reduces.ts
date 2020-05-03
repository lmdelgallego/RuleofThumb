import { RulingEntity } from 'src/app/entites/ruling.entity';
import { Action, createReducer, on } from '@ngrx/store';
import {fetchDataRuling, fetchDataRulingFailure, fetchDataRulingSuccess} from '../actions/ruling.actions';


export interface RulingState {
  ruling: RulingEntity[];
  loading: boolean;
  error: any;
}

const initialState: RulingState = {
    ruling: [],
    loading: false,
    error: null
};

const featureReducer = createReducer(
  initialState,
  on(fetchDataRuling, state => ({
    ...state,
    loading: true
  })),
  on(fetchDataRulingSuccess, (state, { data }) => ({
    ...state,
    ruling: [...data],
    loading: false
  })),
  on(fetchDataRulingFailure, state => ({
    ...state,
    loading: false,
    error: 'Error en la carga'
  }))
);

export function reducer(state: RulingState, action: Action) {
  return featureReducer(state, action);
}
