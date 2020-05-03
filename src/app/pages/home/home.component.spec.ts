import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {MatButtonToggleModule, MatSnackBar ,MatIconModule, MatSnackBarModule} from '@angular/material';
import {Store} from '@ngrx/store';
import {RULING, RULING_LINST} from '../../../../test/fetch-ruling';
import {of} from 'rxjs';
import {RULING_ACTIONS} from '../../store/actions/ruling.actions';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const spySnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
  const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
  const dispatchSpy = storeSpy.dispatch as jasmine.Spy;
  const selectSpy = storeSpy.select as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [MatIconModule, MatButtonToggleModule, BrowserAnimationsModule],
      providers: [
        { provide: Store, useValue: storeSpy },
        {provide: MatSnackBar, useValue: spySnackBar}
      ]
    })
    .compileComponents();

  }));

  afterEach( () => {
    dispatchSpy.calls.reset();
    selectSpy.calls.reset();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    selectSpy.and.returnValue(of(RULING_LINST));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(dispatchSpy).toHaveBeenCalled();
    const [action] = dispatchSpy.calls.argsFor(0);
    expect(action.type).toBe(RULING_ACTIONS.FETCH_DATA);
  });

  it('should increment vote and increment vote "up"', () => {
    dispatchSpy.calls.reset();
    component.onVote(RULING, 'up');
    expect(dispatchSpy).toHaveBeenCalled();
    const [action] = dispatchSpy.calls.argsFor(0);
    expect(action.type).toBe(RULING_ACTIONS.VOTE);
    expect(action.vote).toBe('up');
    expect(spySnackBar.open).toHaveBeenCalled();
    expect(spySnackBar.open).toHaveBeenCalledWith('Thank you for voting!' );
  });

  it('should not increment vote if vote is undefined', () => {
    dispatchSpy.calls.reset();
    component.onVote(undefined, undefined);
    expect(dispatchSpy).not.toHaveBeenCalled();
    expect(spySnackBar.open).not.toHaveBeenCalled();
  });
});
