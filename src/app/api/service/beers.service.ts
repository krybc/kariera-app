import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Comment} from '../model/comment';
import {Element} from '../model/element';

@Injectable()
export class BeersService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Beer[]> {
    return this.http
      .get<Beer[]>('/beers')
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['simple'] }))
      );
  }

  public getListComposed(): Observable<Beer[]> {
    return this.http
      .get<Beer[]>('/beers/composed')
      .pipe(
        map(result => plainToClass(Beer, result as object[], { groups: ['composed'] }))
      );
  }

  public getById(id: number): Observable<Beer> {
    return this.http
      .get<Beer>(`/beers/${id}`)
      .pipe(
        map(result => plainToClass(Beer, result as object, { groups: ['simple'] }))
      );
  }

  public getComments(id: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(`/beers/${id}/comments`)
      .pipe(
        map(result => plainToClass(Comment, result as object[]))
      );
  }

  public getElements(id: number): Observable<Element[]> {
    return this.http
      .get<Element[]>(`/beers/${id}/elements`)
      .pipe(
        map(result => plainToClass(Element, result as object[]))
      );
  }
}
