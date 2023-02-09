import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private auth: AuthServiceService, private router: Router) {}

  @ViewChild('loginForm', { static: false })
  loginForm!: NgForm;

  public login() {
    this.auth
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(() => {
        this.router.navigate(['market']);
      });
  }
}
