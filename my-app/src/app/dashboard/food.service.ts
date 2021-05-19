import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Food } from './food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodURL = 'api/foods'; 

  constructor(private http: HttpClient) { }

  searchFood(term: any): Observable<Food[]> {
    console.log("GET", term);

    let url = `assets/food.json`;

    const options = term ?
      { params: new HttpParams().set('init', term[0]).set('material', term[1]).set('type', term[2]) } : {};
    console.log(options);
    return this.http.get<Food[]>(this.foodURL, options)
      .pipe(
      tap(_ => this.log(`fetched food based on search term ${term}`)),
      catchError(this.handleError<Food[]>('searchFood', []))
      );
  }

  getFood(id: number): Observable<Food> {
    const url = `${this.foodURL}/${id}`;
    return this.http.get<Food>(url).pipe(
      tap(_ => this.log(`fetched food id=${id}`)),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

       console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.error('FoodService: ' + message);
  }
}