import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Brewery} from '../model/brewery';
import {Beer} from '../model/beer';

@Injectable()
export class BreweriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>('/breweries');
  }

  public getById(id: number): Observable<Brewery> {
    return this.http.get<Brewery>(`/breweries/${id}`);
  }

  public getBeers(id: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`/breweries/${id}/beers`);
  }
}
