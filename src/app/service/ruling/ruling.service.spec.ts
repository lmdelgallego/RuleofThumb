import { TestBed } from '@angular/core/testing';

import { RulingService } from './ruling.service';
import {HttpClient} from '@angular/common/http';
import {RULING_LINST} from '../../../../test/fetch-ruling';
import {of} from 'rxjs';

describe('RulingService', () => {

  let service: RulingService;
  const spyHttp = {
    get: jasmine.createSpy('get')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: spyHttp}
      ]
    });
    service = TestBed.get(RulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch ruling data', () => {
    spyHttp.get.and.returnValue(of(RULING_LINST));
    service.getRuling()
      .subscribe(data => {
        expect(data).toEqual(RULING_LINST);
      });
  });
});
