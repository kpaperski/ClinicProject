import { Injectable } from '@angular/core';
import {SpecializationModel} from '../models/specialization.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

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

  fetchSpecializationList(): Promise<any> {
    return this.http.get(serverAddress + '/specialization').toPromise();
  }

  addSpecialization(specializationToAdd: SpecializationModel): Promise<any> {
    return this.http.post(serverAddress + '/specialization', specializationToAdd).toPromise();
  }

  deleteSpecialization(specializationID: number) {
    return this.http.delete<void>(serverAddress + '/specialization/' + specializationID).pipe(catchError(this.handleError));
  }
}
