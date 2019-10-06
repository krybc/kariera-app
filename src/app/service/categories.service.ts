import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../model/category';

@Injectable()
export class CategoriesService {
  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Category[]> {
    return this.http.get<Category[]>('/categories');
  }

  public getById(id: number): Observable<Category> {
    return this.http.get<Category>(`/categories/${id}`);
  }
}
