import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RulingEntity } from '../entites/ruling.entity';

@Injectable({
  providedIn: 'root'
})
export class RulingService {

  constructor(private http: HttpClient) { }

  getRuling(): Observable<RulingEntity[]> {
    return this.http.get<RulingEntity[]>('../../assets/data/data.json');
  }
}
