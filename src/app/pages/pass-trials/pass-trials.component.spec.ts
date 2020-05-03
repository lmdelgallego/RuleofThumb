import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassTrialsComponent } from './pass-trials.component';

describe('PassTrialsComponent', () => {
  let component: PassTrialsComponent;
  let fixture: ComponentFixture<PassTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
