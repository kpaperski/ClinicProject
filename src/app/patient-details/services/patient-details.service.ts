import {Injectable} from '@angular/core';
import {PatientDetailsModel} from '../models/patient-details.model';
import {mockPatientDetails} from '../mock-data/mock-patients-details';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

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

  fetchPatient(patientID: number): Promise<any> {
    return this.http.get(serverAddress + '/patients/' + patientID).toPromise();
  }

  deletePatient(patientID: number) {
    return this.http.delete<void>(serverAddress + '/patients/' + patientID).pipe(catchError(this.handleError));
  }
}
