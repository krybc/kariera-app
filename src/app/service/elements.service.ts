import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Element} from '../model/element';

@Injectable()
export class ElementsService {
  constructor(
    private http: HttpClient,
  ) { }

  public findAll(ids: number[] = null): Observable<Element[]> {
    return this.http.get<Element[]>('/elements');
  }

  public findById(id: number): Observable<Element> {
    return this.http.get<Element>(`/elements/${id}`);
  }
}
