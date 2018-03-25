import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromActions from './root.actions';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

export interface RootState {
  name: string;
  count: number;
}

const initialState: RootState = {
  name: 'root-state',
  count: 0,
};

export function reducer (state: RootState = initialState,
action: fromActions.RootActions): RootState {
  switch (action.type) {
    case fromActions.RootActionTypes.Add: {
      return Object.assign(
        {},
        state, {
          count: (state.count + 1)
        });
    }
    case fromActions.RootActionTypes.Subtract: {
      return Object.assign(
        {},
        state, {
          count: (state.count - 1)
        });
    }
    case fromActions.RootActionTypes.Reset: {
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

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  root: RootState;
}

export const reducers: ActionReducerMap<State> = {
  root: reducer,
};

// console.log all actions
export function logger(nextReducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return nextReducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.stopStoreDebug
  ? [logger, storeFreeze]
  : [];

export const getRootState = createFeatureSelector<RootState>('root');

export const getRootStateName = createSelector(
  getRootState,
  (rootState) => rootState.name
);

export const getRootStateCount = createSelector(
  getRootState,
  (rootState) => rootState.count
);
