import { Action } from '@ngrx/store';

export enum RootActionTypes {
    Add = '[Root] Add',
    Subtract = '[Root] Subtract',
    Reset = '[Root] Reset',
  }

export class Add implements Action {
    readonly type = RootActionTypes.Add;
}

export class Subtract implements Action {
readonly type = RootActionTypes.Subtract;
}

export class Reset implements Action {
readonly type = RootActionTypes.Reset;
}

export type RootActions =
Add |
Subtract |
Reset;
