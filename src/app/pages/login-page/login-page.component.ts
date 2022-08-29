import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //1.Creating reactive forms manually
  // loginForm = new FormGroup({
  //   email: new FormControl('abc@gmail.com'),
  //   password: new FormControl('1234568'),
  // });
  //link this to template

  //2.Creating reactive forms using form builder service

  //to diplaymessages on screen  :-
  loginResponse = '';
  loginClass = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    // email:['abc'],
    // password:['123']
    //validation is applied from controlling class
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });
  //validation is applied from controlling class.But to display error messages go back to html and get elements

  get email() {
    return this.loginForm.get('email');
    //returns reference of the element
  }

  get password() {
    return this.loginForm.get('password');
    //returns reference of the element
  }

  ngOnInit(): void {}

  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        // console.log(response);
        // if the password is correct,it will generate token
        this.loginResponse = 'login successfully,thank you';
        this.loginClass = 'alert-success';
        //store the data in a local storage once the login is successful
        localStorage.setItem('token', response.token);
        //As we cannot store object in local storage, we need to convert user data object into string
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem(
          'userName',
          JSON.stringify(response.user.firstName)
        );
        this.router.navigateByUrl('home');
      },
      (error) => {
        // console.log(error);
        this.loginResponse = 'login failed,try again';
        this.loginClass = 'alert-danger';
      }
    );
  }
}

//loginForm represents entire form group and formGroup has entire formData
//to display error message on screen,we need 2 prperties loginResponse and loginClass
