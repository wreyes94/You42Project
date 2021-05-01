import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class CardsService {

  // I would hide this better don't worry
  public accessKey = 'e50fc088-e4d5-4614-ada2-978daf489c74';
  public baseUrl = 'https://api.thecatapi.com/v1/breeds';
  public imageUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

  public getAllCats() {
    return this.http.get(`${this.baseUrl}?api_key=${this.accessKey}`)
      .pipe(catchError(this.handleError));
  }

  public grabCatInformation(name) {
    return this.http.get(`${this.imageUrl}?breed_id=${name}&api_key=${this.accessKey}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
