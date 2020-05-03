import { RulingEntity } from 'src/app/entites/ruling.entity';
import { Action, createReducer, on } from '@ngrx/store';
import {fetchDataRuling, fetchDataRulingFailure, fetchDataRulingSuccess, voteRuling} from '../actions/ruling.actions';


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
  })),
  on(voteRuling, (state, { rulingId, vote}) => {
    const rulingObj = {...state.ruling.find(r => r.id === rulingId)};
    rulingObj.votes = {
      ...rulingObj.votes,
      total: rulingObj.votes.total + 1
    };
    if ( vote === 'up') {
      rulingObj.votes.up++;
    }
    if ( vote === 'down') {
      rulingObj.votes.down++;
    }
    const updateRulings = state.ruling.map( r => (r.id === rulingId ? rulingObj : r ));
    localStorage.setItem('__appState__', JSON.stringify(updateRulings));
    return {
      ...state,
      ruling: updateRulings
    };
  })
);

export function reducer(state: RulingState, action: Action) {
  return featureReducer(state, action);
}
