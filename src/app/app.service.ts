import { Injectable } from '@angular/core';
import {EmployeesModels} from './employees/models/employees.models';
import {MockEmployees} from './employees/mock-data/mock-employees';
import {serverAddress} from '../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  usersList: EmployeesModels[];

  fetchUser(userID: number): Promise<any> { //zmienić !!!!!!!!!!!!!!!!!!
    return this.http.get(serverAddress + '/employee/' + userID).toPromise();
    // const userToReturn: EmployeesModels = MockEmployees.filter(employer => employer.id === userID)[0];
    // return Promise.resolve(userToReturn);
  }

  fetchUsers(): Promise<any> {
    return this.http.get(serverAddress + '/employee').toPromise();
  }


  logIn(login: string, password: string): number {
    this.fetchUsers().then((list: EmployeesModels[]) => this.usersList = list);
    const user: EmployeesModels = this.usersList.filter(employer => (employer.login === login && employer.password === password))[0];
    if (user) {
      return user.id;
    } else {
      return 0;
    }
  }
}
