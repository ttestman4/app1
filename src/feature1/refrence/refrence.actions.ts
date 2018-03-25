import { Action } from '@ngrx/store';

export enum RefrenceActionTypes {
  Add = '[Refrence] Add',
  Subtract = '[Refrence] Subtract',
  Reset = '[Refrence] Reset',
}

export class RefrenceAdd implements Action {
  readonly type = RefrenceActionTypes.Add;
}

export class RefrenceSubtract implements Action {
  readonly type = RefrenceActionTypes.Subtract;
}

export class RefrenceReset implements Action {
  readonly type = RefrenceActionTypes.Reset;
}

export type RefrenceActions =
  RefrenceAdd |
  RefrenceSubtract |
  RefrenceReset;
