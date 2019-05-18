import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  images = ['../../assets/images/1.jpg', '../../assets/images/2.jpg', '../../assets/images/3.jpg']

  constructor() { }

  ngOnInit() {
  }

}
