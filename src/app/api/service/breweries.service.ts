import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Brewery} from '../model/brewery';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Beer} from '../model/beer';

@Injectable()
export class BreweriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Brewery[]> {
    return this.http
      .get<Brewery[]>('/breweries')
      .pipe(
        map(result => plainToClass(Brewery, result as object[], { groups: ['simple'] }))
      );
  }

  public getById(id: number): Observable<Brewery> {
    return this.http
      .get<Brewery>(`/breweries/${id}`)
      .pipe(
        map(result => plainToClass(Brewery, result as object, { groups: ['simple'] }))
      );
  }

  public getBeers(id: number): Observable<Beer[]> {
    return this.http
      .get<Beer[]>(`/breweries/${id}/beers`)
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['simple'] }))
      );
  }

  public getBeersComposed(id: number): Observable<Beer[]> {
    return this.http
      .get<Beer[]>(`/breweries/${id}/beersComposed`)
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['composed'] }))
      );
  }
}
