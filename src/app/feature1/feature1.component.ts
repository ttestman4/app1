import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
