import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RulingEntity } from '../../entites/ruling.entity';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RulingService {

  constructor(private http: HttpClient, private localStore: StorageService) { }

  getRuling(): Observable<RulingEntity[]> {
    return this.http.get<RulingEntity[]>('../../assets/data/data.json');
  }
  saveRuling( rulingList: RulingEntity[]) {
    this.localStore.setLocalStorageItem('rulingList', rulingList);
  }
}
