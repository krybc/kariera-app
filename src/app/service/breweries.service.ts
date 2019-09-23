import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Brewery} from '../model/brewery';

@Injectable()
export class BreweriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public findAll(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>('/breweries');
  }

  public findById(id: number): Observable<Brewery> {
    return this.http.get<Brewery>(`/breweries/${id}`);
  }
}
