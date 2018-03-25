import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { RefrenceActions, RefrenceActionTypes } from './refrence.actions';

export interface State {
  name: string;
  count: number;
}

export const initialState: State = {
  name: 'refrence-state',
  count: 0,
};

export function reducer(state = initialState, action: RefrenceActions): State {
  switch (action.type) {

    case RefrenceActionTypes.Add: {
      return Object.assign(
        {},
        state, {
          count: (state.count + 1)
        });
    }
    case RefrenceActionTypes.Subtract: {
      return Object.assign(
        {},
        state, {
          count: (state.count - 1)
        });
    }
    case RefrenceActionTypes.Reset: {
      return Object.assign(
        {},
        state, {
          count: 0
        });
    }
    default:
      return state;
  }
}

export const getReferenceState = createFeatureSelector<State>('refrence');

export const getRefrenceStateName = createSelector(
  getReferenceState,
  (state) => state.name
);

export const getRefrenceStateCount = createSelector(
  getReferenceState,
  (state) => state.count
);
