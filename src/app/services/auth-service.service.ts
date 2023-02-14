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
          sessionStorage.setItem('role', authData.roles[0]);
          let tokenStr = authData.tokenType + ' ' + authData.accessToken;
          sessionStorage.setItem('token', tokenStr);
        })
      );
  }

  register(username: string, email: string, password: string) {
    return this.httpClient.post<any>(
      environment.apiEndPoint + 'auth/register',
      { username, password, email, role: ['buyer'] }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return user !== null;
  }

  isUserSeller() {
    let role = sessionStorage.getItem('role');
    if (role) {
      return role === 'ROLE_SUPPLIER';
    }
    return false;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
