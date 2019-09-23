import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';

@Injectable()
export class BeersService {
  constructor(
    private http: HttpClient,
  ) { }

  public findAll(queryParams: {breweryId?: number} = {}): Observable<Beer[]> {
    let httpParams = new HttpParams();
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, queryParams[key]);
      }
    }
    return this.http.get<Beer[]>('/beers', { params: httpParams });
  }

  public findById(id: number): Observable<Beer> {
    return this.http.get<Beer>(`/beers/${id}`);
  }
}
