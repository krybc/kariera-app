import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';

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
    return this.http
      .get<Beer[]>('/beers', { params: httpParams })
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['simple'] }))
      );
  }

  public findAllComposed(queryParams: {breweryId?: number} = {}): Observable<Beer[]> {
    let httpParams = new HttpParams();
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, queryParams[key]);
      }
    }
    return this.http
      .get<Beer[]>('/beers/composed', { params: httpParams })
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['composed']}))
      );
  }

  public findById(id: number): Observable<Beer> {
    return this.http
      .get<Beer>(`/beers/${id}`)
      .pipe(
        map(result => plainToClass(Beer, result as object))
      );
  }
}
