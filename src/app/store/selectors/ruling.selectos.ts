import {RulingState} from '../reducers/ruling.reduces';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const rulingRootSelector = createFeatureSelector<RulingState>('ruling');
export const getRulingState = createSelector(rulingRootSelector, (state: RulingState) => state);

export const getRulings = createSelector( getRulingState , ( state: RulingState) => state.ruling);
