import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {EmployeesModels} from './employees/models/employees.models';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BD2 Clinic';
  userType = 3;
  userID = 1;
  user: EmployeesModels;
  image = '../../assets/images/medical.jpg';

  constructor(private router: Router, private service: AppService) {
    this.fetchUserInfo();
  }

  fetchUserInfo() {
    this.service.fetchUser(this.userID).then((user: EmployeesModels) => this.user = user);
  }
  loginToSystem() {
    this.userType = 1;
    this.userID = 7;
    this.fetchUserInfo();
    // this.router.navigate(['login']);
  }

  logOut() {
    this.userType = 0;
    this.router.navigate(['']);
  }
}
