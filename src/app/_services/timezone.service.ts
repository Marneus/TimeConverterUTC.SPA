import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timezone } from '../_models/Timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  baseUrl = 'https://localhost:44370/';
  constructor(private http: HttpClient) {}

  getTimezones(): Observable<Timezone[]> {
    return this.http.get<any[]>(this.baseUrl + 'timezones');
  }
}
