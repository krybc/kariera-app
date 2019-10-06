import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';
import {Element} from '../model/element';
import {Comment} from '../model/comment';

@Injectable()
export class BeersService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Beer[]> {
    return this.http.get<Beer[]>('/beers');
  }

  public getById(id: number): Observable<Beer> {
    return this.http.get<Beer>(`/beers/${id}`);
  }

  public getElements(id: number): Observable<Element[]> {
    return this.http.get<Element[]>(`/beers/${id}/elements`);
  }

  public getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`/beers/${id}/comments`);
  }
}
