import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployerDetailsService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  fetchEmployer(employerID: number): Promise<any> {
    return this.http.get(serverAddress + '/employee/' + employerID).toPromise();
  }

  deleteReceptionist(employerID: number) {
    return this.http.delete<void>(serverAddress + '/receptionist/' + employerID).pipe(catchError(this.handleError));
  }

  deleteAdmin(employerID: number) {
    return this.http.delete<void>(serverAddress + '/admin/' + employerID).pipe(catchError(this.handleError));
  }

  deleteDoctor(employerID: number) {
    return this.http.delete<void>(serverAddress + '/doctor/' + employerID).pipe(catchError(this.handleError));
  }
}
