import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';


//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { appuser, appuserrole } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';
  user: appuser;

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  private _user = new BehaviorSubject<appuser>(new appuser());
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService,
    private authService: AuthService, private router : Router ) {
    super();
    this.loggedIn = !!localStorage.getItem('CurrentUser');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

  login(userName: string, password: string): Observable<any> {

    this._authNavStatusSource.next(true);
    return this.http.post(this.baseUrl + 'api/auth/login',
      JSON.stringify({ userName, password }));

  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);

  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(loginStatus: boolean) {
    this.loggedIn = loginStatus;
  }




  setUser(user: appuser) {


    if (localStorage.getItem["CurrentUser"] == null || typeof (localStorage.getItem) == "undefined") {

      localStorage.setItem("CurrentUser", JSON.stringify(user));

    }

    this.router.navigateByUrl('/home');

  }

  getCurrentUser() {

    if (localStorage.getItem["CurrentUser"] != null || typeof (localStorage.getItem) != "undefined") {

      return  <appuser>JSON.parse(localStorage.getItem("CurrentUser"));

    }

    this.router.navigateByUrl("/login");

  }

  getCurrentLoginId() {

    if (localStorage.getItem["CurrentUser"] != null || typeof (localStorage.getItem) != "undefined") {

      this.user = <appuser>JSON.parse(localStorage.getItem("CurrentUser"));
      return this.user.loginId;

    }

  }

  getCurrentRole(appid:number) {

    if (localStorage.getItem["CurrentUser"] != null || typeof (localStorage.getItem) != "undefined") {

      this.user = <appuser>JSON.parse(localStorage.getItem("CurrentUser"));
      return <appuserrole>(this.user.roles.find(user => user.appId == appid ));

    }
  }



}
