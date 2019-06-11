import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {EmployeesModels} from './employees/models/employees.models';
import {AppService} from './app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BD2 Clinic';
  userType = '';
  userID = 0;
  login: string;
  password: string;
  falseLogin = false;
  user: EmployeesModels;
  image = '../../assets/images/medical.jpg';

  constructor(private router: Router, private service: AppService, private modalService: NgbModal) {
  }

  fetchUserInfo() {
    this.service.fetchUser(this.userID).then((user: EmployeesModels) => this.user = user);
  }
  loginToSystem(content) {
    // this.userType = 1;
    // this.userID = 7;
    // this.fetchUserInfo();
    // this.router.navigate(['login']);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  logIn(content) {
    this.userID = this.service.logIn(this.login, this.password);
    if (this.userID !== 0) {
      this.fetchUserInfo();
      this.falseLogin = false;
      this.userType = this.user.role;
      content.close();
      this.router.navigate(['']);
    } else {
      this.falseLogin = true;
    }
  }

  logOut() {
    this.user.role = '';
    this.userType = '';
    this.router.navigate(['']);
  }
}
