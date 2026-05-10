import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userRegister, userRegisterResponse } from '../models/userRegister';
import { userLogin, userLoginResponse } from '../models/userLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRegister {
  
  private API_URL_REGISTER = 'http://localhost:8080/users/register';
  private API_URL_LOGIN = 'http://localhost:8080/users/login';
  
  constructor(private http: HttpClient) {

  }
  
  userRegister(userRegister: userRegister) : Observable<userRegisterResponse> {
   return this.http.post<userRegisterResponse>(this.API_URL_REGISTER, userRegister);
  }

  userLogin(userLogin: userLogin): Observable<userLoginResponse> {
   return this.http.post<userLoginResponse>(this.API_URL_LOGIN, userLogin);
  }
  
}
