import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../../core/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private http = inject(HttpClient);

  getUniversities(): Observable<any> {
    return this.http.get(Urls.getUniversities);
  }
}
