import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RootStateModule } from '../../root-state/root-state.module';
import { RootstateComponent } from './rootstate.component';

describe('RootstateComponent', () => {
  let component: RootstateComponent;
  let fixture: ComponentFixture<RootstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RootStateModule,
      ],
      declarations: [ RootstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
