import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Element} from '../model/element';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';

@Injectable()
export class ElementsService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(ids: number[] = null): Observable<Element[]> {
    return this.http
      .get<Element[]>('/elements')
      .pipe(
        map(result => plainToClass(Element, result as object[]))
      );
  }

  public getById(id: number): Observable<Element> {
    return this.http
      .get<Element>(`/elements/${id}`)
      .pipe(
        map(result => plainToClass(Element, result as object))
      );
  }
}
