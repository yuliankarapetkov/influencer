import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from './../models/category.interface';

const CATEGORY_API: string = 'http://localhost:3000/categories';

@Injectable()
export class CategoryService {
  constructor(private http: Http) { }

  getCategories(): Observable<Category[]> {
    return this.http
      .get(CATEGORY_API)
      .map((response: Response) => response.json());
  }
}