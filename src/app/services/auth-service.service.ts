import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  // Provide username and password for authentication, and once authentication is successful,
  //store JWT token in session
  login(username: string, password: string) {
    return this.httpClient
      .post<any>(environment.apiEndPoint + 'auth/login', { username, password })
      .pipe(
        tap((authData) => {
          sessionStorage.setItem('username', authData.username);
          let tokenStr = authData.tokenType + authData.accessToken;
          sessionStorage.setItem('token', tokenStr);
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return user !== null;
  }

  isUserSeller() {
    let token = sessionStorage.getItem('token')?.substring(7);
    if (token) {
      console.log('token', token);
      let obj = JSON.parse(atob(token.split('.')[1]));
      return obj.role.authority === 'ADMIN';
    }
    return false;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
