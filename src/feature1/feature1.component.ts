import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRefrence from './refrence';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1Component implements OnInit {

  refName$: Observable<string>;
  refCount$: Observable<number>;

  constructor(private store: Store<fromRefrence.State>) {
    this.refName$ = this.store.pipe(select(fromRefrence.getRefrenceStateName));
    this.refCount$ = this.store.pipe(select(fromRefrence.getRefrenceStateCount));
  }

  ngOnInit() {
  }

  add() {
    this.store.dispatch(new fromRefrence.RefrenceAdd());
  }

  subtract() {
    this.store.dispatch(new fromRefrence.RefrenceSubtract());
  }

  reset() {
    this.store.dispatch(new fromRefrence.RefrenceReset());
  }
}
