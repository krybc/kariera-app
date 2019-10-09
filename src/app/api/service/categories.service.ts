import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';

@Injectable()
export class CategoriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Category[]> {
    return this.http
      .get<Category[]>('/categories')
      .pipe(
        map(result => plainToClass(Category, result as object[]))
      );
  }

  public getById(id: number): Observable<Category> {
    return this.http
      .get<Category>(`/categories/${id}`)
      .pipe(
        map(result => plainToClass(Category, result as object))
      );
  }
}
