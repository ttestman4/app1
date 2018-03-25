import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromNonFunctional from '../non-functional';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

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
