import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Brewery} from '../model/brewery';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';

@Injectable()
export class BreweriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public findAll(): Observable<Brewery[]> {
    return this.http
      .get<Brewery[]>('/breweries')
      .pipe(
        map(result => plainToClass(Brewery, result as object[], { groups: ['simple'] }))
      );
  }

  public findById(id: number): Observable<Brewery> {
    return this.http
      .get<Brewery>(`/breweries/${id}`)
      .pipe(
        map(result => plainToClass(Brewery, result as object, { groups: ['simple'] }))
      );
  }
}
