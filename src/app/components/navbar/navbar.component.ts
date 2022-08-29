import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  // constructor() {}
  constructor(public authService: AuthService) {}

  ngOnInit() {
    // let user = JSON.parse(localStorage.getItem('user'))
    // console.log('hi', user.firstName);
  }

  get name() {
    this.user = localStorage.getItem('userName');
    // return this.user.firstName;
    return this.user.replace(/['"]+/g, '');
    //return 'hi';
  }
}
