import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

const urlApi: string = 'http://localhost:3001';

export interface LoginResponse {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(user: LoginResponse) {
    return this.httpClient
      .post<LoginResponse>(`${urlApi}/auth/login`, user)
      .pipe(
        tap((value: any) => {
          sessionStorage.setItem('token', value.access_token);
        })
      );
  }
}
