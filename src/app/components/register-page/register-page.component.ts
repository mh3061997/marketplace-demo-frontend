import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  constructor(private auth: AuthServiceService, private router: Router) {}

  @ViewChild('registerForm', { static: false })
  registerForm!: NgForm;

  public register() {
    this.auth
      .register(
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
