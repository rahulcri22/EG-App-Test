import { Injectable } from '@angular/core';
import { Urls } from '../core/utils/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFact } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  constructor(private http: HttpClient) { }

  getCatFact(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>(Urls.getCatFact);
  }
}
