import { Injectable } from '@angular/core';


@Injectable()

export class AuthService{

  
  constructor() {
      
  }

  getAuthorizationToken() {
      
      return localStorage.getItem('auth_token');
  }

  setAuthorizationToken(key:string,data: string) {

      localStorage.setItem('auth_token',data);
  }

  removeAuthorizationToken() {

      localStorage.removeItem('auth_token');
  }


}
