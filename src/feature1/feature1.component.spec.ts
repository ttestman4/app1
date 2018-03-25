import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NonFunctionalModule } from '../non-functional/non-functional.module';
import { RefrenceModule } from './refrence/refrence.module';
import { Feature1Component } from './feature1.component';

describe('Feature1Component', () => {
  let component: Feature1Component;
  let fixture: ComponentFixture<Feature1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NonFunctionalModule,
        RefrenceModule,
      ],
      declarations: [ Feature1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
