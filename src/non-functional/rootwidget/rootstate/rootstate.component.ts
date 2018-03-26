import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromNonFunctional from '../../../non-functional';

@Component({
  selector: 'app-rootstate',
  templateUrl: './rootstate.component.html',
  styleUrls: ['./rootstate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootstateComponent  {
  rootName$: Observable<string>;
  rootCount$: Observable<number>;

  constructor(private store: Store<fromNonFunctional.State>) {
    this.rootName$ = this.store.pipe(select(fromNonFunctional.getRootStateName));
    this.rootCount$ = this.store.pipe(select(fromNonFunctional.getRootStateCount));
  }

  add() {
    this.store.dispatch(new fromNonFunctional.Add());
  }

  subtract() {
    this.store.dispatch(new fromNonFunctional.Subtract());
  }

  reset() {
    this.store.dispatch(new fromNonFunctional.Reset());
  }

}
