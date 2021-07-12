import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class Productservice {

    private productUrl = 'api/products/products.json';
    
    constructor(private http: HttpClient) {
               
    }
    getProduct(): Observable<IProduct[]> {
        console.log(this.productUrl);
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        return throwError(errorMessage);
    }
}