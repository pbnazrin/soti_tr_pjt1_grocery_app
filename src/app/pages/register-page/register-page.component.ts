import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  // userModel = new User('Mark', 'm@g.com', '676696876', '123456');
  // This userModel class object represents user Data.Sometimes I need to bind this with form
  // that is these data has to be displayed by default in theform'
  // These properties can be directly accessed in html using {{userModel}}
  //Make everything optional by putting ? in user.model.ts
  userModel = new User();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  // onFormSubmit(data: any) {
  //   console.log(data);
  // }
  onFormSubmit() {
    //console.log(this.userModel);
    this.auth.register(this.userModel).subscribe((response) => {
      console.log(response);
    });
  }
}
